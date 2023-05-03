<template lang="pug">
navBar
main
  section#section.wato
    .logo
      img(src="@/assets/img/wato_logo.png")
    .desc 
      h2 We Make Culture
      p dasdasdaas dasdasdasdasdasd asd asdasd asdas dasdas dasdasdo. asdpo ajsdpoajsp dojaspdoja pso djaps odjpasod jpaosjdpaosjd pao sjdpaosjdp asdasd asodjpaosjd pa osjdpao sjdpao sjd paosjd paosj dp oajsd poaj sdpojaspdoja spdjas pd ojaposd japs dasdpao js dpoa jsdpo ajsdpojasp dojasp odjapsodj pao sjdaopsdj apsod jpaosjdp oasj dp oasjdp oasj dpaos jdpoasjdpo asjdp oasjdpoa jsdop ajsdpoas jdpo asj dpaosjd poasjd paosjdpoa sjdp oa sjdpdo aisd hjo aishdo ias hjdoia sjd.
  section#section.music
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
  //- section#section.sticky
  //-   .film
  //-     .logo
  //-       img(src="@/assets/img/film.png")
  //-     .desc 
  //-       h2 Film Production
  //-       p dasdasdaas dasdasdasdasdasd asd asdasd asdas dasdas dasdasdo. asdpo ajsdpoajsp dojaspdoja pso djaps odjpasod jpaosjdpaosjd pao sjdpaosjdp asd
  //-     .card_wrap 
  //-       .card
  //-       .card
  //-       .card
  //-       .card
  //-       .card
  //-       .card
</template>

<script setup>
import { onMounted } from 'vue';
import navBar from '../components/navBar.vue';

onMounted(() => {
  let musicSection = document.querySelector('.music');
  let musicCardPosition = musicSection.querySelector('.desc h2').getBoundingClientRect().left;
  let musicCardInner = musicSection.querySelector('.card-inner');
  let musicCardInnerWidth = musicCardInner.getBoundingClientRect().width;

  // console.log()
  musicCardInner.style.left = musicCardPosition + 'px';
  musicCardInner.style.width = musicCardInnerWidth + 'px';

  window.addEventListener('mousewheel', (e) => {
    let scrollY = window.scrollY - 20;
    let windowHeight = window.innerHeight / 4;
    let movement = (windowHeight - scrollY)/10;
    let musicCardTop = musicSection.getBoundingClientRect().top + window.scrollY;

    // console.log(musicCardTop)
    // console.log(window.scrollY)
    console.log(movement)
    
    if(scrollY >= windowHeight && (-70 <= movement && movement <= 0)) {
      musicSection.classList.add('fixed');
      musicCardInner.style.transform = 'translateX(' + movement + '%)';
    } else {
      musicSection.classList.remove('fixed');
      musicCardInner.style.transform = 'translateX(0%)';
    }
    // else if(scrollY < windowHeight) {
    //   musicSection.classList.remove('fixed');
    //   musicCardInner.style.transform = 'translateX(0%)';
    //   musicCardInner.style.transform = 'translateX(-70%)';
    //   musicSection.classList.remove('fixed');
    //   musicSection.style.transform = 'translate(0px, 1060px)';
    // } else {
    //   musicCardInner.style.transform = 'translateX(-70%)';
    //   musicSection.classList.remove('fixed');
    //   musicSection.style.transform = 'translate(0px, 1060px)';
    // }

  })
})

</script>

<style lang="less">
main {
  height: 300vh;
  padding-top: 200px;

  #section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    &.wato {
      margin-bottom: 300px;

      .logo {
        img {
          width: 515px;
        }
      }
    }
    &.music {
      width: 100%;
      transform: translate(0px, 0px);

      &.fixed {
        position: fixed;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      .film {
        position: sticky;
        top: 0;
        padding-bottom: 600px;
      }
      .card-wrap {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 280px;
        margin-top: 30px;
        
        // &::before {
        //   position: absolute;
        //   content: '';
        //   right: -70px;
        //   bottom: 70px;
        //   width: 280px;
        //   height: 140px;
        //   background: linear-gradient(180deg, #D9D9D9 0%, #D9D9D9 0.01%, rgba(217, 217, 217, 0.354167) 64.58%, rgba(217, 217, 217, 0) 100%);
        //   transform: rotate(-90deg);
        //   z-index: 3;
        // }
        .card-inner {
          position: absolute;
          top: 0;
          display: flex;
          flex-wrap: nowrap;
          z-index: 2;
          perspective: 300px;
          transform-style: preserve-3d;

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