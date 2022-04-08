<script>
import Card from '@/components/Card.vue'
import {store} from '../store.js'

export default {
  name: 'IcedView',
  data() {
      return {
        store
      }
  },
  components: {
      Card
  },
  methods: {
    decrement(drink) {
        (drink.count != 0) ? drink.count-- : drink.count = 0
    },
    increment(drink) {
        drink.count++;
    },
  },
}
</script>

<template>
    <img src="@/assets/favpng_coffee-milk-latte-macchiato-cappuccino.png" alt="hot coffe icon" width="100">
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="store.iceDrinks">
        <Card
            v-for="drink in store.iceDrinks"
            v-bind:drink="drink"
            @decrement="decrement"
            @increment="increment"
            />
        </div>

    <div v-else>Loading...</div>
</template>

