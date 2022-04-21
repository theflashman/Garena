<template>
  <nav class="navbar navbar-expand-lg navbar-dark menu">
    <div class="left"></div>
    <div class="center">
      <div class="container-fluid changefluid" style="padding: 0">
        <!-- 折叠部分 -->
        <div class="fluid">
          <div class="imgBox">
            <img src="@/assets/logo.png" alt="" />
          </div>
          <button
            class="navbar-toggler button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="setShow"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <!-- 菜单部分 -->
        <div
          :class="
            isShow
              ? 'collapse navbar-collapse show'
              : 'collapse navbar-collapse'
          "
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li v-for="item of list" :key="item.title" class="nav-item">
              <router-link :to="item.path" active-class="active">{{
                item.title
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="right"></div>
  </nav>
</template>

<script setup>
import { reactive, ref } from "vue";

const isShow = ref(false);
const setShow = () => {
  isShow.value = !isShow.value;
};

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
/* pc */
@media screen and (min-width: 992px) {
  .menu {
    max-width: 1920px;
    width: calc(100% - 100px);
    display: flex;
    align-items: flex-start;
    margin: 0 50px;
  }
  .menu .center {
    background-color: rgba(255, 255, 255, 0.1);
    flex: 1;
    height: 50px;
  }
  .center .fluid {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
  }
  .menu .imgBox {
    display: none;
  }
  .menu ul {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    padding: 0 0 0 25px;
    margin: 0;
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
}
/* ipad */
@media screen and (max-width: 992px) {
  .menu {
    max-width: 1920px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding: 0;
  }
  .menu .center {
    background-color: rgba(0, 0, 0);
    flex: 1;
    height: 50px;
  }
  .menu .changefluid {
    height: 100%;
  }
  .center .fluid {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding-right: 0;
    padding-left: var(--bs-gutter-x, 0.75rem);
  }
  .menu .imgBox {
    width: auto;
    height: 100%;
    float: left;
    display: flex;
  }
  .imgBox img {
    margin: auto 0;
    height: 40px;
    width: auto;
  }
  .menu ul {
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    padding: 0 0 0 25px;
    margin-top: 8px;
  }
  .menu .left {
    height: 50px;
    width: 10px;
    background: #faa120;
  }
  .menu .right {
    display: none;
    height: 50px;
    width: 10px;
    background: #faa120;
  }
  .menu .button {
    background: #faa120;
  }
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