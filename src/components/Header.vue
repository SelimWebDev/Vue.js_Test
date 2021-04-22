<script>
import { mapState } from 'vuex'
export default {
    name: "Header",
    computed: {
        ...mapState({
            restaurantName: "restaurantName"
        })
    }
}
</script>

<template>
    <div class="title">
        <h1>{{ restaurantName }}</h1>
    </div>
</template>

<style>
    .title {
        display: inline-block;
        width: 100%;
        background-color: #b7cefa;
    }
</style>