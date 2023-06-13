<template lang="pug">
main
    navBar
    section#section.archive
        ul
            li(v-for="a in archives" @click="modalShowControl")
                img(:src = "a.img")
    section#section.others
        h2 Short films
        ul
            li(v-for="f in films" @click="modalShowControl")
                img(:src = "f.img")    
    .archive-modal-wrap(:class="{show: modalShow}")
        .archive-modal-bg(@click="modalHideControl")
        .archive-modal(v-for="a in archives")
            iframe.video(:src="`https://www.youtube.com/embed/${a.src}?controls=0`" width="100%" height="100%" type="text/html" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
            //- iframe(width="560" height="315" src="https://www.youtube.com/embed/tgUPGJBHgZc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
</template>

<script setup>
import { ref } from 'vue';
import navBar from '../../components/navBar.vue';

let modalShow = ref(false);
let scrollPosition = 0;

let archives = [
    {
        img: 'src/assets/img/unicorn_1.png',
        src: '0QqAkRV0x_I'
    },
    {
        img: 'src/assets/img/unicorn_2.png',
        src: '0QqAkRV0x_I'
    },
    {
        img: 'src/assets/img/unicorn_3.png',
        src: '0QqAkRV0x_I'
    },
    {
        img: 'src/assets/img/unicorn_4.png',
        src: '0QqAkRV0x_I'
    },
    {
        img: 'src/assets/img/unicorn_5.png',
        src: '0QqAkRV0x_I'
    },
    {
        img: 'src/assets/img/shot_2.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/shot_3.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/shot_4.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/shot_5.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/shot_6.png',
        src: 'tgUPGJBHgZc'
    },
    {
        img: 'src/assets/img/eros_1.png',
        src: 'X7xz7qAyQMg'
    },
    {
        img: 'src/assets/img/eros_2.png',
        src: 'X7xz7qAyQMg'
    },
    {
        img: 'src/assets/img/eros_3.png',
        src: 'X7xz7qAyQMg'
    },
    {
        img: 'src/assets/img/eros_4.png',
        src: 'X7xz7qAyQMg'
    },
    {
        img: 'src/assets/img/eros_5.png',
        src: 'X7xz7qAyQMg'
    },
    {
        img: 'src/assets/img/eros_6.png',
        src: 'X7xz7qAyQMg'
    },
    {
        img: 'src/assets/img/eros_7.png',
        src: 'X7xz7qAyQMg'
    },
    {
        img: 'src/assets/img/eros_8.png',
        src: 'X7xz7qAyQMg'
    },
]

let films = [
    { 
        img: 'src/assets/img/killing_1.png',
        src: 'eDN8PYmeyP8' 
    },
    { 
        img: 'src/assets/img/killing_2.png',
        src: 'eDN8PYmeyP8' 
    },
    { 
        img: 'src/assets/img/killing_3.png',
        src: 'eDN8PYmeyP8' 
    },  
    { img: 'src/assets/img/pie_1.png' },
    { img: 'src/assets/img/pie_2.png' },
    { img: 'src/assets/img/pie_3.png' },
    { img: 'src/assets/img/pie_4.png' },
]

function modalShowControl() {
    modalShow.value = true;
    scrollPosition = window.pageYOffset;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
}

function modalHideControl() {
    modalShow.value = false;
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
}
</script>

<style lang="less" scoped>
main {
    position: relative;
    width: 100%;
    height: 100%;

    #section {
        padding: 0 30px;
        margin-bottom: 112px;

        h2 {
            font-weight: 700;
            font-size: 2vw;
            margin-bottom: 2vw;
        }

        ul {
            width: 100%;
            height: 100%;

            li {
                position: relative;
                display: inline-block;
                width: 32%;
                margin-right: 2%;
                margin-bottom: 2%;
                background-color: #d9d9d9;
                box-sizing: border-box;
                transition: all 0.3s;
                cursor: pointer;

                &::after {
                    content: '';
                    display: block;
                    padding-bottom: 100%;
                }

                &:nth-child(3n+3) {
                    margin-right: 0;
                }

                &:hover {
                    scale: 0.98;
                }

                img {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

        &.archive {
            padding-top: 5.5vw;
        }
    }

    // #section {
    //     padding: 0 30px 0 30px;
    //     margin-bottom: 112px;

    //     &.archive {
    //         padding-top: 70px;
    //     }

    //     ul {
    //         width: 100%;
    //         height: 100%;
    //         position: relative;

    //         li {
    //             display: inline-block;
    //             width: 23.5%;
    //             margin-right: 2%;
    //             margin-bottom: 2%;
    //             background-color: #d9d9d9;
    //             box-sizing: border-box;
    //             cursor: pointer;

    //             &::after {
    //                 content: '';
    //                 display: block;
    //                 padding-bottom: 100%;
    //             }

    //             &:nth-child(3n+3) {
    //                 margin-right: 2%;
    //             }

    //             &:nth-child(4n+4) {
    //                 margin-right: 0;
    //             }

    //             &:nth-child(12n+12) {
    //                 margin-right: 0;
    //             }
    //         }
    //     }

    // }

    .archive-modal-wrap {
        position: fixed;
        left: 0;
        top: -99999px;
        width: 100vw;
        height: 100vh;
        z-index: 999999;

        &.show {
            top: 0;
        }

        .archive-modal-bg {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            cursor: pointer;
            z-index: 1;
        }

        .archive-modal {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 80%;
            height: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;

            // .video {
            //     width: 100%;
            // }
            img {
                width: 100%;
            }
        }
    }
}

@media (max-width: 1200px) {
    main {
        #section {
            &.archive {
                padding-top: 50px;
            }

            ul {
                li {
                    width: 48.5%;
                    margin-right: 3%;
                    margin-bottom: 3%;

                    &:nth-child(2n+2) {
                        margin-right: 0;
                    }

                    &:nth-child(3n+3) {
                        margin-right: 3%;
                    }

                    &:nth-child(6n+6) {
                        margin-right: 0;
                    }
                }
            }
        }

        .archive-modal-wrap {
            .archive-modal {
                width: 100%;
            }
        }
    }
}

@media (min-width: 1200px) {
    main {
        #section {
            padding: 0 30px 0 30px;
            margin-bottom: 112px;

            &.archive {
                padding-top: 70px;
            }

            h2 {
                font-size: 32px;
                margin-bottom: 30px;
            }

            ul {
                width: 100%;
                height: 100%;
                position: relative;

                li {
                    display: inline-block;
                    width: 23.5%;
                    margin-right: 2%;
                    margin-bottom: 2%;
                    background-color: #d9d9d9;
                    box-sizing: border-box;
                    cursor: pointer;

                    &::after {
                        content: '';
                        display: block;
                        padding-bottom: 100%;
                    }

                    &:nth-child(3n+3) {
                        margin-right: 2%;
                    }

                    &:nth-child(4n+4) {
                        margin-right: 0;
                    }

                    &:nth-child(12n+12) {
                        margin-right: 0;
                    }
                }
            }

        }
    }
}
</style>
    