<template>
	<ul class="nav nav-sidebar">
		<li v-for="item in navArr">
			<router-link :to="item.path" v-text="item.name"></router-link>
		</li>
		
	</ul>
		 		


</template>

<script>
	import { getNav } from '../../api/navApi.js';
	export default {
		data(){
			return {
				navArr: {}
			}
		},
		methods:{
			
		},
		mounted(){
				getNav().then((res)=>{
					var Navdata =res.nav1									
					this.navArr = Object.assign( {}, Navdata)
				}).catch((err)=>{
					console.log(err)
				})
		}
	}
</script>

<style>
	.router-link-active{
		color: #fff;
	    background-color: #428bca;
	}

</style>