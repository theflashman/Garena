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
  width: 100%;
  padding: 50px 0 30px;
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
/* pc */
@media screen and (min-width: 992px) {
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
}
/* ipad */
@media screen and (max-width: 992px) {
  .box .left {
    width: 0;
    height: 0;
    border: 30px solid;
    border-color: transparent rgba(0, 0, 0, 0.6) transparent transparent;
  }
  .box .center {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px 0;
  }
  .box .right {
    width: 0;
    height: 0;
    border: 30px solid;
    border-color: transparent transparent transparent rgba(0, 0, 0, 0.6);
  }
}
.title hr {
  width: 100%;
  border-color: rgba(255, 255, 255, 0.1);
  position: relative;
  top: 45px;
  float: left;
}
</style>