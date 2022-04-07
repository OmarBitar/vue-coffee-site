<script>
import { useFetch } from '@/fetch.js'
import Card from '@/components/Card.vue'
export default {
  name: 'HotView',
  data() {
      return {
          data: null,

      }
  },
  async mounted() {
    const baseURL = 'https://api.sampleapis.com/coffee/hot'
    this.data = await useFetch(baseURL)
  },
  components: {
      Card
  }
}
</script>

<template>
    <img src="@/assets/favpng_coffee-cup-cafe-cream-clip-art.png" alt="hot coffe icon" width="100">
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="data">
        <card
            v-for="drink in this.data"
            v-bind:drink="drink"/>
    </div>
    <div v-else>Loading...</div>
</template>

