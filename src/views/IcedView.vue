<script>
import { useFetch } from '@/fetch.js'
import Card from '@/components/Card.vue'
export default {
  name: 'IcedView',
  data() {
      return {
          data: null,

      }
  },
  created() {
      this.data = useFetch('iced')
      console.log(this.data)
  },
  components: {
      Card
  }
}
</script>

<template>
    <img src="@/assets/favpng_coffee-milk-latte-macchiato-cappuccino.png" alt="hot coffe icon" width="100">
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="data">
        <Card
            v-for="drink in this.data"
            v-bind:drink="drink"/>
        </div>

    <div v-else>Loading...</div>
</template>

