<template lang="pug">
navBar
main
  section#section.wato
    .logo
      img(src="@/assets/img/wato_logo.png")
    .desc 
      h2 We Make Culture
      p dasdasdaas dasdasdasdasdasd asd asdasd asdas dasdas dasdasdo. asdpo ajsdpoajsp dojaspdoja pso djaps odjpasod jpaosjdpaosjd pao sjdpaosjdp asdasd asodjpaosjd pa osjdpao sjdpao sjd paosjd paosj dp oajsd poaj sdpojaspdoja spdjas pd ojaposd japs dasdpao js dpoa jsdpo ajsdpojasp dojasp odjapsodj pao sjdaopsdj apsod jpaosjdp oasj dp oasjdp oasj dpaos jdpoasjdpo asjdp oasjdpoa jsdop ajsdpoas jdpo asj dpaosjd poasjd paosjdpoa sjdp oa sjdpdo aisd hjo aishdo ias hjdoia sjd.
  section#section.sticky
    .music
      .logo
        img(src="@/assets/img/music.png")
      .desc 
        h2 Music Production
        p dasdasdaas dasdasdasdasdasd asd asdasd asdas dasdas dasdasdo. asdpo ajsdpoajsp dojaspdoja pso djaps odjpasod jpaosjdpaosjd pao sjdpaosjdp asd
      .card_wrap 
        .card_inner
          .card
          .card
          .card
          .card
          .card
          .card
          .card
          .card
          .card
  section#section.sticky
    .film
      .logo
        img(src="@/assets/img/film.png")
      .desc 
        h2 Film Production
        p dasdasdaas dasdasdasdasdasd asd asdasd asdas dasdas dasdasdo. asdpo ajsdpoajsp dojaspdoja pso djaps odjpasod jpaosjdpaosjd pao sjdpaosjdp asd
      .card_wrap 
        .card_inner
          .card
          .card
          .card
          .card
          .card
          .card
          .card
          .card
          .card
</template>

<script setup>
import navBar from '../components/navBar.vue';

</script>

<style lang="less">
main {
  #section {
    &.wato {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      padding: 200px 0;

      .logo {
        width: 45%;
        display: flex;
        justify-content: center;

        img {
          width: 515px;
        }
      }
      .desc {
        width: 55%;

        h2 {
          font-weight: 700;
          font-size: 32px;
        }
        p {
          width: 70%;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          margin-top: 32px;
        }
      }
    }
    &.sticky {
      height: 500px;
      padding: 120px 0;

      > div {
        position: sticky;
        top: 200px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        .logo {
          width: 45%;
          display: flex;
          justify-content: center;

          img {
            width: 400px;
          }
        }
        .desc {
          width: 55%;

          h2 {
            font-weight: 700;
            font-size: 32px;
          }
          p {
            width: 70%;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            margin-top: 32px;
          }
        }
        .card_wrap {
          position: relative;
          width: 100%;
          overflow: hidden;

          &::before {
            position: absolute;
            content: '';
            right: 0;
            top: 70px;
            width: 280px;
            height: 140px;
            background: linear-gradient(180deg, #D9D9D9 0%, #D9D9D9 0.01%, rgba(217, 217, 217, 0.354167) 64.58%, rgba(217, 217, 217, 0) 100%);
            transform: rotate(-90deg);
            z-index: 2;
          }
          .card_inner {
            display: flex;
            flex-wrap: nowrap;

            .card {
              width: 280px;
              height: 280px;
              background-color: #D9D9D9;
              margin-right: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
