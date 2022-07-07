<template>
<div>
  <h1 class="header">Your Cart</h1>  
  <CartItems :products="cart" />
</div>
</template>


<script>
import CartItems from "../components/CartItems.vue"

export default {
  name: 'Browse_view',
  components: {
    CartItems
  },

  
  data() {
    return {
    }
  },
  computed: {
    cart() { //This cart that we are going to pass to <ProductList :products="cart" />
      return this.$root.$data.cart;
    }
  },
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(1, 19, 100);
  margin-bottom: 0;
}
</style>