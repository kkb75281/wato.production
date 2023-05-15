<template lang="pug">
main
    mobileNavBar
    .logo
        img(src="@/assets/img/output_sNhDIp.gif")
        h4 We Make Culture
    swiper.mySwiper(:modules="modules" :loop="true" :autoplay="{delay: 2500, disableOnInteraction: false}")
        swiper-slide(v-for="s in slider")
            img(:src = "s.img")
            //- h6 {{ s.tit }}
</template>
<script setup>
import mobileNavBar from '../../components/mobileNavBar.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper';

let modules = [Autoplay];
let slider = [
    {
        img: './src/assets/img/cut01.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut02.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut03.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut04.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut05.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut06.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut07.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut08.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut09.png',
        tit: 'Mystic Green - Happy'
    },
    {
        img: './src/assets/img/cut10.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut11.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut12.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut13.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut14.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut15.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut16.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut17.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut18.png',
        tit: 'Raffina - shot shot shot'
    },
    {
        img: './src/assets/img/cut19.png',
        tit: 'Raffina - shot shot shot'
    },
]
</script>
<style lang="less" scoped>
main {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .logo {
        padding: 80px 0 40px 0;
        text-align: center;
        font-weight: 700;
        font-size: 7.2vw;
        line-height: 38px;

        img {
            width: 64vw;
        }
    }

    .mySwiper {
        .swiper-wrapper {
            width: 100%;
            .swiper-slide {
                position: relative;
                width: 100%;
                
                img {
                    width: 100%;
                    height: 500px;
                    overflow: hidden;
                    object-fit: cover;
                }
                // h6 {
                //     position: absolute;
                //     left: 32px;
                //     bottom: 32px;
                //     font-weight: 400;
                //     font-size: 1.75vw;
                // }
            }
        }
    }
}
</style>