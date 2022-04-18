<template>
  <div class="box">
    <div v-for="(item, index) of cardList" :key="index" class="card">
      <img :src="require(`@/assets/${item.img}`)" alt="" />
    </div>
    <div class="cardBox">
      <div v-for="(item, index) of cardBoxContent" :key="index" class="content">
        <img :src="require(`@/assets/${item.img}`)" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";

const data = reactive([
  {
    img: "img-1.jpg",
  },
  {
    img: "img-1.jpg",
  },
  {
    img: "img-1.jpg",
  },
  {
    img: "img-1.jpg",
  },
  {
    img: "img-1.jpg",
  },
  {
    img: "img-1.jpg",
  },
  {
    img: "img-1.jpg",
  },
  {
    img: "img-1.jpg",
  },
  {
    img: "img-1.jpg",
  }
]);

const cardList = computed(() => {
  return data.slice(0, 5);
});

const cardBoxContent = computed(() => {
  return data.slice(5, 9);
});
</script>

<style scoped>
.box {
  width: 1510px;
  height: auto;
  margin: 0 auto;
  padding-bottom: 85px;
  display: flex;
  flex-wrap: wrap;
}
.box .card {
  margin: 50px;
  width: 403px;
  height: 402px;
  box-sizing: border-box;
}
.box .cardBox {
  margin: 30px;
  width: 443px;
  height: 442px;
  display: flex;
  flex-wrap: wrap;
}
.cardBox .content {
  margin: 20px;
  width: 180px;
  height: auto;
}
.box img{
  width: 100%;
  height: auto;
} 
</style>