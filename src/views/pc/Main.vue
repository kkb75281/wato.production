<template lang="pug">
main.mainSwiper
    navBar
    swiper.mySwiper(v-if="renderingSwiper" :navigation="true" :modules="modules" :loop="true" :autoplay="{delay: 2500, disableOnInteraction: false}" :style="`height : ${getHight}`")
        swiper-slide(v-for="s in slider")
            router-link(:to="goArchive")
                img(:src = "s.img" @click="showVideo")
                h6 {{ s.tit }}
</template>
<script setup>
import navBar from '../../components/navBar.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import { onMounted, ref, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// let mainNavBar = ref(null);
let modules = [Autoplay, Navigation];
let slider = [
    {
        img: 'src/assets/img/unicorn_1.png',
        tit: 'Dia - Unicorn'
    },
    {
        img: 'src/assets/img/unicorn_2.png',
        tit: 'Dia - Unicorn'
    },
    {
        img: 'src/assets/img/unicorn_3.png',
        tit: 'Dia - Unicorn'
    },
    {
        img: 'src/assets/img/unicorn_4.png',
        tit: 'Dia - Unicorn'
    },
    {
        img: 'src/assets/img/unicorn_5.png',
        tit: 'Dia - Unicorn'
    },
    {
        img: 'src/assets/img/eros_1.png',
        tit: 'wato.studio - Eros Game'
    },
    {
        img: 'src/assets/img/eros_2.png',
        tit: 'wato.studio - Eros Game'
    },
    {
        img: 'src/assets/img/eros_3.png',
        tit: 'wato.studio - Eros Game'
    },
    {
        img: 'src/assets/img/eros_4.png',
        tit: 'wato.studio - Eros Game'
    },
    {
        img: 'src/assets/img/eros_5.png',
        tit: 'wato.studio - Eros Game'
    },
    {
        img: 'src/assets/img/eros_6.png',
        tit: 'wato.studio - Eros Game'
    },
    {
        img: 'src/assets/img/eros_7.png',
        tit: 'wato.studio - Eros Game'
    },
    {
        img: 'src/assets/img/eros_8.png',
        tit: 'wato.studio - Eros Game'
    },
    {
        img: 'src/assets/img/shot_1.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: 'src/assets/img/shot_2.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: 'src/assets/img/shot_3.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: 'src/assets/img/shot_4.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: 'src/assets/img/shot_5.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: 'src/assets/img/shot_6.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: 'src/assets/img/killing_1.png',
        tit: 'Bae Min Jeong - The Killing'
    },
    {
        img: 'src/assets/img/killing_2.png',
        tit: 'Bae Min Jeong - The Killing'
    },
    {
        img: 'src/assets/img/killing_3.png',
        tit: 'Bae Min Jeong - The Killing'
    },
    {
        img: 'src/assets/img/pie_1.png',
        tit: 'Raffina - pie'
    },
    {
        img: 'src/assets/img/pie_2.png',
        tit: 'Raffina - pie'
    },
    {
        img: 'src/assets/img/pie_3.png',
        tit: 'Raffina - pie'
    },
    {
        img: 'src/assets/img/pie_4.png',
        tit: 'Raffina - pie'
    },
];
let renderingSwiper = ref(false);
let goArchive = ref('');
let getHight;

nextTick(() => {
    let top = document.querySelector('.top');
    let mainNavBarHeight = top.clientHeight;
    getHight = "calc(100vh - " + mainNavBarHeight + "px)";
}).then(() => {
    renderingSwiper.value = true;
})

function showVideo(e) {
    let src = e.target.src.split('/');
    let title = src[src.length - 1].slice(0, -6);
    // let query = { id: title };
    // router.push({query});
    goArchive.value = `/archive?id=${title}`;
}
</script>
<style lang="less">
main.mainSwiper {
    width: 100%;
    height: 100%;
    // padding-bottom: 20vw;

    .mySwiper {
        .swiper-wrapper {
            width: 100%;
            .swiper-slide {
                position: relative;
                width: 100%;
                height: 100%;

                a {
                    text-decoration: none;
                    color: #fff;

                    img {
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        object-fit: cover;
                        cursor: pointer;
                    }
                    h6 {
                        position: absolute;
                        left: 32px;
                        bottom: 32px;
                        font-weight: 400;
                        font-size: 1.75vw;
                    }
                }
            }
        }
        .swiper-button-next {
            width: 90px;
            background: url(src/assets/img/next-arrow.png) no-repeat;
            background-size: 50% auto;
            background-position: center center;
            
            &::after {
                display: none !important;
            }
        }
    
        .swiper-button-prev {
            width: 90px;
            background: url(src/assets/img/prev-arrow.png) no-repeat;
            background-size: 50% auto;
            background-position: center center;
    
            &::after {
                display: none !important;
            }
        }
    }
}
</style>