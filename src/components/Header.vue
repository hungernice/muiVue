<template>
	<div id="header">
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			            <span class="sr-only">Toggle navigation</span>
			            <span class="icon-bar"></span>
			            <span class="icon-bar"></span>
			            <span class="icon-bar"></span>
			          </button>
					<a class="navbar-brand" href="#">Project name</a>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
					<ul class="nav navbar-nav navbar-right">
						<!--<li>
							<a href="#">Dashboard</a>
						</li>
						<li>
							<a href="#">Settings</a>
						</li>
						<li>
							<a href="#">Profile</a>
						</li>
						<li>
							<a href="#">Help</a>
						</li>-->
						<li v-for="item in HeadNavArr">
							<a :href="item.path" v-text="item.name"></a>
						</li>
					</ul>
					<form class="navbar-form navbar-right">
						<input type="text" class="form-control" placeholder="Search...">
					</form>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				HeadNavArr: [
					{
						path: "#",
						name: "Dashboard"
					},
					{
						path: "#",
						name: "Settings"
					},
					{
						path: "#",
						name: "Profile"
					},
					{
						path: "#",
						name: "Help"
					}
				]
			}
		}
	}
</script>

<style>

</style>