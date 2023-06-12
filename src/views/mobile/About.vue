<template lang="pug">
main
    mobileNavBar
    section#section.wato
        .logo
            img(src="@/assets/img/wato_logo.png")
        .cont
            .desc 
                h2 We Make Culture
                p WATO Production은 뮤직비디오 제작의 새로운 패러다음을 열어가는 창조적인 크루 입니다. WATO Production의 뮤직비디오 강점은 바로 스토리라인에 있습니다. 우리는 스토리텔링이 음악 영상의 핵심이라고 믿습니다. 강력한 스토리와 흥미진진한 전개로 관객들에게 감동과 이야기를 전달합니다. 음악의 느낌과 메시지를 충실히 담아내는 동시에, 시청자들이 일상에서 벗어나 감정적으로 공감하고 여행하는 경험을 선사합니다. WATO의 영상은 단순한 뮤직비디오 이상의 가치를 지니며, 강렬한 시각적 효과와 예술적인 편집 기술을 활용하여, 각각의 음악마다 독특하고 아름다운 스토리를 구축합니다.
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
import mobileNavBar from '../../components/mobileNavBar.vue';
</script>

<style lang="less" scoped>
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