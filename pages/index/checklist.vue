<template>
    <view class="content">
        <view class="mask" v-show="showMask" @click="hide"></view>
        <view class="popup popup-top" v-show="showState.top">
            <text>顶部 popup</text>
        </view>

        <view class="uni-list">
            <view class="uni-list-cell-divider">
                右侧带数字角标
            </view>
            <view class="uni-list-cell" hover-class="uni-list-cell-hover">
                <view class="uni-list-cell-navigate">
                    Item2
                    <text class="uni-badge uni-badge-danger">23</text>
                </view>
            </view>
            <view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
                <view class="uni-list-cell-navigate">
                    Item1
                    <text class="uni-badge uni-badge-success">123</text>
                </view>
            </view>
        </view>
        <view class="uni-list-cell uni-collapse">
            <view class="uni-list-cell-navigate uni-navigate-bottom" hover-class="uni-list-cell-hover" :class="list.open ? 'uni-active' : ''"
                @click="trigerCollapse(index)">
                {{list.name}}
            </view>
            <view class="uni-list uni-collapse" :class="list.open ? 'uni-active' : ''">
                <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,key) in list.pages" :key="key" :url="item.url"
                    @click="goDetailPage(item.url)">
                    <view class="uni-list-cell-navigate uni-navigate-right"> {{item.name}} </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data: {
            showState: {
                top: false
            },
            showMask: false,
            activePop: 'top',
            lists: {
                id: 'page',
                name: '界面',
                open: false,
                pages: [{
                    name: '设置界面标题',
                    url: 'addnewitem'
                }, {
                    name: '标题栏加载动画',
                    url: 'addnewitem'
                }]
            }
        },
        methods: {
            createNewList: function (e) {
                uni.navigateTo({
                    url: 'pages/checkpage/chackpage'
                })
            },
			trigerCollapse(e) {
				for (let i = 0, len = this.lists.length; i < len; ++i) {
					if (e === i) {
						this.lists[i].open = !this.lists[i].open;
					} else {
						this.lists[i].open = false;
					}
				}
			},
			goDetailPage(e) {
				let url = ~e.indexOf('platform') ? e : '/pages/API/' + e + '/' + e;
				uni.navigateTo({
					url: url
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
    @import '../../common/uni.css';
    @import '../../common/mine.css';

    .content {
        flex: 1;
        justify-content: center;
        /* align-items: center; */
        padding-top: 0px;
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
</style>
