<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 阻止默认的TabBar
			uni.hideTabBar()
		},
		onShow: function() {
			console.log('App Show')
			// 阻止默认的TabBar
			uni.hideTabBar()
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
