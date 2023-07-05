<template lang="pug">
main
    mobileNavBar
    section#section.archive
        ul
            li(v-for="a in archives" @click="clickVideo")
                img(:src = "a.img")
    section#section.shorts
        h2 Short films
        ul
            li(v-for="s in shorts" @click="clickVideo")
                img(:src = "s.img")    
    sui-overlay#overlay(ref="overlay" @click="modalHideControl" style="background: rgba(0, 0, 0, 0.6);")
        .modalCont.archive(style="width:80vw; height:60vh;")
            iframe.video(ref='videoIframe' style="width:100%; height:100%;" type="text/html" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
</template>

<script setup>
import { ref, nextTick, watch } from 'vue';
import { useRouter } from 'vue-router';
import mobileNavBar from '../../components/mobileNavBar.vue';

const router = useRouter();

let videoIframe = ref(null);
let overlay = ref(null);
let scrollPosition = 0;

let archives = [
    { img: 'src/assets/img/unicorn_1.png' },
    { img: 'src/assets/img/unicorn_2.png' },
    { img: 'src/assets/img/unicorn_3.png' },
    { img: 'src/assets/img/unicorn_4.png' },
    { img: 'src/assets/img/unicorn_5.png' },
    { img: 'src/assets/img/shot_1.png' },
    { img: 'src/assets/img/shot_2.png' },
    { img: 'src/assets/img/shot_3.png' },
    { img: 'src/assets/img/shot_4.png' },
    { img: 'src/assets/img/shot_5.png' },
    { img: 'src/assets/img/shot_6.png' },
    { img: 'src/assets/img/eros_1.png' },
    { img: 'src/assets/img/eros_2.png' },
    { img: 'src/assets/img/eros_3.png' },
    { img: 'src/assets/img/eros_4.png' },
    { img: 'src/assets/img/eros_5.png' },
    { img: 'src/assets/img/eros_6.png' },
    { img: 'src/assets/img/eros_7.png' },
    { img: 'src/assets/img/eros_8.png' },
]

let shorts = [
    { img: 'src/assets/img/killing_1.png' },
    { img: 'src/assets/img/killing_2.png' },
    { img: 'src/assets/img/killing_3.png' },
    { img: 'src/assets/img/pie_1.png' },
    { img: 'src/assets/img/pie_2.png' },
    { img: 'src/assets/img/pie_3.png' },
    { img: 'src/assets/img/pie_4.png' },
]

let youtubeSrc = {
    unicorn: '0QqAkRV0x_I',
    shot: 'tgUPGJBHgZc',
    eros: 'X7xz7qAyQMg',
    killing: 'eDN8PYmeyP8',
    pie: 'ZxHEzXe_khY',
}

const preventScroll = () => {
    scrollPosition = window.pageYOffset;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
}

const clickVideo = (e) => {
    let src = e.target.src.split('/');
    let title = src[src.length - 1].slice(0, -6);
    
    let query = { id: title };
    router.push({query});
    videoShow(title);
}

const videoShow = async (key) => {
    await nextTick();
    preventScroll();
    overlay.value.open();
    videoIframe.value.src = 'https://www.youtube.com/embed/' + youtubeSrc[key] + '?controls=0';
}

const modalHideControl = () => {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);

    router.push('archive');

    overlay.value.close();
}

watch(() => {
    let currentURL = window.location.href;

    for (var key in youtubeSrc) {
        if (currentURL.includes(key)) {
            videoShow(key);
        }
    }
});
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

    .modalWrap {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999999;

        .modalBg {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            cursor: pointer;
            z-index: 1;
        }
        .modalCont {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 100%;
            height: 70%;
            transform: translate(-50%, -50%);
            z-index: 2;

            .video {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
    