<template>
	<div>
		<ul class="nav nav-sidebar">
			<li>
				
				<router-link to="/nav1">导航一</router-link>
			</li>
			<li>
				
				<router-link to="/reports">Reports</router-link>
			</li>
			<li>
				<router-link to="/analytics">Analytics</router-link>
				
			</li>
			<li>
				<router-link to="/export">Export</router-link>
				
			</li>
			
		</ul>
		 		
	</div>

</template>

<script>
</script>

<style scoped>
	.nav-sidebar li:hover{
		background: #fff;
	}
</style>