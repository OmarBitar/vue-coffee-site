<script>
export default {
  props: ["drink"],
  methods: {},
};
</script>
<template>
    <div class="card"
    style="width: 250px; height: 200px; margin: 20px; display: inline-block">
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
               <a v-on:click="$emit('decrement', drink)" class="card-footer-item" style="user-select: none;">-</a>
               <a  class="card-footer-item">{{drink.count}}</a>
               <a v-on:click="$emit('increment', drink)" class="card-footer-item" style="user-select: none;">+</a>
           </footer>
       </div>
   </div>
</template>