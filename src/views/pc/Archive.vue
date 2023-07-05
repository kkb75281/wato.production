<template lang="pug">
main
    navBar
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
import navBar from '../../components/navBar.vue';

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
        padding: 0 30px;
        margin-bottom: 112px;

        h2 {
            font-weight: 700;
            font-size: 2vw;
            margin-bottom: 2vw;
        }

        ul {
            width: 100%;
            height: 100%;

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
}

@media (max-width: 1200px) {
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
    }
}

@media (min-width: 1200px) {
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
    