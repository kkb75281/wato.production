<template lang="pug">
.top
    nav#nav(@mouseover="downDiv=true;" @mouseout="downDiv=false;")
        .box
            a.title(href="/")
                img(src="@/assets/img/와토로고.svg")
            .menu 
                ul
                    li.about
                        a(href="/about") ABOUT
                    li.archive
                        a(href="/archive") ARCHIVE
            .contact(:class='{show: downDiv}')
                .info-wrap
                    .info
                        p Contact :
                        span mailto:official@watostudio.com
                    .info
                        p Youtube :
                        span https://www.youtube.com/@watostudio4035
                        p Instagram :
                        span @watostudio
                    h5 Built by Skapi
</template>
<script setup>
import { onMounted, ref } from 'vue';

let downDiv = ref(false);

onMounted(() => {
    let about = document.querySelector('.about');
    let archive = document.querySelector('.archive');
    let link = document.location.href;

    if(link.includes('about')){
        about.classList.add('active');
    } else if(link.includes('archive')) {
        archive.classList.add('active');
    }
})
</script>
<style lang="less" scoped>
.top {
    #nav {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 999;
        .box {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 32px;

            .title {
                img {
                    width: 28.5vw;
                }
            }
            .menu {
                ul {
                    list-style: none;
                    
                    li {
                        display: inline-block;
                        font-weight: 400;
                        font-size: 2.4vw;
                        line-height: 34px;
        
                        &.active {
                            font-weight: 700;
                        }
                        &:last-child {
                            margin-left: 3vw;
                        }

                        a {
                            color: #F7F7F7;
                            text-decoration: none;
                        }
                    }
                }
            }
            .contact {
                position: absolute;
                left: 0;
                top: -999px;
                top: 0;
                width: 100%;
                background: #000;    
                transition: all 0.3s;
                font-weight: 400;
                font-size: 16px;
                padding: 70px 32px 32px 32px;
                box-sizing: border-box;
                z-index: -1;
                
                &.show {
                    top: 0;
                }
                .info-wrap {
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    height: 100%;
                    box-sizing: border-box;
                    padding: 1.2vw 0 0 0;

                    .info {
                        width: 20%;
                        // margin-right: 114px;

                        p {
                            padding: 0;
                            margin-bottom: 8px;
                        }
                        span {
                            display: block;
                            padding-bottom: 23px;
                        }
                    }
                    h5 {
                        width: 100%;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 32px;
                    }
                }
            }
        }
    }
}

@media (min-width: 1440px) {
    .top {
        #nav {
            .box {
                padding: 15px 32px;

                .title {
                    img {
                        width: 395px;
                    }
                }
                .menu {
                    ul {
                        li {
                            font-size: 28px;
                            line-height: 34px;
        
                            &:last-child {
                                margin-left: 32px;
                            }
                        }
                    }
                }
                .contact {
                    &.show {
                        top: 0;
                    }
                    .info-wrap {
                        padding: 23px 0 0 0;

                        .info {

                            p {
                                margin-bottom: 8px;
                            }
                            span {
                                padding-bottom: 23px;
                            }
                        }
                    }
                    h5 {
                        font-size: 16px;
                    }
                }
            }
        }
    }
}
</style>