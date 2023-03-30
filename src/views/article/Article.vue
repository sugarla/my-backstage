<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import CreateArticle from "./CreateArticle.vue";
import ListArticle from "./ListArticle.vue";
export default {
  name: "Mall",
  components: {
    CreateArticle,
    ListArticle,
  },
};
</script>

<style></style>
