<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/hot">Hot</router-link> |
    <router-link to="/iced">iced</router-link>
  </nav>
  <SideBar />
  <router-view/>
</template>

<script>
import SideBar from './components/SideBar.vue'
import {store} from './store.js'
import {useFetch} from './fetch.js'
  export default {
    components: {
      SideBar
    },
    async created() {
    const baseURL = "https://api.sampleapis.com/coffee";
    store.iceDrinks = await useFetch(baseURL + "/iced");
    store.iceDrinks.map((coffee) => {
      coffee.count = 0;
      coffee.type = "ice";
    });

    store.hotDrinks = await useFetch(baseURL + "/hot");
    store.hotDrinks.map((coffee) => {
      coffee.count = 0;
      coffee.type = "hot";
    });
  },
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
