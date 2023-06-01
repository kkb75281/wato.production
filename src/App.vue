<template lang="pug">
RouterView(v-if="!isMobile")
RouterView(v-else name="mobile")
</template>

<script setup>
import { ref, onBeforeMount, onMounted  } from 'vue';
import { RouterView } from 'vue-router'

let isMobile = ref(false);

// if (window.matchMedia("(min-width: 600px)").matches) {
//   isMobile.value = false;
// } else {
//   isMobile.value = true;
// }

// function onResize() {
//   if(window.innerWidth < 600) {
//     isMobile.value = true;
//     // console.log(isMobile.value)
//   } else {
//     isMobile.value = false;
//     // console.log(isMobile.value)
//   }
// }

function mediaCheck() {
  if (window.matchMedia("(min-width: 600px)").matches) {
    isMobile.value = false;
  } else {
    isMobile.value = true;
  }
}

onBeforeMount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', mediaCheck, { passive: true });
  }
})

onMounted(() => {
  mediaCheck();
  window.addEventListener('resize', mediaCheck, { passive: true });
})
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #006EFF 0%, #69AAFF 75%, #FFFFFF 100%);
}
</style>
