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
/* ipad */
@media screen and (max-width: 992px) {
  .box {
    width: 50%;
    height: auto;
    margin: 0 auto;
    padding-bottom: 85px;
    display: flex;
    flex-wrap: wrap;
  }
}
/* pc */
@media screen and (min-width: 992px) {
  .box {
    max-width: 1510px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding-bottom: 85px;
    display: flex;
    flex-wrap: wrap;
  }
}
.box .card {
  max-width: 403px;
  height: auto;
  margin: 50px auto;
  box-sizing: border-box;
  background-color: #1f2428;
}
.box .cardBox {
  max-width: 403px;
  height: auto;
  display: flex;
  margin: 50px auto;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cardBox div:nth-child(3),
:nth-child(4) {
  align-self: flex-end;
  margin-top: 20px;
}
.cardBox .content {
  width: 45%;
  height: auto;
  display: flex;
}
.box img {
  width: 100%;
  height: auto;
  margin: auto;
}
</style>