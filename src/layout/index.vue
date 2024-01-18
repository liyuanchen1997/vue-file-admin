<template>
  <div class="layout">
    <bcLayout></bcLayout>
    <div class="file-manager-container">
      <optionsNav></optionsNav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import bcLayout from "./components/bcLayout.vue";
import optionsNav from "@/components/optionsNav/optionsNav.vue"
</script>

<style scoped lang="scss">
.layout {
  width: 100vw;
  height: 100vh;
  // background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.file-manager-container{
  position: relative;
  width: 1000px;
  height: 750px;
  border-radius: 20px;
  box-shadow: 0px 16px 48px 16px rgba(0, 0, 0, .08), 0px 12px 32px rgba(0, 0, 0, .12), 0px 8px 16px -8px rgba(0, 0, 0, .16);
  // padding: 20px;
  background-color: #fff;
}
</style>
