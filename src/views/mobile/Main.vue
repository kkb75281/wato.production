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
        img: 'src/assets/img/unicorn_6.png',
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