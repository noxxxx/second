<template>
	<view class="content">
		<text class="title">{{title}}</text>
		<button type="primary" plain="true">按钮</button>
	</view>
</template>

<script>
	export default {
		data: {
			title: 'HelloXX!'
		}
	}
</script>

<style>
	.content {
		flex: 1;
		justify-content: center;
		align-items: center;
	}

	.title {
		font-size: 36px;
		color: #8f8f94;
	}
</style>
