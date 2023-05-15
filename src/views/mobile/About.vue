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
</template>

<script setup>
import { onMounted } from 'vue';
import mobileNavBar from '../../components/mobileNavBar.vue';

onMounted(() => {

})
</script>

<style lang="less">
main {
    width: 100%;
    height: 100%;
    
    #section {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 20px;

        &.wato {
            padding-top: 20vw;
        }
        .logo {
            img {
                width: 64vw;
            }
        }
        .cont {
            .desc {
                h2 {
                    font-size: 7.2vw;
                    margin-bottom: 10vw;
                }
                p {
                    font-size: 5.1vw;
                }
            }
        }
    }
}
// main {
//     height: 300vh;
//     padding-top: 200px;
//     overflow: hidden;

//     #section {
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: flex-start;

//         .logo {
//             width: 45%;
//             display: flex;
//             align-items: start;
//             justify-content: center;

//             img {
//                 width: 28vw;
//             }
//         }

//         .cont {
//             width: 55%;

//             .desc {
//                 width: 100%;

//                 h2 {
//                     font-weight: 700;
//                     font-size: 2.2vw;
//                     padding-top: 25px;
//                 }

//                 p {
//                     width: 550px;
//                     font-weight: 400;
//                     font-size: 1.4vw;
//                     line-height: 24px;
//                     margin: 32px 0px 60px 0px;
//                 }
//             }
//         }

//         &.wato {
//             align-items: center;
//             margin-bottom: 300px;

//             .logo {
//                 img {
//                     width: 36vw;
//                 }
//             }
//         }

//         &.music {
//             width: 100%;
//             margin-bottom: 100px;
//             transform: translate(0px, 0px);

//             &.fixed {
//                 position: fixed;
//                 left: 0;
//                 top: 50%;
//                 transform: translateY(-50%);
//             }

//             .cont {
//                 .card-wrap {
//                     position: relative;
//                     width: 100%;
//                     height: 280px;
//                     margin-top: 30px;

//                     .card-inner {
//                         position: absolute;
//                         top: 0;
//                         display: flex;
//                         flex-wrap: nowrap;
//                         z-index: 2;
//                         perspective: 300px;
//                         transform-style: preserve-3d;

//                         .card {
//                             width: 280px;
//                             height: 280px;
//                             background-color: #D9D9D9;
//                             margin-right: 24px;

//                             &:last-child {
//                                 margin-right: 0;
//                             }
//                         }
//                     }

//                 }
//             }
//         }

//         // &.film {
//         //   width: 100%;
//         //   // margin-top: 1060px;
//         //   transform: translateY(1000px);
//         //   // transition: all 1s;

//         //   &.show {
//         //     transform: translateY(0);
//         //   }
//         //   &.fixed {
//         //     position: fixed;
//         //     left: 0;
//         //     top: 50%;
//         //     transform: translateY(-50%);
//         //   }
//         //   .card-wrap {
//         //     position: relative;
//         //     overflow: hidden;
//         //     width: 100%;
//         //     height: 280px;
//         //     margin-top: 30px;

//         //     // &::before {
//         //     //   position: absolute;
//         //     //   content: '';
//         //     //   right: -70px;
//         //     //   bottom: 70px;
//         //     //   width: 280px;
//         //     //   height: 140px;
//         //     //   background: linear-gradient(180deg, #D9D9D9 0%, #D9D9D9 0.01%, rgba(217, 217, 217, 0.354167) 64.58%, rgba(217, 217, 217, 0) 100%);
//         //     //   transform: rotate(-90deg);
//         //     //   z-index: 3;
//         //     // }
//         //     .card-inner {
//         //       position: absolute;
//         //       top: 0;
//         //       display: flex;
//         //       flex-wrap: nowrap;
//         //       z-index: 2;
//         //       perspective: 300px;
//         //       transform-style: preserve-3d;

//         //       .card {
//         //         width: 280px;
//         //         height: 280px;
//         //         background-color: #D9D9D9;
//         //         margin-right: 24px;

//         //         &:last-child {
//         //           margin-right: 0;
//         //         }
//         //       }
//         //     }

//         //   }
//         // }



//     }
// }
</style>  