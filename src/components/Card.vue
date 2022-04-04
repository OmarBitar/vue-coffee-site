<script>
import {store} from '../store'
import {ref} from 'vue'
export default {
    data() {
        return {
            store,
            count: ref(0)
        }
    },
    props: ['drink'],
    methods: {
        decrement(){
            (this.count != 0) ? this.count-- : this.count = 0
            store.decrement(this.drink.title,this.drink.id,this.count)
        },
        increment(){
            this.count++
            store.increment(this.drink.title,this.drink.id,this.count)
        }
    },
}
</script>
<template>
    <div class="card"
    style="width: 250px; height: 200px; margin: 40px; display: inline-block">
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
               <a v-on:click="decrement(drink)" class="card-footer-item">-</a>
               <a  class="card-footer-item">{{count}}</a>
               <a v-on:click="increment(drink)" class="card-footer-item">+</a>
           </footer>
       </div>
   </div>
</template>