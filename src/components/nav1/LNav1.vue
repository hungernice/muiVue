<template>
	<ul class="nav nav-sidebar">
		<li>
			
			<router-link to="/nav1" >导航一</router-link>
		</li>
		<li>
			
			<router-link to="/reports" >Reports</router-link>
		</li>
		<li>
			<router-link to="/analytics" >Analytics</router-link>
			
		</li>
		<li>
			<router-link to="/export" >Export</router-link>
			
		</li>
		
	</ul>
		 		


</template>

<script>
	import { requestLogin } from '../../api/navApi.js';
	console.log(requestLogin)
//	console.log(requestLogin)
	export default {
		data(){
			return {
				nav: ""
			}
		},
		methods:{
			myajax: function() { 
				requestLogin().then((res)=>{
					console.log(res)
				})
					
				
//				requestLogin()
//              this.$http.get("/ajaxurl/welfare/gpa/index/index").then(response => {  
//                  console.log("获取信息成功")  
//                  console.log(response);  
//              }, response => {  
//                  console.log("获取信息失败")  
//                  console.log(response);  
//              })  
            }  		
		},
		mounted(){
			this.myajax()
		}
	}
</script>

<style>
	.router-link-active{
		color: #fff;
	    background-color: #428bca;
	}

</style>