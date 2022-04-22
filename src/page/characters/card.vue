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
import { computed, onMounted, ref } from "vue";
import { getImgList } from "@/api";

const imgData = ref([]);

const cardList = computed(() => {
  return imgData.value.slice(0, 5);
});

const cardBoxContent = computed(() => {
  return imgData.value.slice(5, 9);
});

const getCard = async () => {
  const { data } = await getImgList();
  imgData.value = data;
};

onMounted(() => {
  getCard();
});
</script>

<style scoped>
.box {
  max-width: 1510px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-bottom: 85px;
  display: flex;
  flex-wrap: wrap;
}
.box .card {
  width: 403px;
  height: 402px;
  margin: 50px auto;
  box-sizing: border-box;
}
.box .cardBox {
  width: 443px;
  height: 442px;
  display: flex;
  margin: 30px auto;
  flex-wrap: wrap;
}
.cardBox .content {
  margin: 20px;
  width: 180px;
  height: auto;
}
.box img {
  width: 100%;
  height: auto;
}
</style>