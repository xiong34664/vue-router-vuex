<template>
  <el-row>
    <el-col :span="16">
      <div class="bg"></div>

    </el-col>
    <el-col :span="8"></el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style scoped lang='css'>
.bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  height: 100vh;
  /* background-image: url(../../../assets/images/a508d48b5bc825e89a42da6c41afa22a.jpg); */
  background-size: cover;
}
</style>
