<template>
  <div class="title">
    <hr />
    <div class="box">
      <div class="left"></div>
      <div class="center">CHARACTERS</div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style scoped>
.title {
  padding: 80px 0 30px;
  display: flex;
  flex-direction: column;
}
.title .box {
  width: 220px;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: row;
}
.box .left {
  width: 0;
  height: 0;
  border: 30px solid;
  border-color: transparent rgba(255, 255, 255, 0.1) transparent transparent;
}
.box .center {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px 0;
}
.box .right {
  width: 0;
  height: 0;
  border: 30px solid;
  border-color: transparent transparent transparent rgba(255, 255, 255, 0.1);
}
.title hr {
  width: 100%;
  border-color: rgba(255, 255, 255, 0.1);
  position: relative;
  top: 40px;
  float: left;
}
</style>