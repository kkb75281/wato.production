<template lang="pug">
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
            .info_wrap
                .info
                    p 
                    | Contact :
                    br
                    | mailto:official@watostudio.com
                .info
                    p 
                    | Youtube :
                    br
                    | https://www.youtube.com/@watostudio4035
                    p 
                    | Instagram :
                    br
                    | @watostudio
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
#nav {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    .box {
        position: relative;

        .title {
            position: absolute;
            left: 32px;
            top: 20px;
            z-index: 2;
            img {
                width: 28.5vw;
            }
        }
        .menu {
            position: absolute;
            right: 32px;
            top: 32px;
            text-align: right;
            z-index: 2;
            ul {
                list-style: none;
                
                li {
                    display: inline-block;
                    font-weight: 400;
                    font-size: 28px;
                    line-height: 34px;
    
                    &.active {
                        font-weight: 700;
                    }
                    &:last-child {
                        margin-left: 3vw;
                    }

                    a {
                        color: #F7F7F7;
                    }
                }
            }
        }
        .contact {
            position: absolute;
            left: 0;
            top: -450px;
            width: 100%;
            // height: 412px;
            background: #000;    
            transition: all 0.3s;
            font-weight: 400;
            // font-size: 16px;
            font-size: 1vw;
            line-height: 32px;
            padding: 92px 32px 32px 32px;
            box-sizing: border-box;
            
            &.show {
                top: 0;
            }
            .info_wrap {
                display: flex;
                flex-wrap: nowrap;
                .info {
                    width: 370px;
                    height: 268px;
            
                    p {
                        margin-bottom: 23px;
                    }
                }
            }
            h5 {
                font-weight: 400;
                font-size: 16px;
                line-height: 32px;
            }
        }
    }
}

@media (max-width: 1375px) {
    #nav {
        .box {
            .title {
                img {
                    // width: 28.5vw;
                }
            }
            .menu {
                ul {
                    a {
                        li {
                            font-size: 2vw;
                        }
                    }
                }
            }
        } 
    }
}
</style>