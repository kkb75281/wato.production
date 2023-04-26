<template lang="pug">
navBar
main
    .logo
        img(src="@/assets/img/wato_logo.png")
        h4 We Make Culture
    .slider_wrap 
        .slider_inner 
            .slider 
                img(src="@/assets/img/cut03.png")
</template>
<script setup>
import navBar from '../components/navBar.vue';

</script>
<style lang="less" scoped>
main {
    width: 100%;
    height: 100%;

    .logo {
        padding-top: 66px;
        text-align: center;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;

        img {
            width: 515px;
        }
    }
    .slider_wrap {
        margin-top: 45px;
        .slider_inner {
            .slider {
                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>