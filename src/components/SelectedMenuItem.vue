<script>
export default {
	name: "SelectedMenuItem",
	props: {
		image: {
			type: Object,
			required: true
		},
		inStock: {
			type: Boolean,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		id: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
			required: true
		},
		quantity: {
			type: Number,
			defaut: 1
		}
	},
	data() {
		return {
			onSale: false,
		}
	},
	computed: {
		generatedPrice() {
			if (this.onSale) {
				return (this.price * 0.9).toFixed(2)
			} else {
				return this.price
			}
		},
        totalPrice(){
            return this.price*this.quantity
        }
	},
	methods: {
		beforeMount() {
			const today = new Date().getDate()
			if (today % 2 === 0) {
				this.onSale = true
			}
		},
		removeCart(){
			this.$store.dispatch("removeFromShoppingCart",{
				amount: this.quantity,
				name: this.name
				}
			)
		}
	}
}
</script>

<template>
	<tr class="selected-menu-item">
		<td class="selectedCell"> <img class="productImage" alt="image du produit" :src="image.source"> </td>
		<td class="selectedCell">blablabla</td>
		<td class="selectedCell"> {{ price }} </td>
		<td class="selectedCell"> {{ quantity }} </td>
		<td class="selectedCell"> {{ totalPrice }} </td>
		<td class="removeCell"> <button @click="removeCart()"> Retirez </button> </td>
	</tr>
</template>

<style lang="css">
	.productImage {
		height: 100px;
		width: auto;
	}
	.removeCell{
		border: none;
	}
</style>