<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" placeholder="Search memory..." />
      </form>
    </div>
  </div>
  <PlaceList :places="places" />
</div>
</template>


<!--We could  improve this by reseting the arrya of places when input is zero or null -->

<script>
import PlaceList from "../components/PlacesList.vue"
export default {
  name: 'Home_',
  components: {
    PlaceList
  },
   data() {
    return {
      searchText: '',
    }
  },
  computed: {
    places() {
      return this.$root.$data.places.filter(place => place.memory.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 2px solid #7712eb;
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
  color: #ccd6f6;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
  color: #ccd6f6;
}

::placeholder {
  color: #152947;
}
</style>