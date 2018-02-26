<template>
	<!--<div id="left">-->
	<div class="col-sm-3 col-md-2 sidebar">
		<LNav1></LNav1>
		<LNav2></LNav2>
		<LNav3></LNav3>
	</div>

	
</template>

<script>
	import LNav1 from './nav1/LNav1.vue'
	import LNav2 from './nav2/LNav2.vue'
	import LNav3 from './nav3/LNav3.vue'
	export default {
		name: 'app',
		data() {
			return {
				msg: ''
			}
		},
		components: {
			LNav1,
			LNav2,
			LNav3
		}
	}
</script>

<style>
	.router-link-exact-active{
		color: #fff;
	    background-color: #428bca;
	}

</style>