<script>
export default {
	name: "MenuItem",
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
		}
	},
	methods: {
		updateCart(){
			this.$store.dispatch("updateShoppingCart",{
				amount: this.quantity,
				id: this.id
				}
			)
		},
		beforeMount() {
			const today = new Date().getDate()
			if (today % 2 === 0) {
				this.onSale = true
			}
		}
	}
}
</script>

<template>
	<div class="menu-item">
		<img class="menu-item__image" :src="image.source" :alt="image.alt" />
		<div class="detail">
			<h3>{{ name }}</h3>
			<p>
				Prix : {{ generatedPrice }} €
				<span v-if="onSale">(10% de réduction !)</span>
			</p>
			<p v-if="inStock">En stock</p>
			<p v-else>En rupture de stock</p>
			<div>
				<label for="add-item-quantity">Quantité : </label>
				<input v-model.number="quantity" id="add-item-quantity" type="number" />
			</div>
				<button class="defaultButton" @click="updateCart()">
					AJOUTER AU PANIER
				</button>
		</div>
	</div>
</template>

<style lang="scss">
.menu-item {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 500px;
	height: 220px;
	margin-bottom: 30px;
	&__image {
		max-width: 300px;
	}
}
.detail{
	border: 1px solid black;
	display: flex;
	flex-direction: column;
}
.defaultButton{
	background-color: #b7cefa;
	margin-top: 5px;
	padding: 5px;
	border-radius: 50em;
	font-weight: bold;
}
#add-item-quantity{
	width: 50px;
}
</style>