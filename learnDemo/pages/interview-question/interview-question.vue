<template>
	<view class="interview-question">
		<text>面试题</text>
		<MyTabbar :selected="selected"></MyTabbar>
	</view>
</template>

<script>
	import MyTabbar from '@/common/tabbar/my-tabbar.vue'
	export default {
		data(){
			return {
				selected: 1
			}
		},
		components: {
			MyTabbar
		}
	}
</script>

<style>
</style>