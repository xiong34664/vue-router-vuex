 
<template>
  <div v-if="isLogin">
    <router-view />

  </div>
  <div v-else>
    <Header v-if="isShow" />
    <router-view />
  </div>
  <!-- <FooterBar v-if="isShow"/> -->
</template>
 
<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapGetters, mapActions } from "vuex"; //先要引入
// import FooterBar from "@/components/common/FooterBar";
import Header from "@/components/common/Header";
export default {
  name: "App",
  components: {
    // FooterBar,
    Header
  },
  data () {
    return {
      isLogin: true
    };
  },
  created () {
    if (this.$route.name !== 'login') {
      this.isLogin = false
    }
  },
  mounted () {
    // eslint-disable-next-line no-console
    this.setHeaderStatus(this.$route)
  },
  computed: {
    ...mapState({
      //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
      isShow: state => state.headerStatus.showHeader //注意这些与上面的区别就是state.footerStatus,
      //里面定义的showFooter是指footerStatus.js里state的showFooter
    })
    //你也可以用下面的mapGetters来获取isShow的值，貌似下面的更简洁
    /*...mapGetters('footerStatus',{ //footerStatus指的是modules文件夹下的footerStatus.js模块
         isShow:'isShow' //第一个isShow是我自定义的只要对应template里v-if="isShow"就行，
                         //第二个isShow是对应的footerStatus.js里的getters里的isShow
      })*/
  },
  methods: {
    setHeaderStatus (to) {
      this.$store.dispatch("headerStatus/setNewPath", to.path)
      // if (to.name === "home" || to.name === "my") {
      //   this.$store.dispatch("headerStatus/showHeader"); //这里改为'headerStatus/showHeader',
      //   //意思是指headerStatus.js里actions里的showHeader方法
      // } else {
      //   this.$store.dispatch("headerStatus/hideHeader"); //同上注释
      // }
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route (to, from) {
      this.isLogin = to.name === 'login'
      this.setHeaderStatus(to)
    }
  }
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
