<template>
	<view class="headers">
		<view class="nav_top">
			<view class="status-bar"></view>
			<view class="topContent">
				<view class="goBack" @tap="goBack">
					<slot name="left">
						 <image src="../../static/logo.png"></image> 
					</slot>
				</view>
				<view class="title">
					<slot name="center">
						<view>{{ title }}</view>
					</slot>
				</view>
				
			</view>
		</view>
		<view class="marginBox"></view>
	</view>
</template>

<script>
	export default{
		props: {
			title: {
				type: String,
				default: ''
			}
		},
		methods: {
			goBack(){
				uni.navigateBack({
					delta: 1;
				})
			}
		}
	}
</script>

<style scoped>
	.nav_top {
		width: 100vw;
		height: 115rpx;
		background-color: white;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.status-bar {
		height: 54px;
	}
	.topContent {
		width: 100vw;
		height: 100rpx;
		display: flex;
		align-items: center;
	}
	.goBack {
		width: 90rpx;
		height: 43rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
		position: relative;
	}
	.goBack image {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>