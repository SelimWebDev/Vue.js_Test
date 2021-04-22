<template>
	<div>
		<h2>Mon Panier</h2>
		<table class="myCartTable">
			<tr class="tableHeader">
				<td><p>Produit</p></td>
				<td><p>Description</p></td>
				<td><p>Prix Unitaire</p></td>
				<td><p>Quantité</p></td>
				<td><p>Prix Total</p></td>
			</tr>
			<SelectedMenuItem
				v-for="item in selectedItem"
				:name="item.name"
				:id="item.id"
				:selected="item.selected"
				:image="item.image"
				:price="item.price"
				:quantity="item.quantity"
				:inStock="item.inStock"
				:key="item.name"
			/>
			<tr class="tableFooter">
				<td class="FooterCellText" colspan="4">Prix total de vos commandes :</td>
				<td class="FooterCellNumber" colspan="1"> {{ totalPriceSelected }} </td>
			</tr>
		</table>
	</div>
</template>

<script>
	import SelectedMenuItem from "../components/SelectedMenuItem"
	import {mapState, mapGetters} from "vuex"

	export default {
		name: "MyCart",
		components: {
			SelectedMenuItem
		},
		computed: {
			...mapState({
				selectedItem: "selectedItem"
			}),
			...mapGetters({
				totalPriceSelected: "totalPriceSelected"
			})
		}
	}
</script>
	
<style>
.myCartTable{
	width: 1200px;
	margin-left: auto;
	margin-right: auto;
}
td {
	vertical-align: center;
	border: 1px black solid;
	width: 200px;
	height: 100px;	
}
.FooterCellText {
	border-right: none;
	text-align: right;
}
.FooterCellNumber {
	border-left: none;
}

</style>


