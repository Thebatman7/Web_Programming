<template>
<div class="wrapper">

  <div class="products">

    <!--This template loops through an array of products using v-for.
    Notice that we need to bind a key attribute to some unique identifier in this for loop,
    otherwise Vue will raise an error indicating we need one. We can use the product.id for this.
    Generally, whenever you loop through data, ensure that each data item has a unique id like this.
    We display each product's name, country of origin, image, and its price.
    Notice that the img tag uses class binding so that the URL for the image is /images/products/ plus the image name.
    This is the syntax to use where you want to mix a Vue property with other JavaScript, such as appending to a string.-->
    <div class="product" v-for="product in products" :key="product.id">

      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.country}}</p>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image"> <!--notice the use of product.image not mustache{{}} needed-->
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
        <button class="auto" @click="removeItem(product)">Remove Item</button>
      </div>

    </div>

  </div>

</div>
</template>

<!--Here we are indicating that the ProductList component has one prop, an array of products.
The export default is like what we used for the mock data.
This component is exporting an object, with properties for its name and props.
The props are contained in an object, listing property names and types.-->
<script>
export default {
  name: 'ProductList',
  props: {
    products: Array,
  },

  data() {
    return {
    }
  },
  methods: {
    removeItem(product) {
        const index = this.$root.$data.cart.indexOf(product);
        if(index > -1) {
            this.$root.$data.cart.splice(index, 1)// 2nd parameter means remove one item only
        }
    }
  }
}
</script>



<!--This style is scoped so it affects only this component.-->
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 10px;
  width: 200px;
}

.product img {
  border: 1px solid #4778e0;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  border: 1px solid #4778e0;
  background: rgb(196, 209, 218);
  color: #4778e0;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

/*
IMPORTANT: price div uses flexbox and then sets margin-left to auto for the "add to cart" button.
This makes that button float to the right when everything else is floated left by default in the flexbox.
*/
.price {
  display: flex;
}
.auto {
  margin-left: auto;
}

button {
  height: 50px;
  background: rgb(1, 19, 100);
  color: white;
  border: none;
}


</style>