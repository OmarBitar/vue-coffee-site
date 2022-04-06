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
export default {
  components: {
    SideBar
  }
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
