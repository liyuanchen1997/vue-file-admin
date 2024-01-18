<template>
  <div class="bc-layout">
    <div class="bc1" style="--delay:.1s"></div>
    <div class="bc2" style="--delay:.9s"></div>
    <div class="bc3" style="--delay:.6s"></div>
    <div class="bc4" style="--delay:.3s"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.bc-layout{
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(20px);
  z-index: -1;
}
.bc1 {
  width: 400px;
  height: 400px;
  background-color: #0088d1;
  border-radius: 400px;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: bcam 2s linear var(--delay) infinite alternate;
}

.bc2 {
  width: 200px;
  height: 200px;
  background-color: #fa2bd4;
  border-radius: 200px;
  position: absolute;
  top: 300px;
  left: 264px;
  animation: bcam 1.5s linear var(--delay) infinite alternate;
}

.bc3 {
  width: 150px;
  height: 150px;
  background-color: #2bfa92;
  border-radius: 150px;
  position: absolute;
  bottom: 30px;
  right: 70px;
  animation: bcam 2s linear var(--delay) infinite alternate;
}

.bc4 {
  width: 150px;
  height: 150px;
  background-color: #a7fa2b;
  border-radius: 150px;
  position: absolute;
  top: 100px;
  right: 250px;
  animation: bcam 2s linear var(--delay) infinite alternate;
}

@keyframes bcam {
  0%{
    transform: translateY(0);
  }

  100%{
    transform: translateY(20px);
  }
}



</style>
