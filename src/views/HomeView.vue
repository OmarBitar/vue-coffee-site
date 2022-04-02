<template>
  <div class="home">
   <p>Welcome to the demo coffef app made in Vue.js</p>
   <img src="@/assets/favpng_iced-coffee-cafe-coffeemaker.png" width="500" alt="">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}
</style>
