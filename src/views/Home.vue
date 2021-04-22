<template>
	<div>
		<p class="description">
			Bienvenue chez {{ restaurantName }}! Nous sommes réputés pour
			nos barre de céréale Healthy et Savoureuse ! Faites vous plaisir avec ce qu'il y a de meilleur pour votre organisme.
			Fort de notre expérience sportive en haut niveau et de nos connaissances en nutrition, vous trouverez chez Healfit tout ce qu'il vous faut
			pour atteindre vos objectifs
		</p>
	</div>
</template>

<script>

export default {

	name: "Home",

	data() {
		return {
			restaurantName: "La belle vue",
		}
	}

}
</script>

<style lang="scss">

.description {
	max-width: 960px;
	font-size: 1.2rem;
	margin: 0 auto;
}

</style>