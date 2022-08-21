<template>
	<view>
		<view class="show-contract" @tap="goback">
			点此返回
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(){
			// 初始化页面 请求数据 
			this._init();
		},
		methods: {
			async _init(){
				
			},
			goback(){
				// 关闭当前页面，返回上一页
				uni.navigateBack({
					// 返回的页面数，如果 delta 大于现有页面数，则返回到首页
					delta: 1
				})
			}
		}
	}
</script>

<style>
</style>