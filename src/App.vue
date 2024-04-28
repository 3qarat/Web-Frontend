<template>
  <nav-bar
    :pages="page"
    :active-page="activePage"
    :nav-link-click="(index) => activePage = index"
  ></nav-bar>
  <h1>Hello World</h1>
  <!-- <page-viewer v-if="pages.length > 0" :page="pages[activePage]"> </page-viewer> -->
  <create-page :page-created="pageCreated">
    
  </create-page>
</template>

<script>
import NavBar from "./components/tests/NavBar.vue";
import PageViewer from "./components/tests/PageViewer.vue";
import CreatePage from "./components/tests/CreatePage.vue";

export default {
  components: {
    NavBar,
    PageViewer,
    CreatePage,
  },
  created() {
    this.getPages();
  },
  data() {
    return {
      activePage: 0,
      pages: [],
    };
  },
  methods: {
    async getPages() {
      let res = await fetch('pages.json');
      let data = await res.json();

      this.pages = data;
    },
    pageCreated(pageOBJ){
      console.log(pageOBJ)
    }
  },
};
</script>

<style scoped></style>
