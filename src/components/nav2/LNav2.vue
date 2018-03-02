<template>
	<ul class="nav nav-sidebar">
		<li>
			<a style="cursor: pointer;" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false">资产管理</a>
			<ul class="collapse" id="collapseExample">
				
				<li style="list-style: none;" v-for="item in navArr">
					<router-link :to="item.path" class="collapseA">{{ item.name }}</router-link>
				</li>
			</ul>

		</li>
		<li>
			<router-link to="/again">Nav item again</router-link>
		</li>
		<li>
			<router-link to="/more">One more nav</router-link>
		</li>
		<li>
			<router-link to="/another">Another nav item</router-link>
		</li>
		
	</ul>
</template>

<script>
	import { getNav } from '../../api/navApi.js'
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
					var Navdata =res.nav2[0].children		
					this.navArr = Object.assign( {}, Navdata)
				}).catch((err)=>{
					console.log(err)
				})
		}
	}
</script>

<style scoped="scoped">
	.collapse li{
		list-style: none;
	}
	.collapseA{
	    position: relative;
	    display: block;
	    line-height: 25px;
	    padding-right: 20px;
	    padding-left: 20px;
	    text-decoration: none;    
	}
	.collapseA:hover{
		background: #eee;
	}
</style>