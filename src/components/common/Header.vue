<template>
  <el-menu
    :default-active="getKey"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="home">首页</el-menu-item>
    <el-submenu index="my">
      <template slot="title">我的工作台</template>
      <el-menu-item index="my1">选项1</el-menu-item>
      <el-menu-item index="my2">选项2</el-menu-item>
    </el-submenu>
    <el-menu-item index="msg">消息中心</el-menu-item>
    <li class="user-link">
      <i class="el-icon-setting" ></i>
      <i class="el-icon-switch-button" @click="logout"></i>
      </li>
  </el-menu>

</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('headerStatus')
export default {
  data () {
    return {
      activeIndex: '1',
    };
  },
  computed: {
    ...mapGetters({getKey: 'getKey'}),
  },
  mounted() {
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push('/' + keyPath.join('/'))
    },
    logout() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.user-link {
  float: right;
  height: 60px;
  line-height: 60px;
  margin-right: 15px;
  color: #fff;
}
.user-link:focus {
  outline: none;
}
.user-link i {
  margin: 0 15px;
  cursor: pointer;
}
</style>
