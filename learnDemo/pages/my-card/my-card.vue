<template>
	<view class="my-card">
		<text>我的内容</text>
		<MyTabbar :selected="selected"></MyTabbar>
	</view>
</template>

<script>
	import MyTabbar from '@/common/tabbar/my-tabbar.vue'
	export default {
		data(){
			return {
				selected: 4
			}
		},
		components: {
			MyTabbar
		}
	}
</script>

<style>
</style>