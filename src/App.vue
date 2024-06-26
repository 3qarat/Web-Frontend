<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script>
import NavBar from "./layout/NavBar.vue";
export default{
  components: {
    NavBar,
  }
}
</script>

<style scoped>
h1{
  text-align: center;
}
</style>
 