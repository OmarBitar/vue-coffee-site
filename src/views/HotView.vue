<script>
import Card from '@/components/Card.vue'
import {store} from '../store.js'
export default {
  name: 'HotView',
  data() {
      return {
          store
      }
  },
  methods: {
    decrement(drink) {
        (drink.count != 0) ? drink.count-- : drink.count = 0
    },
    increment(drink) {
        drink.count++;
    },
  },
  components: {
      Card
  }
}
</script>
<template>
    <img src="@/assets/favpng_coffee-cup-cafe-cream-clip-art.png" alt="hot coffe icon" width="100">
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="store.hotDrinks">
        <card
            v-for="drink in store.hotDrinks"
            v-bind:drink="drink"
            @decrement="decrement"
            @increment="increment"
            />
    </div>
    <div v-else>Loading...</div>
</template>

