import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'//needed to use the mock data in the file

Vue.config.productionTip = false

/*
The first line imports the mock data and stores it in a variable called mock.
Then we create a data object and pass this to the Vue instance when it is created.
This makes this.$root.$data available to all components in the application.
Any time you change main.js you will need to reload the app to see the changes.
If you reload and then use the Vue Developer Tools you should be able to see the mock data is loaded:
*/
let data = {
  products: mock,
  cart: [],
}

new Vue({
  router,
  data, // added to create mock data
  render: h => h(App)
}).$mount('#app')
