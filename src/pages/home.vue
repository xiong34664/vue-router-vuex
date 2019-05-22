<template>
  <div>
    
    home
    <router-link to="/my/my1">my1</router-link>
    <span @click="goPath">my2</span>
  </div>
</template>
<script>
export default {
  name: "Home",
  methods: {
    goPath() {
      this.$router.push({name: 'my2', params: { data: [1,2,3]}})
    }
  }
};
</script>
<style scoped>
</style>

