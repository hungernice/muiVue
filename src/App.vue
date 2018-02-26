<template>
  <div id="app">
		<Header></Header>
		<div class="container-fluid">
			<div class="row">				
				<LeftNav></LeftNav>
				<Content></Content>
			</div>
		</div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import LeftNav from './components/LeftNav.vue'
import Content from './components/Content.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components:{
  	Header,
  	LeftNav,
  	Content
  }
}
</script>

<style lang="scss" scoped="scoped">

</style>
