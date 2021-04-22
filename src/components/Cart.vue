<script>
export default {
    name: "Cart",
    props: {
        nbOfItem: {
            type: Number,
            required: true
        }
    }
}
</script>

<template>
    <div class="shopping-cart">
			<h2>Panier : {{ nbOfItem }} articles</h2>
            <router-link to="/mycart">
                <img class="cart-logo" alt="mon panier" src="../../public/images/cart.png" />
            </router-link>
	</div>
</template>

<style>
    .shopping-cart {
        position: absolute;
        right: 30px;
        top: 8px;
        background-color: rgb(247, 210, 109);
    }
    .cart-logo {
        width: 50px;
        height: auto;
    }
</style>