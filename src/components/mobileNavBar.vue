<template lang="pug">
nav#nav
    .box
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
                        a(href="/") ABOUT
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
    .box {
        position: relative;

        .title {
            position: absolute;
            left: 20px;
            top: 10px;
            z-index: 2;
            img {
                width: 200px;
            }
        }
        .btn {
            position: absolute;
            right: 20px;
            top: 10px;
            z-index: 2;
            .circle {
                &:last-child {
                    margin-right: 0;
                }

                display: inline-block;
                margin-right: 3px;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #fff;
            }
        }
        .menu-wrap {
            transition: all 0.3s;
            transform: translateX(100vw);
            &.show {
                transform: translateX(0);
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
    }
}
</style>