<template lang="pug">
navBar
main
    section#youtube
        //- .video
        //-     img(src="@/assets/img/example.png")
    section#section
        .card_inner
            .card
            .card
            .card
            .card
            .card
            .card
    section#section
        h2 Other works
        .card_inner
            .card
            .card
            .card
</template>

<script setup>
import { onMounted } from 'vue';
import navBar from '../components/navBar.vue';

onMounted(() => {

})
</script>

<style lang="less">
main {
    position: relative;
    box-sizing: border-box;

    #youtube {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 9999;
        background: rgba(0,0,0,0.6);

        .video {
            position: relative;
            width: 100%;
            height: 100%;
            img {
            }
        }
    }
    #section {
        display: flex;
        flex-wrap: wrap;
        padding: 80px 24px 0px 24px;
        
        h2 {
            width: 100%;
            font-weight: 700;
            font-size: 32px;
            margin-top: 110px;
            margin-bottom: 30px;
        }
        .card_inner {
            width: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .card {
                width: 19%;
                padding-bottom: 19%;
                background-color: #D9D9D9;
                margin-bottom: 20px;
                cursor: pointer;
            }
        }
    }
}
</style>
