<template lang="pug">
nav#nav
    .nav-inner
        a.title(href="/")
            img(src="@/assets/img/와토로고.svg")
        .btn(@click="showMenu=!showMenu;")
            .circle
            .circle
            .circle
.menu-wrap(:class='{show: showMenu}')
    .menu-inner
        ul.goto
            li
                a(href="/mabout") ABOUT
            li
                a(href="/") ARCHIVE
        ul.icon
            li
                a(href="/")
                    img(src="@/assets/img/email.png")
            li
                a(href="/")
                    img(src="@/assets/img/insta.png")
            li
                a(href="/")
                    img(src="@/assets/img/youtube.png")
            
</template>
<script setup>
import { onMounted, ref } from 'vue';

let showMenu = ref(false);

onMounted(() => {

})
</script>
<style lang="less" scoped>
#nav {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    .nav-inner {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        .title {
            padding: 10px 0px 0px 20px ;
            
            img {
                width: 52vw;
            }
        }
        .btn {
            padding: 10px 20px 0px 0px ;
            .circle {
                &:last-child {
                    margin-right: 0;
                }

                display: inline-block;
                margin-right: 0.8vw;
                width: 1.5vw;
                height: 1.5vw;
                border-radius: 50%;
                background: #fff;
            }
        }
    }
}
.menu-wrap {
    position: absolute;
    right: -100vw;
    top: 0;
    width: 100vw;
    height: 100%;
    z-index: 99;
    transition: all 0.3s;
    &.show {
        right: 0;
    }
    .menu-inner {
        position: relative;
        width: 100vw;
        height: 100vh;
        background: #000;
        color: #F7F7F7;
        padding: 80px 20px 40px 20px;
        box-sizing: border-box;
        
        ul {
            list-style: none;
            &.goto {
                li {
                    font-weight: 400;
                    font-size: 28px;
                    line-height: 34px;
                    margin-bottom: 24px;

                    &:last-child {
                        margin-bottom: 0;
                    }

                    a {
                        text-decoration: none;
                        color: #F7F7F7;
                    }
                }
            }
            &.icon {
                position: absolute;
                left: 20px;
                bottom: 40px;

                li {
                    display: inline-block;
                    margin-right: 24px;

                    &:last-child {
                        margin-right: 0;
                    }
                    a {
                        img {
                            width: 40px;
                            height: 40px;
                        }
                    }
                }
            }
        }
    }
}
</style>