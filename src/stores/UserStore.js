import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: 'Jerry Luong'
    }),

    //use function definition of getters so we can also access getters
    // because then 'this' keyword will give you context outside 
    // of the state
    getters: {
        firstName() {
            return this.user.split(' ')[0];
        }
    }
})