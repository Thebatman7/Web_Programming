<template>
<div>
  <!--
  The menu contains a list of countries, and then calls an event handler named select when that menu item is clicked.
  We're using a for the links because these are not handled by Vue Router, since they don't go to a new page.
  -->
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('United States')" href="#" class="pure-menu-link">United States</a></li>
      <li class="pure-menu-item"><a @click="select('Canada')" href="#" class="pure-menu-link">Canada</a></li>
      <li class="pure-menu-item"><a @click="select('Mexico')" href="#" class="pure-menu-link">Mexico</a></li>
      <li class="pure-menu-item"><a @click="select('Brazil')" href="#" class="pure-menu-link">Brazil</a></li>
      <li class="pure-menu-item"><a @click="select('Spain')" href="#" class="pure-menu-link">Spain</a></li>
    </ul>
  </div>
  <ProductList :products="products" />
</div>
</template>


<!--We import the ProductList component, just like with Home.vue.
We likewise have to list the ProductList in the components section.-->
<script>
import ProductList from "../components/ProductList.vue"

export default {
  name: 'Browse_view',
  components: {
    ProductList
  },

  /*
  We use the country property to keep track of the country the user is viewing.
  We use a computed property products(), like in Home.vue, except this time the filter method
  uses a function that compares product.country to the country property.
  Finally, the methods section has a select() function that modifies the country property when a menu item is clicked.
  */
  data() {
    return {
      country: '',
    }
  },
  computed: {
    products() { //This product that we are going to pass to <ProductList :products="products" /> each View passses a different product
      return this.$root.$data.products.filter(product => product.country === this.country);
    }
  },
  methods: {
    select(country) {
      this.country = country;
    }
  }
}
</script>

<!--This style is scoped so it affects only this component.-->
<style scoped>
.pure-menu-item a{
  color: #4778e0;
  font-weight: bold;
  font-size: 1.2em;
}
</style>