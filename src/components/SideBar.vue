<template>
 <img
      v-on:click="coffeeToggle"
      class="coffeeMenue"
      v-bind:class='{ coffeeMenue: this.toggle, coffeeMenueToggle: !this.toggle }'
      src="../assets/favpng_coffee-cup-cappuccino-clip-art.png" alt="burger" width="50" />
  <div v-show="toggle"
   class="sidebar">
       <aside class="menu" >
      <p class="menu-label">
        Shopping Cart
      </p>
      <ul class="menu-list">
        <li>
          <ul>
            <a v-if="store.drinks.length == 0" class="card-footer-item">
              Shopping Cart Empty
            </a>
            <li v-for="drink in store.drinks">
              <a>
                <footer class="card-footer">
                    <a  class="card-footer-item">{{drink.drinkName}}</a>
                    <a  class="card-footer-item">{{drink.drinkCount}}</a>
                    <button v-on:click="store.remove(drink.drinkID)" class="card-footer-item">remove</button>
                </footer>
              </a>
            </li>
          </ul>
          <a class="is-active">Check Out</a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import {store} from '../store'
export default {
  name: 'SideBar',
  data() {
    return {
      toggle: false,
      store
    }
  },
  methods: {
    coffeeToggle() {
      this.toggle = !this.toggle
    }
  },
}
</script>

<style scoped>

.sidebar {
  overflow:auto;
  max-height: 70%;
  box-shadow: 0 8px 8px 0 #808080;
  position: fixed;
   width: 50%;
   z-index: 1;
  right: 10px;
  background-color:white;float: right
}
@media (max-width: 800px) {
  .sidebar {
    width: 100%;
  }
}
.coffeeMenue {
  z-index: 2;position: fixed;right:0
}
.coffeeMenueToggle {
  transform: rotate(-90deg);
}
</style>