<template>
  <div id="app">
    <Header/>
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/about">Le Labo</router-link> |
      <router-link to="/shop">La Boutique</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <Cart
      :nbOfItem=shoppingCart
    />
    <router-view />
    <Footer/>
  </div>
</template>

<script>

import Footer from "./components/Footer"
import Header from "./components/Header"
import Cart from "./components/Cart"
import { mapState } from 'vuex'

export default {
  components: {
    Footer,
    Header,
    Cart
  },
  computed: {
    ...mapState({
            shoppingCart: "shoppingCart"
        })
  }
}
</script>


<style lang="scss">
#app {
  margin: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  position: static;
  padding: 30px;
  background-color: #b7cefa;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: rgb(190, 162, 85);
    }
  }
}
</style>