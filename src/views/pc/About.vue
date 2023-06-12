<template lang="pug">
main
    navBar
    section#section.wato
        .logo
            img(src="@/assets/img/wato_logo.png")
        .cont
            .desc 
                h2 We Make Culture
                p dasdasdaas dasdasdasdasdasd asd asdasd asdas dasdas dasdasdo. asdpo ajsdpoajsp dojaspdoja pso djaps odjpasod jpaosjdpaosjd pao sjdpaosjdp asdasd asodjpaosjd pa osjdpao sjdpao sjd paosjd paosj dp oajsd poaj sdpojaspdoja spdjas pd ojaposd japs dasdpao js dpoa jsdpo ajsdpojasp dojasp odjapsodj pao sjdaopsdj apsod jpaosjdp oasj dp oasjdp oasj dpaos jdpoasjdpo asjdp oasjdpoa jsdop ajsdpoas jdpo asj dpaosjd poasjd paosjdpoa sjdp oa sjdpdo aisd hjo aishdo ias hjdoia sjd.
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
    section#section.label
        .logo
            img(src="@/assets/img/label.png")
        .cont
            .desc 
                h2 Label Production
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
import { onMounted, onUnmounted, nextTick } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import navBar from '../../components/navBar.vue';

let animation1, animation2, scrollTrigger1, scrollTrigger2 = null;

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    function cardMove() {
        nextTick().then(() => {
            let label = document.querySelector('.label');
            let labelCardInner = label.querySelector('.card-inner');
            let cardInnerRight = label.querySelector('.desc p').getBoundingClientRect().right;
            let cardInnerPosition = window.innerWidth - cardInnerRight;
            let film = document.querySelector('.film');
            let filmCardInner = film.querySelector('.card-inner');

            animation2 = gsap.to(filmCardInner, {
                x: function () {
                    return -(film.scrollWidth - document.documentElement.clientWidth + cardInnerPosition) + "px";
                },
                ease: "none"
            });

            scrollTrigger2 = ScrollTrigger.create({
                scrub: true,
                animation: animation2,
                trigger: film,
                pin: true,
                start: "center center",
                end: function () {
                    return "+=" + film.scrollWidth;
                }
            });

            animation1 = gsap.to(labelCardInner, {
                x: function () {
                    return -(label.scrollWidth - document.documentElement.clientWidth + cardInnerPosition) + "px";
                },
                ease: "none"
            });

            scrollTrigger1 = ScrollTrigger.create({
                scrub: true,
                animation: animation1,
                trigger: label,
                pin: true,
                start: "center center",
                end: function () {
                    return "+=" + label.scrollWidth;
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
    animation1.kill();
    animation2.kill();
    animation1 = null;
    animation2 = null;
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

                h2 {
                    font-weight: 700;
                    font-size: 2.2vw;
                    padding-top: 25px;
                }

                p {
                    width: 42vw;
                    font-weight: 400;
                    font-size: 1.4vw;
                    line-height: 1.9vw;
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

        &.label,
        &.film {
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

                            &:last-child {
                                margin-right: 0;
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
                        line-height: 24px;
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

            &.label,
            &.film {
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
                            }
                        }

                    }
                }
            }
        }
    }
}
</style>  