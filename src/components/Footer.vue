<script>
import { mapGetters } from 'vuex'
export default {
    name: "Footer",
    computed: {
        ...mapGetters({
            copyright: "copyright"
        })
    }
}
</script>

<template>
    <footer class="footer">
			<p>{{ copyright }}</p>
	</footer>
</template>

<style scoped>
    .footer {
        margin-top: 10px;
        width: 100%;
        background-color: chartreuse;
        font-style: italic;
        text-align: center;

    }
</style>