<template>
  <div class="menu">
    <div class="left"></div>
    <ul>
      <li v-for="item of list" :key="item.title">
        <router-link :to="item.path" active-class="active">{{
          item.title
        }}</router-link>
      </li>
    </ul>
    <div class="right"></div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const list = reactive([
  {
    title: "HOME",
    path: "/home/index",
  },
  {
    title: "NEWS",
    path: "/home/index",
  },
  {
    title: "WEAPONS",
    path: "/home/index",
  },
  {
    title: "MAP",
    path: "/home/index",
  },
  {
    title: "CHARACTERS",
    path: "/home/characters",
  },
  {
    title: "WALLPAPER",
    path: "/home/index",
  },
]);
</script>

<style scoped>
.menu {
  max-width: 1920px;
  width: calc(100% - 100px);
  display: flex;
  /* position: relative;
  top: 30px; */
  margin: 0 50px;
}
.menu .left {
  height: 50px;
  width: 10px;
  background: #faa120;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.menu .right {
  height: 50px;
  width: 10px;
  background: #faa120;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.menu ul {
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  padding: 0 0 0 25px;
  margin: 0;
  /* backdrop-filter: blur(2px); */
}
.menu li {
  font-weight: bold;
  text-align: center;
  display: inline-block;
  text-shadow: 2px 2px 2px #000;
  vertical-align: top;
  padding: 0 15px;
  font-size: 13px;
  line-height: 50px;
}
.menu a {
  display: block;
  text-decoration: none;
  color: #ccc;
  text-transform: uppercase;
  white-space: nowrap;
}
.menu .active {
  color: #ffa41a;
}
</style>