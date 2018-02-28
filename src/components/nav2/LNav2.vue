<template>
	<ul class="nav nav-sidebar">
		<li>
			<a style="cursor: pointer;" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false">资产管理</a>
			<!--<router-link to="/nav2" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
				资产管理
			</router-link>-->
			<ul class="collapse" id="collapseExample">
				<li style="list-style: none;">
					<!--<a >查看资产组</a>-->
					<router-link to="/nav2/t1" class="collapseA">查看资产组</router-link>
				</li>
			
				<li style="list-style: none;">
					<!--<a >查看资产</a>-->
					<router-link to="/nav2/t2" class="collapseA">查看资产</router-link>
				</li>
				<li style="list-style: none;">
					<router-link to="/nav2/t3" class="collapseA">查看机房</router-link>
					<!--<a>查看机房</a>-->
				</li>
			</ul>

		</li>
		<li>
			<!--<a href="">Nav item again</a>-->
			<router-link to="/again">Nav item again</router-link>
		</li>
		<li>
			<router-link to="/more">One more nav</router-link>
			<!--<a href="">One more nav</a>-->
		</li>
		<li>
			<router-link to="/another">Another nav item</router-link>
			<!--<a href="">Another nav item</a>-->
		</li>
		
	</ul>
</template>

<script>
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