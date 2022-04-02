<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    props: ['drink']
}
</script>
<template>
<div class="column">
    <div class="card"
    style="display: grid; width: 250px; height: 200px; margin: 40px; display: inline-block">
       <div class="card-conetent" >
           <header class="card-header">
                   <p class="card-header-title">
                       {{drink.title}}
                   </p>
               </header>
           <div class="conetnt" style="height:100px;overflow:auto;">
               {{drink.description}}
           </div>
           <footer class="card-footer">
               <a v-on:click="(this.count != 0) ? this.count-- : this.count = 0" class="card-footer-item">-</a>
               <a  class="card-footer-item">{{this.count}}</a>
               <a v-on:click="this.count++" class="card-footer-item">+</a>
           </footer>
       </div>
   </div>
</div>
</template>