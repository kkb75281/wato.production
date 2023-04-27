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
  padding-top: 200px;

  #section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    &.wato {
      margin-bottom: 300px;

      .logo {
        img {
          width: 515px;
        }
      }
    }
    &.sticky {
      margin-bottom: 100px;
      .music {
        position: sticky;
        top: 0;
      }
      .film {
        position: sticky;
        top: 0;
        padding-bottom: 600px;
      }
      .card_wrap {
        width: 100%;
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
        width: 550px;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        margin-top: 32px;
      }
    }
    
  }
}
</style>
