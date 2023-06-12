<template lang="pug">
.top(v-if="$route.name == 'home'" @mouseleave="downDiv=false;")
    nav#nav(@mouseover="downDiv=true;")
        .box
            a.title(href="/")
                img(src="@/assets/img/와토로고.svg")
            .menu 
                ul
                    li.about
                        a(href="/about") ABOUT
                    li.archive
                        a(href="/archive") ARCHIVE
    .logo
        //- img(src="@/assets/img/output_sNhDIp.gif")
        img(src="@/assets/img/wato_logo.png")
        h4 We Make Culture
    .contact(:class='{show: downDiv}')
        .info-wrap
            .info
                p Contact :
                span wato@watostudio.com
            .info
                p Youtube :
                span https://www.youtube.com/@watostudio4035
                p Instagram :
                span @watostudio
            h5 Built by Skapi
.top-other(v-else)
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
    position: relative;

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
        }
    }
    .contact {
        position: absolute;
        left: 0;
        top: -1000px;
        // top: 0;
        width: 100%;
        height: 100%;
        background: #000;    
        transition: all 0.3s;
        font-weight: 400;
        // font-size: 1.5vw;
        font-size: 20px;
        padding: 0 32px;
        box-sizing: border-box;
        
        &.show {
            top: 0;
        }
        .info-wrap {
            position: relative;
            display: flex;
            flex-wrap: nowrap;
            height: 100%;
            box-sizing: border-box;
            padding: 8vw 0 0 0;

            .info {
                margin-right: 12vw;

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
                position: absolute;
                right: 0px;
                bottom: 32px;
                font-weight: 400;
                font-size: 1.5vw;
            }
        }
    }
    .logo {
        padding: 66px 0;
        text-align: center;
        font-weight: 700;
        font-size: 2.3vw;
        line-height: 38px;

        img {
            width: 33vw;
        }
    }
}
.top-other {
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
                width: 100%;
                background: #000;    
                transition: all 0.3s;
                font-weight: 400;
                font-size: 1.5vw;
                padding: 70px 32px 32px 32px;
                box-sizing: border-box;
                z-index: -1;
                
                &.show {
                    top: 0;
                }
                .info-wrap {
                    position: relative;
                    display: flex;
                    flex-wrap: nowrap;
                    height: 100%;
                    box-sizing: border-box;
                    padding: 1.2vw 0 0 0;

                    .info {
                        margin-right: 12vw;

                        p {
                            padding: 0;
                            margin-bottom: 8px;
                        }
                        span {
                            display: block;
                            padding-bottom: 23px;
                        }
                    }
                }
                h5 {
                    font-weight: 400;
                    font-size: 1.5vw;
                    line-height: 32px;
                    padding-top: 10vw;
                    text-align: right;
                }
            }
        }
    }
}

@media (min-width: 1440px) {
    .top {
        #nav {
            .box {
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
            }
        }
        .contact {
            font-size: 16px;
            .info-wrap {
                padding: 92px 0 0 0;

                .info {
                    margin-right: 114px;

                    p {
                        margin-bottom: 8px;
                    }
                    span {
                        padding-bottom: 23px;
                    }
                }
                h5 {
                    font-size: 16px;
                }
            }
        }
        .logo {
            padding: 66px 0;
            font-size: 32px;
            line-height: 38px;

            img {
                width: 515px;
            }
        }
    }
    .top-other {
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
                    font-size: 20px;
                    padding: 70px 32px 32px 32px;
                    
                    &.show {
                        top: 0;
                    }
                    .info-wrap {
                        padding: 23px 0 0 0;

                        .info {
                            margin-right: 114px;

                            p {
                                margin-bottom: 8px;
                            }
                            span {
                                padding-bottom: 23px;
                            }
                        }
                        h5 {
                            font-size: 8px;
                        }
                    }
                    h5 {
                        font-size: 16px;
                        padding-top: 149px;
                    }
                }
            }
        }
    }
}
</style>