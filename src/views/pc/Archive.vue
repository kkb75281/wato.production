<template lang="pug">
main
    navBar
    section#section.archive
        //- ul(v-for="a in archive")
        //-     li
        //-         img(:src = "a.cover")
        ul
            li
            li
            li
            li
            li
            li
            li
            li
    section#section.others
        h2 Other works
        ul
            li
            li
            li
            li
            li
            li
            li
            li
    .archive-modal-wrap
        .archive-modal-inner 
            .archive-modal
                img(src="@/assets/img/example.png")
</template>

<script setup>
import { onMounted } from 'vue';
import navBar from '../../components/navBar.vue';

let youtube = [
    { link : 'src/assets/img/cut01.png' },
    { link : 'src/assets/img/cut02.png' },
    { link : 'src/assets/img/cut03.png' },
    { link : 'src/assets/img/cut04.png' },
    { link : 'src/assets/img/cut05.png' },
    { link : 'src/assets/img/cut06.png' },
    { link : 'src/assets/img/cut07.png' },
    { link : 'src/assets/img/cut08.png' },
]

onMounted(() => {
    let archive = document.querySelector('.archive');
    let archiveCard = document.querySelectorAll('.archive ul li');
    let archievModal = document.querySelector('.archive-modal-wrap');

    archiveCard.forEach((card) => {
        card.addEventListener('click', () => {
            archievModal.classList.add('show');
        })
    })
})
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
                display: inline-block;
                width: 32%;
                margin-right: 2%;
                margin-bottom: 2%;
                background-color: #d9d9d9;
                box-sizing: border-box;
                cursor: pointer;

                &::after {
                    content: '';
                    display: block;
                    padding-bottom: 100%;
                    // background-image: url(src/assets/img/cut08.png);
                    background-size: cover;
                    background-position: center;
                }
                &:nth-child(3n+3) {
                    margin-right: 0;
                }
            }
        }
        &.archive {
            padding-top: 5.5vw;

            ul {
                li {
                    &:nth-child(1) {
                        &::after {
                            background-image: url(src/assets/img/cut01.png);
                        }
                    }
                    &:nth-child(2) {
                        &::after {
                            background-image: url(src/assets/img/cut02.png);
                        }
                    }
                    &:nth-child(3) {
                        &::after {
                            background-image: url(src/assets/img/cut03.png);
                        }
                    }
                    &:nth-child(4) {
                        &::after {
                            background-image: url(src/assets/img/cut04.png);
                        }
                    }
                    &:nth-child(5) {
                        &::after {
                            background-image: url(src/assets/img/cut05.png);
                        }
                    }
                    &:nth-child(6) {
                        &::after {
                            background-image: url(src/assets/img/cut06.png);
                        }
                    }
                    &:nth-child(7) {
                        &::after {
                            background-image: url(src/assets/img/cut07.png);
                        }
                    }
                    &:nth-child(8) {
                        &::after {
                            background-image: url(src/assets/img/cut08.png);
                        }
                    }
                }
            }
        }
    }

    .archive-modal-wrap {
        position: fixed;
        left: 0;
        top: -99999px;
        min-height: 100%;
        width: 100%;
        z-index: 50000000000;
        text-align: center;
        background: rgba(0,0,0,0.6);

        &.show {
            top: 0;
        }
        .archive-modal-inner {
            position: absolute;
            margin: 0 auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            .archive-modal {
                img {
                    width: 100%;
                }
            }
        }
    }
}

@media (max-width: 900px) {
    main {
        #section {
            padding-top: 50px;

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
    }
}

@media (min-width: 1440px) {
    main {
        #section {
            padding: 0 30px 0 30px;
            margin-bottom: 112px;

            &.archiev {
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
    