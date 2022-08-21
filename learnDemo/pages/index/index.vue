<template>
	<view class="home">
		<view class="home-container">
			<view class="home-header">
				<view class="home-title" @tap="goNext">learn-demo</view>
			</view>
			<scroll-view scroll-y="true" :style="'height: ' + clientHeight + 'px;'">
				<view class="home-content" :style="'height: ' + clientHeight + 'px;'">
					<HomeCommodity></HomeCommodity>
				</view>
			</scroll-view>
		</view>
		<MyTabbar :selected="selected"></MyTabbar>
	</view>
</template>

<script>
	import MyTabbar from '@/common/tabbar/my-tabbar.vue'
	import HomeCommodity from '../../component/index/HomeCommodity.vue'
	export default {
		data() {
			return {
				title: 'Hello Animus',
				// 通过传递一个属性来更改选择状态
				selected: 0,
				clientHeight:null
			}
		},
		onLoad() {

		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					// uni的api，获取header元素
					let headerInfo = uni.createSelectorQuery().in(this).select('.home-header')
					// 添加节点信息查询请求
					headerInfo.boundingClientRect((data) => {
						// 显示区域 = 系统的窗口高度 - 头部信息高度 - tab栏高度68
						this.clientHeight = res.windowHeight - data.height - 68;
					})
				}
			})
		},
		methods: {
			// uniapp中 @tap是手指触摸离开时触发、@click是点击时触发，有300ms延迟
			// 编译时 @click转换成@tap
			goNext(){
				uni.navigateTo({
					url:'../../show-contract/show-contract';
				})
			}
		},
		components: {
			MyTabbar
		}
	}
</script>

<style>
	/* 隐藏滚动条
	   标签选择器优先级低、使用 !important 提高优先级
	 */
	scroll-view ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}
	.home-container {
		width: 100%;
		height: 100%;
		margin-right: -7px;
	}
</style>
