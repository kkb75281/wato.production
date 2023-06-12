<template lang="pug">
main
    mobileNavBar
    section#section.archive
        ul
            li(v-for="a in archives" @click="modalShowControl")
                img(:src = "a.img")
    section#section.others
        h2 Short films
        ul
            li(v-for="f in films" @click="modalShowControl")
                    img(:src = "f.img")
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
    {
        img: 'src/assets/img/unicorn_1.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/unicorn_2.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/unicorn_3.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/unicorn_4.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/unicorn_5.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/unicorn_6.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/unicorn_7.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/shot_2.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/shot_3.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/shot_4.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/shot_5.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/shot_6.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/eros_1.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/eros_2.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/eros_3.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/eros_4.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/eros_5.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/eros_6.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/eros_7.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/eros_8.png',
        src: 'tgUPGJBHgZc'
    },
]

let films = [
    { img: 'src/assets/img/killing_1.png' },
    { img: 'src/assets/img/killing_2.png' },
    { img: 'src/assets/img/killing_3.png' },
    { img: 'src/assets/img/pie_1.png' },
    { img: 'src/assets/img/pie_2.png' },
    { img: 'src/assets/img/pie_3.png' },
    { img: 'src/assets/img/pie_4.png' },
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
    