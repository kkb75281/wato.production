<template lang="pug">
main
    navBar
    section#section.archive
        ul
            li(v-for="a in archives" @click="modalShowControl")
                img(:src = "a.img")
    section#section.others
        h2 Other works
        ul
            li(v-for="o in others" @click="modalShowControl")
                    img(:src = "o.img")
    .archive-modal-wrap(:class="{show: modalShow}")
        .archive-modal-bg(@click="modalHideControl")
        .archive-modal
            img(src="@/assets/img/example.png")
</template>

<script setup>
import { ref } from 'vue';
import navBar from '../../components/navBar.vue';

let modalShow = ref(false);

let archives = [
    { img : 'src/assets/img/cut01.png' },
    { img : 'src/assets/img/cut02.png' },
    { img : 'src/assets/img/cut03.png' },
    { img : 'src/assets/img/cut04.png' },
    { img : 'src/assets/img/cut05.png' },
    { img : 'src/assets/img/cut06.png' },
    { img : 'src/assets/img/cut07.png' },
    { img : 'src/assets/img/cut08.png' },
    { img : 'src/assets/img/cut09.png' },
    { img : 'src/assets/img/cut10.png' },
    { img : 'src/assets/img/cut11.png' },
]

let others = [
    { img : 'src/assets/img/cut12.png' },
    { img : 'src/assets/img/cut13.png' },
    { img : 'src/assets/img/cut14.png' },
    { img : 'src/assets/img/cut15.png' },
    { img : 'src/assets/img/cut16.png' },
    { img : 'src/assets/img/cut17.png' },
    { img : 'src/assets/img/cut18.png' },
    { img : 'src/assets/img/cut19.png' },
]

function modalShowControl() {
    modalShow.value = true;
    document.querySelector('body').style.overflow = 'hidden';
}

function modalHideControl() {
    modalShow.value = false;
    document.querySelector('body').style.removeProperty('overflow');
}
</script>

<style lang="less" scoped>
main {
    position: relative;
    width: 100%;
    height: 100%;
    
    #section {
        padding: 0 30px;
        margin-bottom: 7vw;

        h2 {
            font-weight: 700;
            font-size: 2vw;
            margin-bottom: 2vw;
        }
        ul {
            width: 100%;
            height: 100%;
            text-align: center;

            li {
                position: relative;
                display: inline-block;
                width: 32%;
                margin-right: 2%;
                margin-bottom: 2%;
                background-color: #d9d9d9;
                box-sizing: border-box;
                transition: all 0.3s;
                cursor: pointer;

                &::after {
                    content: '';
                    display: block;
                    padding-bottom: 100%;
                }
                &:nth-child(3n+3) {
                    margin-right: 0;
                }
                &:hover {
                    scale: 0.98;
                }
                img {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        &.archive {
            padding-top: 5.5vw;
        }
    }

    .archive-modal-wrap {
        position: fixed;
        left: 0;
        top: -99999px;
        width: 100vw;
        height: 100vh;
        z-index: 999999;

        &.show {
            top: 0;
        }
        .archive-modal-bg {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            cursor: pointer;
            z-index: 1;
        }
        .archive-modal {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 80%;
            transform: translate(-50%, -50%);
            z-index: 2;

            img {
                width: 100%;
            }
        }
    }
}

@media (max-width: 900px) {
    main {
        #section {
            &.archive {
                padding-top: 50px;
            }

            ul {
                li {
                    width: 48.5%;
                    margin-right: 3%;
                    margin-bottom: 3%;

                    &:nth-child(2n+2) {
                        margin-right: 0;
                    }
                    &:nth-child(3n+3) {
                        margin-right: 3%;
                    }
                    &:nth-child(6n+6) {
                        margin-right: 0;
                    }
                }
            }
        }
        .archive-modal-wrap {
            .archive-modal {
                width: 100%;
            }
        }
    }
}

@media (min-width: 1440px) {
    main {
        #section {
            padding: 0 30px 0 30px;
            margin-bottom: 112px;

            &.archive {
                padding-top: 70px;
            }
            h2 {
                font-size: 32px;
                margin-bottom: 30px;
            }
            ul {
                width: 100%;
                height: 100%;
                position: relative;

                li {
                    display: inline-block;
                    width: 23.5%;
                    margin-right: 2%;
                    margin-bottom: 2%;
                    background-color: #d9d9d9;
                    box-sizing: border-box;
                    cursor: pointer;

                    &::after {
                        content: '';
                        display: block;
                        padding-bottom: 100%;
                    }
                    &:nth-child(3n+3) {
                        margin-right: 2%;
                    }
                    &:nth-child(4n+4) {
                        margin-right: 0;
                    }
                    &:nth-child(12n+12) {
                        margin-right: 0;
                    }
                }
            }

        }
    }
}
</style>
    