<template>
	<view class="tabbar">
		<view class="tabbar-list">
			<view class="tabbar-list-ul">
				
				<view class="tabbar-list-li" v-for="(item, index) in tabBar.list" :key='index' @click="setSelected(index)">
					<view class="tabbar-list-li-icon">
						<image :src="selected == index ? item.selectIconPath : item.iconPath"></image>
					</view>
					<view :class="selected == index ? 'tabbar-list-li-name active' : 'tabbar-list-li-name'">{{ item.text }}</view>
				</view>
		
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['selected'],
		data(){
			return{
				tabBar: {
					list: [{
						pagePath: '/pages/index/index',
						iconPath: '/static/tabbar/home.jpg',
						selectIconPath: '/static/tabbar/home_choose.jpg',
						text: '首页'
					},{ 
						pagePath: '/pages/interview-question/interview-question',
						iconPath: '/static/tabbar/home.jpg',
						selectIconPath: '/static/tabbar/home_choose.jpg',
						text: '试题'
					},{
						pagePath: '/pages/interview-process/interview-process',
						iconPath: '/static/tabbar/home.jpg',
						selectIconPath: '/static/tabbar/home_choose.jpg',
						text: '流程'
					},{
						pagePath: '/pages/my-contract/my-contract',
						iconPath: '/static/tabbar/home.jpg',
						selectIconPath: '/static/tabbar/home_choose.jpg',
						text: '协议'
					},{
						pagePath: '/pages/my-card/my-card',
						iconPath: '/static/tabbar/home.jpg',
						selectIconPath: '/static/tabbar/home_choose.jpg',
						text: '我的'
					}]
				}
			}
		},
		methods: {
			setSelected(index){
				uni.switchTab({
					url: this.tabBar.list[index].pagePath
				})
			}
		}
	}
	
</script>

<style scoped>
	.tabbar {
		width: 100%;
		/* 固定定位 */
		position: fixed;
		box-sizing: border-box;
	}
	/* 低栏 */
	.tabbar-list {
		width: 100%;
		color: #344356;
		background: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: 0;
		box-shadow: 0px -12px 37px 0px rgba(230, 235, 243, 0.9);
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		box-sizing: border-box;
	}
	.tabbar-list-ul {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		box-sizing: border-box;
	}
	.tabbar-list-li-icon {
		width: 56rpx;
		height: 56rpx;
		margin: 0;
		padding: 20rpx 0;
	}
	.tabbar-list-li-icon image {
		width: 56rpx;
		height: 56rpx;
		display: flex;
		justify-content: space-around;
	}
	.tabbar-list-li-name {
		width: 100%;
		height:40rpx;
		text-align: center;
		line-height: 40rpx;
		font-size: 28rpx;
		font-family: Microsoft Yahei;
	}
	.active {
		color: #5468ff;
	}
</style>