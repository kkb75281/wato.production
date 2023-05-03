<template lang="pug">
navBar
main
  .container
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
      .card_warp
        .card_box.mCard
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
    //-   .card_warp
    //-     .card_box.fCard
    //-       .card
    //-       .card
    //-       .card
    //-       .card
    //-       .card
</template>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from 'vue';
import navBar from '../components/navBar.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(()=>{
  // let pageContainer = document.querySelector(".container");
  let music = document.querySelector('.music');
  // let film = document.querySelector('.film');
  let musicCardBox = document.querySelector('.mCard');
  let musicCardBoxWidth = musicCardBox.offsetWidth;
  let horizontalScrollLength1 = musicCardBoxWidth - window.innerWidth;
  // let filmCardBox = document.querySelector('.fCard');
  // let filmCardBoxWidth = filmCardBox.offsetWidth;
  // let horizontalScrollLength2 = filmCardBoxWidth - window.innerWidth;
  
  gsap.to(musicCardBox, {
    scrollTrigger: {
      // scroller: pageContainer,
      scrub: true,
      trigger: music,
      pin: true,
      markers: true,
      start: "top top",
      end: musicCardBoxWidth
    },
    x: -horizontalScrollLength1,
    ease: "none"
  })

  // gsap.to(filmCardBox, {
  //   scrollTrigger: {
  //     // scroller: pageContainer,
  //     scrub: true,
  //     trigger: film,
  //     pin: true,
  //     markers: true,
  //     start: "top top",
  //     end: filmCardBoxWidth
  //   },
  //   x: -horizontalScrollLength2,
  //   ease: "none"
  // })
})

</script>

<style lang="less">
main {
  .container {
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
      &.music, &.film {
        height: 500px;
        // padding: 120px 0;
        // position: relative;
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
        .card_warp {
          height: 280px;
          overflow: hidden;
          display: flex;
          left: 0;

          .card_box {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-left: 650px;
    
            .card {
              width: 280px;
              height: 280px;
              margin-right: 24px;
              background: #D9D9D9;
            }
          } 
        }
      }
      &.sticky {
        height: 500px;
        padding: 120px 0;
  
        > div {
          // position: sticky;
          // top: 200px;
          position: relative;
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
          .card_box {
            position: absolute;
            top: 240px;
            white-space: nowrap;
            font-size: 0;
  
            .card {
              display: inline-flex;
              width: 280px;
              height: 280px;
              margin-right: 24px;
              background: #D9D9D9;
            }
          } 
          // .card_wrap {
          //   position: relative;
          //   width: 100%;
          //   margin-top: 60px;
    
          //   &::before {
          //     position: absolute;
          //     content: '';
          //     right: -70px;
          //     top: 70px;
          //     width: 280px;
          //     height: 140px;
          //     background: linear-gradient(180deg, #95BAFF 0%, #95BAFF 0.01%, rgba(217, 217, 217, 0.354167) 64.58%, rgba(217, 217, 217, 0) 100%);
          //     transform: rotate(90deg);
          //     z-index: 2;
          //   }
          //   .card_inner {
          //     width: 100%;
          //     perspective: 600px;
          //     overflow: hidden;
  
          //     .card_box {
          //       width: 2800px;
          //       display: flex;
          //       flex-wrap: nowrap;
          //       transform-style: preserve-3d;
  
          //       .card {
          //         width: 280px;
          //         height: 280px;
          //         background-color: #D9D9D9;
          //         margin-right: 24px;
          //       }
          //     }
          //   }
          // }
        }
      }
    }
  }
}
</style>  