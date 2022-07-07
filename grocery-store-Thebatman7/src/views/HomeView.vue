<template>
<div>

  <div class="wrapper"><!--div added for search box-->
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>

  <ProductList :products="products" />
</div>
</template>


<!--The ProductList component allows us to use a <ProductList> tag in the HTML template.
Remember this component has a products prop. We pass it data for this prop using 
attribute binding :products. We bind this to a products variable, but this variable could be called anything. 
The important thing is that the :products attribute here matches the products prop defined inside of ProductList.vue.-->
<script>
import ProductList from "../components/ProductList.vue"

/*
The first line imports the ProductList component. Notice that the view is a component so it also exports an object,
like any other component. This is what allows us to import it in src/router/index.js. We use a computed property 
called products to get the list of products from the global state variable defined in src/main.js. We don't need 
any style because the ProductList component includes its own style.
*/
export default {
  name: 'Home_view',
  components: {
    ProductList
  },

  /*
  We modify JavaScript for this component so that data portion has a searchText property.
  This is bound to the input used for the search box.
  */
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    products() {
      /*
      Notice that we are using a higher-order function, filter to filter the list of products.
      This returns a new array that is a subset of the original array. It takes one parameter, a function.
      This is an anonymous function since it has no name! We are using the arrow syntax to define the function,
      so it takes one parameter, product (one of the products from the array) and returns true or false based 
      on whether the product name contains the searchText. We use toLowerCase() to first convert the product name 
      to lowercase so that the search is case insensitive. The toLowerCase() function returns a new string
      without modifying the original. The search() function returns a position in the string where the search 
      is located, and -1 if it is not found, so we just need to check if it returns something greater than or 
      equal to zero.
      */
      return this.$root.$data.products.filter(product => product.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>


<!--
This style is scoped so it affects only this component. We're using flexbox again. There are a few tricky things here. 
First, some of the styles on input need to use !important to override settings in Pure CSS. 
Second, We want the search input to take up all the rest of the containing div after the search icon,
and a border around both of them, instead of just around the input box. This takes a little bit of creativity.
We use a .wrapper div around the entire search box, and then format them using table and table-cell to get them 
to behave the way we want.
-->
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid  rgb(1, 19, 100);
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>