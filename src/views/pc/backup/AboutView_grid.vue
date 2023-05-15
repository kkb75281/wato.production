<template lang="pug">
navBar
main
  section.wato
    .logo
      img(src="@/assets/img/wato_logo.png")
    .desc 
      h2 We Make Culture
      p dasdasdaas dasdasdasdasdasd asd asdasd asdas dasdas dasdasdo. asdpo ajsdpoajsp dojaspdoja pso djaps odjpasod jpaosjdpaosjd pao sjdpaosjdp asdasd asodjpaosjd pa osjdpao sjdpao sjd paosjd paosj dp oajsd poaj sdpojaspdoja spdjas pd ojaposd japs dasdpao js dpoa jsdpo ajsdpojasp dojasp odjapsodj pao sjdaopsdj apsod jpaosjdp oasj dp oasjdp oasj dpaos jdpoasjdpo asjdp oasjdpoa jsdop ajsdpoas jdpo asj dpaosjd poasjd paosjdpoa sjdp oa sjdpdo aisd hjo aishdo ias hjdoia sjd.
  section.music
    .logo
      img(src="@/assets/img/music.png")
    .desc 
      h2 Music Production
      p dasdasdaas dasdasdasdasdasd asd asdasd asdas dasdas dasdasdo. asdpo ajsdpoajsp dojaspdoja pso djaps odjpasod jpaosjdpaosjd pao sjdpaosjdp asd
    .card-wrap 
      .card-inner
        .card
        .card
        .card
        .card
        .card
        .card
  //- section#section.film
  //-   .logo
  //-     img(src="@/assets/img/film.png")
  //-   .desc 
  //-     h2 Film Production
  //-     p dasdasdaas dasdasdasdasdasd asd asdasd asdas dasdas dasdasdo. asdpo ajsdpoajsp dojaspdoja pso djaps odjpasod jpaosjdpaosjd pao sjdpaosjdp asd
  //-   .card-wrap 
  //-     .card-inner
  //-       .card
  //-       .card
  //-       .card
  //-       .card
  //-       .card
  //-       .card
</template>

<script setup>
import { onMounted } from 'vue';
import navBar from '../../components/navBar.vue';

onMounted(() => {
  let musicSection = document.querySelector('.music');
  let musicCardInner = musicSection.querySelector('.card-inner');

  window.addEventListener('mousewheel', (e) => {
    let scrollY = window.scrollY - 20;
    let windowHeight = window.innerHeight / 4;
    let movement = (windowHeight - scrollY)/10;
    
    if(scrollY >= windowHeight && (-70 <= movement && movement <= 0)) {
      musicCardInner.style.transform = 'translateX(' + movement + '%)';
    } else if(scrollY < windowHeight) {
      musicCardInner.style.transform = 'translateX(0%)';
    } else if(-70 > movement) {
      // musicSection.style.transform = 'translate(0px, ' + window.innerHeight/2 + 'px)';
    }
  })
})

</script>

<style lang="less">
main {
  height: 300vh;
  padding-top: 200px;
  overflow: hidden;

  .wato {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 300px;

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
        width: 550px;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        margin-top: 32px;
      }
    }
  }

  .music {
    display: grid;
    grid-template-areas: 
      "logo desc"
      "logo card"
    ;
    grid-template-rows: 200px 280px;
    grid-template-columns: 45% 55%;

    .logo {
      grid-area: logo;
      display: flex;
      align-items: start;
      justify-content: center;

      img {
        width: 400px;
      }
    }
    .desc {
      grid-area: desc;

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
    .card-wrap {
      grid-area: card;
      position: relative;
      width: 100%;
      
      .card-inner {
        position: absolute;
        top: 0;
        display: flex;
        flex-wrap: nowrap;
        // z-index: 2;
        // perspective: 300px;
        // transform-style: preserve-3d;

        .card {
          width: 280px;
          height: 280px;
          background-color: #D9D9D9;
          margin-right: 24px;

          &:last-child {
            margin-right: 0;
          }
        }
      }

    }
  }
}
</style>  