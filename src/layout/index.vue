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
.bg {
  background: top center no-repeat;
  background-image: url("@/assets/bg.png");
  background-size: cover;
  width: 100%;
  height: 260px;
  padding: 30px 0;
  box-sizing: border-box;
}
.bg .imgBox {
  width: auto;
  height: 180px;
  margin-left: 170px;
  float: left;
  display: flex;
}
.imgBox img{
  margin: auto 0;
}
</style>
