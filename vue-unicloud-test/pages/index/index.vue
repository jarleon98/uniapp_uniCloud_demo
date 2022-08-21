<template>
	<view class="content">
		<input type="text" class="input" v-model="content" placeholder="请输入">
    <button type="primary" @tap="publish" size="mini">发布</button>
	</view>
  <view v-for="item in list" :key="item._id">
    <view class="box">
      <view>{{ item.content }}</view>
    </view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				content: '',
        list: []
			}
		},
		onLoad() {
      uniCloud.callFunction({
        name: 'fun',
        data: {
          api: 'getMessages',
        }
      }).then(res => {
        this.list = res.result.data
      })
		},
		methods: {
      publish(){
        uniCloud.callFunction({
          name: 'fun',
          data: {
            api: 'publish',
            content: this.content
          }
        }).then(res => {
          console.log(res);
          this.list.push({
            _id: res.result.id,
            content: this.content
          })
          this.content = ''
        })
      }
		}
	}
</script>

<style>
	.content {
		display: flex;
		align-items: center;
		margin: 40rpx;
	}

  .input {
    border-bottom: 1px solid #ccc;
    padding: 6rpx;
    flex: 1;
  }
  .box {
    margin: 40rpx;
    border-bottom: 1px solid #ccc;
    padding: 20rpx;
  }
</style>
