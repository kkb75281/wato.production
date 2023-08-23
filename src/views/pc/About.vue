<template lang="pug">
main
    navBar
    section#section.wato
        .logo
            img(src="@/assets/img/wato_logo.png")
        .cont
            .desc 
                h2 We Make Culture
                p 
                    | WATO는 뮤직비디오, 뮤직필름, 숏필름, 라이브스테이지 등 다양한 형태의 영상과 음악이 융합된 컨텐츠를 제작하는 영상프로덕션 스튜디오입니다. 
                    br
                    br
                    | 음악을 창작하는 뮤지션뿐만아니라, 영상에서의 독창성과 창의성을 발휘할 수 있는 다양한 분야의 크리에이티브 아티스트들과의 협업을 중심으로 컨텐츠를 생산합니다. 
                    br
                    br 
                    | 각각의 프로젝트에 참여하는 아티스트들의 다양한 장르와 스타일을 존중하며, 독창성에 최우선을 두고 있습니다. 서로의 고유한 아이디어에서 영감을 얻어내고 음악과 영상의 합으로 스토리텔링을 완성하며, 감성과 공감을 이끌어내는 컨텐츠 생산을 핵심 가치로 두고 있습니다.
    section#section.film
        .logo
            img(src="@/assets/img/film_logo.png")
        .cont
            .desc 
                h2 Film Production
                p dasdasdaas dasdasdasdasdasd asd asdasd asdas dasdas dasdasdo. asdpo ajsdpoajsp dojaspdoja pso djaps odjpasod jpaosjdpaosjd pao sjdpaosjdp asd
            .card-wrap 
                .card-inner
                    .card(v-for="number in 17" :key="number" class="filmItem")
                        img(:src="`src/assets/img/film/${number}.jpeg`" alt="Film Image")
    section#section.music
        .logo
            img(src="@/assets/img/music_logo.png")
        .cont
            .desc 
                h2 Music Production
                p dasdasdaas dasdasdasdasdasd asd asdasd asdas dasdas dasdasdo. asdpo ajsdpoajsp dojaspdoja pso djaps odjpasod jpaosjdpaosjd pao sjdpaosjdp asd
            .card-wrap 
                .card-inner
                    .card(v-for="number in 5" :key="number" class="musicItem")
                        img(:src="`src/assets/img/music/${number}.jpeg`" alt="Music Image")
    section#section.studio
        .logo
            img(src="@/assets/img/stage_logo.png")
        .cont
            .desc 
                h2 Studio Production
                p dasdasdaas dasdasdasdasdasd asd asdasd asdas dasdas dasdasdo. asdpo ajsdpoajsp dojaspdoja pso djaps odjpasod jpaosjdpaosjd pao sjdpaosjdp asd
            .card-wrap 
                .card-inner
                    .card(v-for="number in 12" :key="number" class="stageItem")
                        img(:src="`src/assets/img/stage/${number}.png`" alt="Stage Image")
</template>

<script setup>
import { onMounted, onUnmounted, nextTick } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import navBar from '../../components/navBar.vue';

let animation1, animation2, animation3, scrollTrigger1, scrollTrigger2, scrollTrigger3 = null;

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    function cardMove() {
        nextTick().then(() => {
            let film = document.querySelector('.film');
            let filmCardInner = film.querySelector('.card-inner');
            let music = document.querySelector('.music');
            let musicCardInner = music.querySelector('.card-inner');
            let studio = document.querySelector('.studio');
            let studioCardInner = studio.querySelector('.card-inner');
            let cardInnerRight = music.querySelector('.desc p').getBoundingClientRect().right;
            // let cardInnerRight = music.querySelector('.desc').getBoundingClientRect().right;
            let cardInnerPosition = window.innerWidth - cardInnerRight;

            animation1 = gsap.to(filmCardInner, {
                x: function () {
                    return -(film.scrollWidth - document.documentElement.clientWidth + cardInnerPosition) + "px";
                },
                ease: "none"
            });

            scrollTrigger1 = ScrollTrigger.create({
                scrub: true,
                animation: animation1,
                trigger: film,
                pin: true,
                start: "center center",
                end: function () {
                    return "+=" + film.scrollWidth;
                }
            });

            animation2 = gsap.to(musicCardInner, {
                x: function () {
                    return -(music.scrollWidth - document.documentElement.clientWidth + cardInnerPosition) + "px";
                },
                ease: "none"
            });

            scrollTrigger2 = ScrollTrigger.create({
                scrub: true,
                animation: animation2,
                trigger: music,
                pin: true,
                start: "center center",
                end: function () {
                    return "+=" + music.scrollWidth;
                }
            });

            animation3 = gsap.to(studioCardInner, {
                x: function () {
                    return -(studio.scrollWidth - document.documentElement.clientWidth + cardInnerPosition) + "px";
                },
                ease: "none"
            });

            scrollTrigger3 = ScrollTrigger.create({
                scrub: true,
                animation: animation3,
                trigger: studio,
                pin: true,
                start: "center center",
                end: function () {
                    return "+=" + studio.scrollWidth;
                }
            });
        });
    }

    if (window.matchMedia('(min-width: 600px)').matches) {
        cardMove();
    }
})

onUnmounted(() => {
    scrollTrigger1.kill();
    scrollTrigger2.kill();
    scrollTrigger3.kill();
    animation1.kill();
    animation2.kill();
    animation3.kill();
    animation1 = null;
    animation2 = null;
    animation3 = null;
});
</script>

<style lang="less" scoped>
main {
    height: 100%;
    padding-top: 200px;
    padding-bottom: 500px;
    box-sizing: border-box;
    overflow: hidden;

    #section {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        .logo {
            width: 45%;
            display: flex;
            align-items: start;
            justify-content: center;

            img {
                width: 28vw;
            }
        }

        .cont {
            width: 55%;

            .desc {
                width: 100%;
                // width: 42vw;

                h2 {
                    font-weight: 700;
                    font-size: 2.2vw;
                    padding-top: 25px;
                }

                p {
                    width: 42vw;
                    font-weight: 400;
                    font-size: 1.4vw;
                    line-height: 30px;
                    margin: 32px 0px 60px 0px;
                }
            }
        }

        &.wato {
            align-items: center;
            margin-bottom: 15vw;

            .logo {
                img {
                    width: 36vw;
                }
            }
        }

        &.film,
        &.music,
        &.studio {
            width: 100%;
            height: 100%;
            margin-bottom: 5vw;
            transform: translate(0px, 0px);

            &.fixed {
                position: fixed;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }

            .cont {
                .card-wrap {
                    position: relative;
                    width: 100%;
                    height: 280px;
                    margin-top: 30px;

                    .card-inner {
                        position: absolute;
                        top: 0;
                        display: flex;
                        flex-wrap: nowrap;
                        z-index: 2;

                        .card {
                            width: 20vw;
                            height: 20vw;
                            background-color: #D9D9D9;
                            margin-right: 24px;
                            overflow: hidden;

                            &:last-child {
                                margin-right: 0;
                            }

                            img {
                                width: 20vw;
                                height: 20vw;
                                object-fit: cover;
                            }
                        }
                    }
                }
            }
        }

        &.film {
            // margin-bottom: 0;
        }
    }
}

@media (min-width: 1440px) {
    main {
        padding-top: 200px;

        #section {
            .logo {
                img {
                    width: 400px;
                }
            }

            .cont {
                .desc {
                    h2 {
                        font-size: 32px;
                        padding-top: 25px;
                    }

                    p {
                        width: 42vw;
                        font-size: 20px;
                        line-height: 30px;
                        margin: 32px 0px 60px 0px;
                    }
                }
            }

            &.wato {
                margin-bottom: 300px;

                .logo {
                    img {
                        width: 515px;
                    }
                }
            }

            &.film,
            &.music,
            &.studio {
                margin-bottom: 100px;

                .cont {
                    .card-wrap {
                        height: 280px;
                        margin-top: 30px;

                        .card-inner {
                            .card {
                                width: 280px;
                                height: 280px;
                                margin-right: 24px;

                                img {
                                    width: 280px;
                                    height: 280px;
                                }
                            }
                        }

                    }
                }
            }
        }
    }
}
</style>  