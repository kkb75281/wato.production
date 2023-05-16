<template lang="pug">
main
    mobileNavBar
    section#section.wato
        .logo
            img(src="@/assets/img/wato_logo.png")
        .cont
            .desc 
                h2 We Make Culture
                p dasdasdaas dasdasdasdasdasd asd asdasd asdas dasdas dasdasdo. asdpo ajsdpoajsp dojaspdoja pso djaps odjpasod jpaosjdpaosjd pao sjdpaosjdp asdasd asodjpaosjd pa osjdpao sjdpao sjd paosjd paosj dp oajsd poaj sdpojaspdoja spdjas pd ojaposd japs dasdpao js dpoa jsdpo ajsdpojasp dojasp odjapsodj pao sjdaopsdj apsod jpaosjdp oasj dp oasjdp oasj dpaos jdpoasjdpo asjdp oasjdpoa jsdop ajsdpoas jdpo asj dpaosjd poasjd paosjdpoa sjdp oa sjdpdo aisd hjo aishdo ias hjdoia sjd.
    section#section.music
        .logo
            img(src="@/assets/img/music.png")
        .cont
            .desc 
                h2 Music Production
                p dasdasdaas dasdasdasdasdasd asd asdasd asdas dasdas dasdasdo. asdpo ajsdpoajsp dojaspdoja pso djaps odjpasod jpaosjdpaosjd pao sjdpaosjdp asd
        .card-wrap 
            .card-inner
                .card
                .card
                .card
                .card
                .card
                .card
    section#section.film
        .logo
            img(src="@/assets/img/film.png")
        .cont
            .desc 
                h2 Film Production
                p dasdasdaas dasdasdasdasdasd asd asdasd asdas dasdas dasdasdo. asdpo ajsdpoajsp dojaspdoja pso djaps odjpasod jpaosjdpaosjd pao sjdpaosjdp asd
        .card-wrap 
            .card-inner
                .card
                .card
                .card
                .card
                .card
                .card
</template>

<script setup>
import { onMounted } from 'vue';
import mobileNavBar from '../../components/mobileNavBar.vue';

onMounted(() => {

})
</script>

<style lang="less">
main {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    #section {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 20px;
        margin-bottom: 13vw;

        &.wato {
            padding-top: 20vw;
        }
        // &:last-child {
        //     margin-bottom: 0;
        // }
        .logo {
            margin-bottom: 1vw;

            img {
                width: 64vw;
            }
        }
        .cont {
            .desc {
                margin-bottom: 8vw;

                h2 {
                    font-size: 7.2vw;
                    margin-bottom: 10vw;
                    font-weight: 700;
                }
                p {
                    font-size: 5.1vw;
                    font-weight: 400;
                }
            }
        }
        .card-wrap {
            position: relative;
            width: 100%;
            height: 280px;
            overflow-x: auto;

            .card-inner {
                position: absolute;
                top: 0;
                display: flex;
                flex-wrap: nowrap;
                
                .card {
                    width: 280px;
                    height: 280px;
                    background: #D9D9D9;
                    margin-right: 6.1vw;

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
}
</style>  