<template>
  <div class="layer">
    <img src="@/assets/scape.png" alt="" />
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 横屏 */
@media screen and (max-width: 992px) and (orientation: landscape) {
  .layer {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    display: flex;
  }
  @keyframes turnZ {
    0%{transform: rotateZ(0deg);}
    50%{transform: rotateZ(90deg);}
    100%{transform: rotateZ(0deg);}
  }
  .layer img {
    margin: auto;
    width: 50%;
    height: auto;
    animation: turnZ 1s infinite;
  }
}
@media screen and (max-width: 992px) and (orientation: portrait) {
  .layer {
    display: none;
  }
}
@media screen and (min-width: 992px){
  .layer {
    display: none;
  }
}
</style>