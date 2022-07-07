<template>
<div>
  <h1 class="header"> You liked {{numLikedItems}} memories </h1>  
  <LikedItems :places="likes" />
</div>
</template>

<script>
import LikedItems from "../components/LikedItems.vue"

export default {
  name: 'Likes_',
  components: {
    LikedItems
  },

  
  data() {
    return {
    }
  },
  computed: {
    likes() { //This cart that we are going to pass to <ProductList :products="cart" />
      return this.$root.$data.likes;
    },
    numLikedItems() {
      return this.$root.$data.likes.length;
    }
  },
}
</script>

<style scoped>
.header{
    color: #007bff;
}
</style>