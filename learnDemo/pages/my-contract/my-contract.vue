<template>
	<view class="my-contract">
		<text>协议</text>
		<MyTabbar :selected="selected"></MyTabbar>
	</view>
</template>

<script>
	import MyTabbar from '@/common/tabbar/my-tabbar.vue'
	export default {
		data(){
			return {
				selected: 3
			}
		},
		components: {
			MyTabbar
		}
	}
</script>

<style>
</style>