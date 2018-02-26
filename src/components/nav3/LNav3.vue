<template>
	<ul class="nav nav-sidebar">
		<li v-for="item in nav" >
			<router-link :to="item.path">{{item.name}}</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		data(){
			return {
				nav:[
					{ path: "/nav3", name: "导航三" , },
					{ path: "/about", name: "关于我们",},
					{ path: "/connect", name: "联系我们"}
				]
			}
		}
	}
</script>

<style>

</style>