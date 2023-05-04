<template lang="pug">
navBar
main
    section#archive-video
        .video
            img(src="@/assets/img/example.png")
        .video
            img(src="@/assets/img/example.png")
        .video
            img(src="@/assets/img/example.png")
        .video
            img(src="@/assets/img/example.png")
        .video
            img(src="@/assets/img/example.png")
        .video
            img(src="@/assets/img/example.png")
    section#archive
        .card_inner
            .card
            .card
            .card
            .card
            .card
            .card
    section#others
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
    let archive = document.getElementById('archive'); 
    let cards = archive.querySelectorAll('.card_inner .card'); 
    let archiveVideo = document.getElementById('archive-video'); 
    let videos = document.querySelectorAll('.video');
    let videosArr = Array.from(videos);

    for(let i=0; i<cards.length; i++) {
        cards[i].addEventListener('click', () => {
            archiveVideo.classList.add('show');
            videos[i].classList.add('show');
            document.body.style.overflow = "hidden";
        })
    }
    videosArr.forEach((video) => {
        video.addEventListener('click', () => {
            video.classList.remove('show');
            archiveVideo.classList.remove('show');
            document.body.style.overflow = "unset";
        })
    })
})
</script>

<style lang="less">
main {
    position: relative;
    box-sizing: border-box;

    #archive-video {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: none;

        &.show {
            display: block;
        }
        .video {
            position: relative;
            width: 100%;
            height: 100%;
            pointer-events: none;
            display: none;

            &::after {
                position: absolute;
                content: '';
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.6);
                z-index: -1;
                pointer-events: all;
            }
            &.show {
                display: block;
            }
            img {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
                z-index: 2;
            }
        }
    }   

    #archive, #others {
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
