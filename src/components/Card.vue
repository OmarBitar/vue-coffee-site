<script>
export default {
  props: ["drink"],
  methods: {},
};
</script>
<template>
    <div class="card">
       <div class="card-conetent">
           <header class="card-header" style="z-index=0">
                   <p class="card-header-title">
                       {{drink.title}}
                   </p>
            </header>
           <div class="conetnt" style="height:100px;overflow:auto;">
               <div class="review"
                    v-on:click="this.$router.push({
                        name: `reviews`,
                        params: {
                            drinkName : drink.title,
                            drinkDescription: drink.description,
                        }
                    })"
                >
                    write a review
               </div>
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
<style>
.review {
    opacity: 0;
    /* filter:alpha(opacity=0); */
    z-index: 1;
    position: absolute;
    height: inherit;
    width: 100%;
    text-align: center;
}
.review:hover {
    opacity: 1;
    /* filter:alpha(opacity=100); */
    background-color: lightgrey;
}
.card {
    width: 250px; height: 200px;
    margin: 20px;
    display: inline-block;
}
</style>