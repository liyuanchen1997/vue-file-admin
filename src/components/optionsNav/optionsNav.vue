<template>
  <div class="options-nav">
    <div class="not-lint">
        <button>链接仓库</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import anime from 'animejs';
import { onMounted } from "vue";
onMounted(() => {
    anime({
        targets: '.options-nav',
        translateY: -70
    })
})
</script>

<style scoped lang="scss">
.options-nav {

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.12);
  border-radius: 100px;
}
</style>
