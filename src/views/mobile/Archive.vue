<template lang="pug">
main
    mobileNavBar
    section#section.archive
        .card-wrap 
            .card-inner
                .card
                    img(src="src/assets/img/cut01.png")
                .card
                    img(src="src/assets/img/cut02.png")
                .card
                    img(src="src/assets/img/cut03.png")
                .card
                    img(src="src/assets/img/cut04.png")
                .card
                    img(src="src/assets/img/cut05.png")
                .card
                    img(src="src/assets/img/cut06.png")
                .card
                    img(src="src/assets/img/cut07.png")
                .card
                    img(src="src/assets/img/cut08.png")
    section#section.others
        h2 Other works
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

<style lang="less" scoped>
main {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    #section {
        padding: 0 20px;
        margin-bottom: 13vw;

        // &:last-child {
        //     margin-bottom: 0;
        // }
        &.archive {
            padding-top: 20vw;
        }
        h2 {
            font-size: 7.2vw;
            margin-bottom: 2vw;
            font-weight: 700;
        }
        .card-wrap  {
            .card-inner {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;

                .card {
                    width: 350px;
                    height: 350px;
                    background: #D9D9D9;
                    margin-bottom: 30px;

                    &:last-child {
                        margin-bottom: 0;
                    }
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }
}
// main {
//     position: relative;
//     box-sizing: border-box;

//     #archive-video {
//         position: fixed;
//         width: 100%;
//         height: 100%;
//         z-index: 9999;
//         display: none;

//         &.show {
//             display: block;
//         }
//         .video {
//             position: relative;
//             width: 100%;
//             height: 100%;
//             pointer-events: none;
//             display: none;

//             &::after {
//                 position: absolute;
//                 content: '';
//                 left: 0;
//                 top: 0;
//                 width: 100%;
//                 height: 100%;
//                 background: rgba(0,0,0,0.6);
//                 z-index: -1;
//                 pointer-events: all;
//             }
//             &.show {
//                 display: block;
//             }
//             img {
//                 position: absolute;
//                 left: 50%;
//                 top: 50%;
//                 transform: translate(-50%, -50%);
//                 width: 100%;
//                 z-index: 2;
//             }
//         }
//     }   

//     #archive, #others {
//         display: flex;
//         flex-wrap: wrap;
//         padding: 80px 24px 0px 24px;
        
//         h2 {
//             width: 100%;
//             font-weight: 700;
//             font-size: 32px;
//             margin-top: 110px;
//             margin-bottom: 30px;
//         }
//         .card_inner {
//             width: 100%;
//             margin: 0 auto;
//             display: flex;
//             justify-content: space-between;
//             flex-wrap: wrap;

//             .card {
//                 width: 19%;
//                 padding-bottom: 19%;
//                 background-color: #D9D9D9;
//                 margin-bottom: 20px;
//                 cursor: pointer;
//             }
//         }
//     }
// }
</style>
    