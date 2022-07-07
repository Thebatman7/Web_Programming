<template>
<div id="app">

  <div id="menu">

    <!--This creates a menu using two div elements, one for the brand (a logo) and the other for two menu items (browse, cart).
    Each of these also uses router-link to create links that use Vue Router.
    This is instead of the usual a elements in HTML. Marking our links in this way ensures that Vue will load them 
    using Vue Router, which in turn places their content into the router-view tag.-->
    <div id="brand">
      <router-link to="/">
        <img src="/images/logo.png">
      </router-link>
    </div>

    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="/images/globe.png">
          <p>Browse</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item">
          <img src="/images/love.png">
          <p> {{items}} Items</p>
        </div>
      </router-link>
    </div>

  </div>

  

  <router-view />

  <footer id="theFooter">

    <div class='footer'>
      <div class='footer-item footer-one'>
        <a class='linkedin-link' href='https://www.linkedin.com/in/rembrandpardo/' target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>

      <div class='footer-item footer-two'>
          <a class='git-link' href='https://github.com/BYUCS260/grocery-store-Thebatman7' target="_blank">
            <i class="fab fa-github"></i>
          </a>
      </div>
    </div>

  </footer>

</div>
</template>


<script>
export default {
  name: 'App',
  
  data() {
    return {
    }
  },
  computed: {
    items() { //This product that we are going to pass to <ProductList :products="products" /> each View passses a different product
      return this.$root.$data.cart.length;
    }
  },
  
}
</script>



<!--Getting this menu to work is little tricky, because it has a centered brand and 
then links justified to the right. The easiest way is to use flexbox nested inside of a grid.-->
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

/*
This sets up a CSS grid that has three columns, each one taking up one third of the space using grid-template-columns.
The 1fr indicates one equal fraction of the width of the screen.
Each column has a 5px gap between it. We then name these three columns none, brand, and side.
These names can be anything you want. I use none to mean we will not put any content there.
*/
#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #1d3097;
}

/*
The first one, grid-area, places this div into the column named brand.
This brand matches the brand from grid-template-areas. Note, the same name is used for 
the column area (brand) as the id (#brand) but these don't have to match.
IMPORTANT: We also style #brand with a flexbox (flex) and justify its content to align in the center.
This is nesting a flexbox within the second grid column. 
The grid ensures that the #brand content is placed in the center of the page. 
The flexbox ensures that the image inside the #brand div is centered.
*/
#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

/*
The menu links, they are wrapped in a div with a #side id.
This puts the #side div into the third column of the grid layout.
Like with the #brand, we use a flexbox here, which is nested inside the third column.
We justify this content to the right instead of center. If you keep looking, you'll see 
we also used yet another flexbox to get the logo for each menu item to be on top of the text for that menu item.
*/
#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  color: rgb(1, 19, 100);
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

#theFooter {
  display: flexbox;
}

.footer {
  display: flex;
  justify-content: center;
  justify-content: space-around;

}

.fab {
  color: #1d3097;
  font-size: 1.5em;
}

body{
  margin-bottom: 15px;
}

</style>