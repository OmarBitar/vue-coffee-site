<template>
  <div class="home">
   <p>Welcome to the demo coffef app made in Vue.js</p>
   <p>this site uses an <a href="https://sampleapis.com/api-list/coffee">API</a> to fetch it's coffee data</p>
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
