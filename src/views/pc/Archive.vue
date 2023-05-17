<template lang="pug">
main
    navBar
    section#section.archive
        ul
            li
            li
            li
            li
            li
            li
            li
            li
</template>

<script setup>
import { onMounted } from 'vue';
import navBar from '../../components/navBar.vue';

</script>

<style lang="less" scoped>
main {
    width: 100%;
    height: 100%;

    #section {
        ul {
            width: 100%;
            height: 100%;
            position: relative;
            display: table;
            margin-left: auto;
            margin-right: auto;

            li {
                display: inline-block;
                width: 30%;
                margin-right: 3%;
                margin-bottom: 3%;
                background-color: #d9d9d9;
                box-sizing: border-box;
                cursor: pointer;

                &::after {
                    content: '';
                    display: block;
                    padding-bottom: 100%;
                }
                &:nth-child(3n+3) {
                    margin-right: 0;
                }
            }
        }
    }
}
// main {
//     position: relative;
//     box-sizing: border-box;

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

@media (min-width: 1440px) {
    
}
</style>
    