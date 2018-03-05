<template>
	<div class="col-md-3" style="padding-left: 0;">
		<div class="input-group">
			<input type="text" class="form-control" @keyup.enter="search" placeholder="搜索" v-model="searchInput"/>
			<span class="input-group-btn">
				<button class="btn btn-md btn-info" @click="search">搜索</button>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				searchInput: "",
				isShow: false
			}
		},
		methods:{
			search(){
				this.$emit("setInput", this.searchInput, this.isShow)
			}
		}
	}
</script>

<style>
</style>