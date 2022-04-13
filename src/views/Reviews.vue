<script>
export default {
    name: 'reviews',
    props: ['drinkName','drinkDescription'],
    data() {
        return {
            reviews: [],
            user: null,
            stars: null,
            userReview: null,
            errors: [],
        }
    },
    methods: {
        submitReview() {
            this.errors = []
            if(this.user && this.stars && this.userReview) {
                this.reviews.push({
                    user: this.user,
                    stars: this.stars,
                    userReview: this.userReview
                })
                this.user = null
                this.stars = null
                this.userReview = null
                this.errors = []
            } else {
                if(!this.user) this.errors.push(1)
                if(!this.stars) this.errors.push(2)
                if(!this.userReview) this.errors.push(3)
            }
        }
    },
}
</script>
<template>
    {{drinkName}}
    <br>
    {{drinkDescription}}

    <div class="reviewForm" v-on:keyup.enter="submitReview">
        <form action="">
            <label for="user" class="label" style="float:left"> user name </label>
            <input class="input" id="user" type="text" v-model="user" />
            <p v-show="this.errors.includes(1)" class="help is-danger">username is required</p>
            <label for="starRating">⭑ rating: </label>
            <div class="select is-rounded">
                <select id="starRating" class="starRating" v-model="stars">
                    <option class="is-rounded"></option>
                    <option>⭑</option>
                    <option>⭑⭑</option>
                    <option>⭑⭑⭑</option>
                    <option>⭑⭑⭑⭑</option>
                    <option>⭑⭑⭑⭑⭑</option>
                </select>
            </div>
            <p v-show="this.errors.includes(2)" class="help is-danger">stars is required</p>
            <br>
            <label for="userReview" class="label" style="float:left"> user review </label>
            <textarea name="userReview" id="userReview" v-model="userReview" cols="30" rows="10" class="textarea"/>
            <p v-show="this.errors.includes(3)" class="help is-danger">user review is required</p>
            <button class="button" v-on:click.prevent="submitReview">submit</button>
        </form>
    </div>
    <p v-if="this.errors > 0" class="help is-danger">please resolve errors</p>
    <div v-if="this.reviews.length > 0">
        <h2>
            reviews
        </h2>
        <div class="card" v-for="review in this.reviews" >
            <h2>{{review.user}}</h2>
            <p>{{review.stars}}</p>
            <p>{{review.userReview}}</p>
        </div>
    </div>
</template>
<style scoped>
.reviewForm {
    display: grid;
    place-items: center;
}
</style>