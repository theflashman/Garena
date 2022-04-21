<template>
  <div class="charcters">
    <Title />
    <Card />
  </div>
</template>

<script setup>
import Title from "./title.vue";
import Card from "./card.vue";
</script>

<style scoped>
.charcters {
  width: 100%;
  background-color: #1f2428;
  color: #a5b0b4;
  height: auto;
  display: flex;
  flex-direction: column;
}
</style>