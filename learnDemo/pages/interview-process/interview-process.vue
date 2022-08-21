<template>
	<view class="interview-process">
		<text>面试流程</text>
		<MyTabbar :selected="selected"></MyTabbar>
		<form action="">
			<view class="manage-form">
				<!-- 姓名 -->
				<view class="manage-item" clear-line>
					<view class="item-title">姓名</view>
					<view class="item-main">
						<input type="text" name="name" placeholder="请输入姓名" value="" />
					</view>
				</view>
				<!-- 性别 -->
				<view class="manage-item">
					<view class="item-title">性别</view>
					<radio-group name="gender" class="item-main sex-item">
						<label>
							<radio value="0" color="#0066ff" />男士
						</label>
						<label>
							<radio value="1" color="0066ff" />女士
						</label>
					</radio-group>
				</view>
			</view>
			<view class="manage-btn">
				<button class="btn-sure" form-type="submit">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	import MyTabbar from '@/common/tabbar/my-tabbar.vue'
	export default {
		data(){
			return {
				selected: 2
			}
		},
		components: {
			MyTabbar
		}
	}
</script>

<style>
</style>