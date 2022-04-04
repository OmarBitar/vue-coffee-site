import { reactive, ref } from 'vue'

export const store = reactive({
    drinks : ref([]),

    increment(drinkName,id,count) {
        let drink = this.drinks.find(drink => drink.drinkID === id);

        if(drink) {
            drink.drinkCount = count
        } else {
            this.drinks.push({
                drinkID : id,
                drinkName : drinkName,
                drinkCount : count,
            })
        }
    },
    decrement(drinkName,id,count) {
        let drink = this.drinks.find(drink => drink.drinkID === id);
        if(drink) {
            drink.drinkCount = count
            if(drink.drinkCount == 0) this.drinks.splice(this.drinks.indexOf(drink),1);
        }
    },
    remove(id) {
        let drink = this.drinks.find(drink => drink.drinkID === id);
        if(drink) {
            drink.drinkCount = 0
            if(drink.drinkCount == 0) this.drinks.splice(this.drinks.indexOf(drink),1);
        }
    }
})