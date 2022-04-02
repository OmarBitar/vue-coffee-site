<template>
  <div style="float: right;display:block">
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
          <a class="is-active">Hot Coffee</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
      </ul>
      <ul class="menu-list">
        <li>
          <a class="is-active">Cold Coffee</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      toggle: true
    }
  },
}
</script>
