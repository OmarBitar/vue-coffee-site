<template>
  <div style="float: right;display:block;width:400px">
    <img
      v-on:click="toggle = !toggle"
      style="float:right;display:block;"
      src="../assets/favpng_coffee-cup-cappuccino-clip-art.png" alt="burger" width="50" />
    <aside v-show="toggle" class="menu" >
      <p class="menu-label">
        Shopping Cart
      </p>
      <ul class="menu-list">
        <li>
          <ul>
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
      toggle: true,
      store
    }
  },
}
</script>
