<template>
    <div class="lazy-load" ref="lazy">
        <img ref="lazyImg" class="lazy-img" v-for="item in currentList" :key="item" :data-url="item" alt="">
    </div>
</template>

<script>
// import { scroll, lazyLoad } from "../../common/js/utils";
import { scroll, lazyLoad } from "w-lazyload";

export default {
    name: "index",
    data() {
        return {
            list: [
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTI0OTQ3MjI3Mw==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTA2MTMzOTQwNA==.png?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1Nzg5MDQ1MTA5NzU3MDAxOQ==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTE3NzQxNTE5Ng==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTE4MDk5NjY0Ng==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTE4MDM1MzM1MQ==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTI0NjE4MzI0Mg==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTI0NTg1NzM2OQ==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTE4MDczNTUxMw==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTAxNzExMjIyNQ==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTI0MTYwMDMzNA==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTMyNTUwMzcyNw==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTMzNDM0NzkxOQ==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTMzNTA3NjUxMA==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTMzNTc4MzA4MA==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTE4MDM3NTkyOA==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTQzMDMwMjM4Mw==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTE3MzA5MjAzOA==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTE0OTQ0MjAyOA==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1NDc3ODkwMDY1NA==.jpg?imageslim',
                'https://cdn.wanwudezhi.com//seller-admin/image/MTU1MTI0NjU2MzIwMw==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/mall-portal/image/294884_MTU1NDk4MjQ5MDQxMg==_690_1200.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTUxMjU0NTc4Mg==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTQzNDc5MTIwMA==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTE4MTYwODA1NQ==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTQzNTA2MTI1MA==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTIzMDQxMzU5Nw==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTIzNDQyMzA1Nw==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTUwMjg4MzIxOA==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MjY0NTg1OTE1Nw==.png?imageslim',
                'https://cdn.wanwudezhi.com//seller-admin/image/MTU1MTE4MDEzMjMwMg==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTU4NTY0MTQ4MQ==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTU4NDk5MzYzMw==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTU4NDM4Mzg5Mg==.jpg?imageslim',
                // 'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTU4NDM4Mzg5Mg==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTU4MzQxMzIzMQ==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTUyMDM0Nzg5MQ==.png?imageslim',
                'https://cdn.wanwudezhi.com//seller-admin/image/MTU1MTUwMzI5NTMzNA==.png?imageslim',
                'https://cdn.wanwudezhi.com//seller-admin/image/MTU1MTUwNTUyNjg3MQ==.png?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTUwNDIwMDE2Mw==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTQ1MTkwMTQ5NA==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTQ1MTIzMzE2MQ==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTQ0OTYzNTU1Mg==.jpg?imageslim',
                'https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTQ0Nzk2NTM5MA==.jpg?imageslim'
            ],
            // pageIndex: 1,
            pageSize: 8,
            currentList: []
        }
    },
    created () {
        //初始化
        this.currentList = this.list.splice(0,this.pageSize)
        // 内存泄漏
        function leak(arg) {
            this.arg = arg;
        }

        function test() {
            var l1= new leak('It is a leak');

            function l() {
                console.info('Here you are!')
                l1.arg = 'Here you are!'
                document.body.removeEventListener('click', l);
            }

            document.body.addEventListener('click', l)
        }

        test();
    },
    mounted () {
        window.onload = function outerFunction() {
            var obj1= document.getElementById("app");
            // var id = obj1.id;//将obj副本保存于变量id中，则不会使obj元素处理程序的闭包创建循环引用
            obj1.onclick = function innerfunction(){
                // console.log(id);
                console.log(obj1.id);
            }
            // obj1 = null;//手动断开 obj 对 document.getElemengById("element")的引用
        }
        // 滚动加载 this.$refs.lazy
        scroll(window, 60, 'bottom', (result => {
            if(this.list.length) {
                this.currentList = [...this.currentList, ...this.list.splice(0,this.pageSize)]
            }
        }))
        lazyLoad(window, 200)
    },
    methods: {}
}
</script>

<style scoped>
.lazy-load {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /*height: 500px;*/
    /*overflow: scroll;*/
}
.lazy-img {
    width: 180px;
    height: 180px;
    margin-bottom: 20px;
    outline-style: none;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
}
/*img[src=""],img:not([src]){border:0;}*/
::-webkit-scrollbar {
    /*display: none;*/
}
</style>
