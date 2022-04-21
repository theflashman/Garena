<template>
  <div>
    <div class="bg">
      <Menu />
      <div class="imgBox">
        <img src="@/assets/logo.png" alt="" />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import Menu from "./menu.vue";
</script>

<style scoped>
/* pc */
@media screen and (min-width: 992px) {
  .bg {
    background: top center no-repeat;
    background-image: url("@/assets/bg.png");
    background-size: cover;
    width: 100%;
    height: 260px;
    padding: 30px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .bg .imgBox {
    width: auto;
    margin: auto 0 auto 170px;
    float: left;
    display: flex;
  }
}
/* ipad */
@media screen and (max-width: 992px) {
  .bg {
    width: 100%;
    height: auto;
  }
  .bg .imgBox {
    display: none;
  }
}
.imgBox img {
  margin: auto 0;
}
</style>
