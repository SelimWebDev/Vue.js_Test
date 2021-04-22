import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		restaurantName: "HealFit",
		shoppingCart: 0,
		selectedItem: [],
		simpleMenu: [
			{
				name: "Croissant",
				id: 0,
				image: {
					source: "/images/croissant.jpeg",
					alt: "Un croissant"
				},
				inStock: true,
				quantity: 1,
				price: 2.99,
			},
			{
				name: "Baguette de pain",
				id: 1,
				image: {
					source: "/images/baguette_de_pain.jpeg",
					alt: "Quatre baguettes de pain"
				},
				inStock: true,
				quantity: 1,
				price: 3.99,
			},
			{
				name: "Éclair",
				id: 2,
				image: {
					source: "/images/eclair.jpeg",
					alt: "Éclair au chocolat"
				},
				inStock: false,
				quantity: 1,
				price: 4.99,
			}
		]
	},
	getters: {
		copyright: (state) => {
			const currentYear = new Date().getFullYear()
			return `Copyright ${state.restaurantName} ${currentYear}`
		},
		totalPriceSelected: (state) => {
			var totalprice = 0
			var item
			for (item in state.selectedItem){
				totalprice += state.selectedItem[item].quantity * state.selectedItem[item].price
			}
			return totalprice
		}
	},
	mutations: {
		ADD_ITEMS_TO_SHOPPING_CART(state, { amount, id }) {
			state.shoppingCart += amount
			var clone = state.simpleMenu[id]
			clone.quantity = amount
			state.selectedItem.push(clone)
		},
		REMOVE_ITEM_FROM_SHOPPING_CART(state, {amount, name}){
			state.shoppingCart -= amount
			var index = state.selectedItem.indexOf(name)
			state.selectedItem.splice(index, 1)
		}
	},
	actions: {
		updateShoppingCart({ commit }, { amount, id } ) {
			commit("ADD_ITEMS_TO_SHOPPING_CART", {amount, id})
		},
		removeFromShoppingCart({commit}, {amount, name}) {
			commit("REMOVE_ITEM_FROM_SHOPPING_CART", {amount, name})
		}
	},
	modules: {
	}
})
