import { reactive, ref } from 'vue'

export const store = reactive({
    hotDrinks: ref([]),
    iceDrinks: ref([]),
    remove(type, id) {
        let drink;
        if (type === "hot") {
          drink = this.hotDrinks.find((drink) => drink.id === id);
          drink.count = 0;
        } else {
          drink = this.iceDrinks.find((drink) => drink.id === id);
          drink.count = 0;
        }
      }
})