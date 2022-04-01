<template>
  <div style="float: right; width: 300px;">
    <img src="../assets/favpng_coffee-cup-cappuccino-clip-art.png" style="float: left;" alt="burger" width="25px" />
    <aside class="menu" >
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
  name: 'SideBar'
}
</script>
