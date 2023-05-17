<template lang="pug">
RouterView(v-if="!isMobile")
RouterView(v-else name="mobile")
</template>

<script setup>
import { ref, onBeforeMount, onMounted  } from 'vue';
import { RouterView } from 'vue-router'

let isMobile = ref(false);

function onResize() {
  // isMobile.value = window.innerWidth < 600;
  if(window.innerWidth < 600) {
    isMobile.value = true;
    console.log(isMobile.value)
  } else {
    isMobile.value = false;
    console.log(isMobile.value)
  }
}

onBeforeMount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', onResize, { passive: true });
  }
})

onMounted(() => {
  onResize();
  window.addEventListener('resize', onResize, { passive: true });
})
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #006EFF 0%, #69AAFF 75%, #FFFFFF 100%);
}
</style>
