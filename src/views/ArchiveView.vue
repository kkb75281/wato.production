<template lang="pug">
navBar
main
    section#section
        .card
        .card
        .card
        .card
        .card
    section#section
        h2 Other works
        .card
        .card
        .card
</template>

<script setup>
import navBar from '../components/navBar.vue';

</script>

<style lang="less">
main {
    padding: 70px 24px 32px 24px;
    #section {
        display: flex;
        flex-wrap: wrap;

        h2 {
            width: 100%;
            font-weight: 700;
            font-size: 32px;
            margin-top: 110px;
            margin-bottom: 30px;
        }
        .card {
            width: 440px;
            height: 440px;
            margin: 15px;
            background-color: #D9D9D9;
        }
    }
}
</style>
