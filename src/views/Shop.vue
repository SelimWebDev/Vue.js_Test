<template>
	<div>
		<h2>Menu</h2>
		<section class="menu">
			<MenuItem
				v-for="item in simpleMenu"
				:name="item.name"
				:id="item.id"
				:image="item.image"
				:price="item.price"
				:quantity="item.quantity"
				:inStock="item.inStock"
				:key="item.name"
			/>
		</section>
	</div>
</template>

<script>
import {mapState } from "vuex"
import MenuItem from "../components/MenuItem"

export default {
	name: "Shop",
	components: {
		MenuItem
	},
	computed: {
		...mapState({
			restaurantName: "restaurantName",
			simpleMenu: "simpleMenu"
		})
	}
}
</script>

<style lang="scss">
.menu {
	margin-top: 40px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
</style>