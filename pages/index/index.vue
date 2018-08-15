<template>
	<view class="content">
		<view class="mask" v-show="showMask" @click="hide"></view>
		<view class="popup popup-top" v-show="showState.top">
			<text>顶部 popup</text>
		</view>
		<text class="title">{{title}}</text>
		<button type="primary" plain="true" @tap="createNewList">新的清单</button>
	</view>
</template>

<script>
	export default {
		data: {
			title: '',
			showState: {
				top: false
			},
			showMask: false,
			activePop: 'top'
		},
		methods:{
			createNewList: function (e) {
				uni.navigateTo({
					// url: '../checkpage/checkpage'
						url: 'checklist'	
				})
			},
			show() {
				this.showMask = true
				this.showState[this.activePop] = true
			},
			hide() {
				this.showMask = false
				this.showState[this.activePop] = false
			}
		}
	}
</script>

<style>
    @import '../../common/mine.css';
	
	
	.content {
		flex: 1;
		justify-content: center;
		align-items: center;
	}

	.title {
		font-size: 36px;
		color: #8f8f94;
	}
	
	.mask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .3);
	}

	.list-view-item {
		position: relative;
		padding: 22px 30px;
		overflow: hidden;
		font-size: 28px;
	}

	.list-view-item::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 30px;
		height: 2px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row .btn {
		margin: 20px;
	}

	.desc {
		padding: 10px 20px;
		font-size: 30px;
		line-height: 30px;
		margin-top: 150px;
		text-align: center;
	}	
</style>
