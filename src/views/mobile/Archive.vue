<template lang="pug">
main
    mobileNavBar
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
import mobileNavBar from '../../components/mobileNavBar.vue';

let modalShow = ref(false);
let scrollPosition = 0;

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
    scrollPosition = window.pageYOffset;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
}

function modalHideControl() {
    modalShow.value = false;
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
}
</script>

<style lang="less" scoped>
main {
    position: relative;
    width: 100%;
    height: 100%;
    
    #section {
        padding: 0 20px;
        margin-bottom: 13vw;

        h2 {
            font-weight: 700;
            font-size: 7.2vw;
            margin-bottom: 2vw;
        }
        ul {
            width: 100%;
            height: 100%;
            text-align: center;

            li {
                position: relative;
                display: inline-block;
                width: 100%;
                margin-bottom: 4%;
                background-color: #d9d9d9;
                box-sizing: border-box;
                cursor: pointer;

                &::after {
                    content: '';
                    display: block;
                    padding-bottom: 100%;
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
            padding-top: 80px;
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
            width: 100%;
            transform: translate(-50%, -50%);
            z-index: 2;

            img {
                width: 100%;
            }
        }
    }
}
</style>
    