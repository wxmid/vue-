<template>
    <div>
        <div class="file-formate"><h1>13123</h1></div>
        <img v-image-preview class="img-view" src="https://cdn.wanwudezhi.com/seller-admin/image/MTU1MTI0MTYwMDMzNA==.jpg?imageslim" alt="">
    </div>
</template>

<script>
// import {ChinaAddressV4Data} from 'vux'
export default {
    name: 'FileFormateLimited',
    data() {
        return {}
    },
    created() {
        debugger
        // console.log(ChinaAddressV4Data)
        // this.macroTask()
        // this.pro()
        // this.meal()
        // this.failMeal()
        // this.allProm()
        this.tomeOut()
    },
    methods: {
        microTask() {},
        macroTask() {
            debugger
            setTimeout(function () {
                console.log('1')
            })
            new Promise(function (resolve) {
                console.log('2')
                resolve()
            }).then(function () {
                console.log('3')
            })
            console.log('4')
        },
        pro() {
            debugger
            function fetch(callback) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        // resolve('请求成功')
                        reject('请求失败')
                    }, 2000)
                })
            }
            fetch().then(
                (data,data1) => {
                    console.log('请求处理');
                    console.log(data);
                }/*,
                function(reason, data){
                    console.log('触发异常');
                    console.log(reason);
                }*/
            ).catch((error) => {
                console.log(error);
            })
        },
        meal() {
            debugger
            let cook = () => {
                console.log('开始做饭。');
                let p = new Promise(resolve => {
                    setTimeout(() => {
                        console.log('做饭完毕！');
                        resolve('鸡蛋炒饭');
                    }, 1000);
                })
                return p
            }
            let eat = (data) => {
                console.log('开始吃饭：' + data);
                let p = new Promise(resolve => {
                    setTimeout(() => {
                        console.log('吃饭完毕!');
                        resolve('一块碗和一双筷子');
                    })
                })
                return p
            }
            let wash = (data) => {
                console.log('开始洗碗：' + data);
                let p = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log('洗碗完毕!');
                        resolve('干净的碗筷');
                    }, 2000);
                })
                return p
            }
            cook()
                .then(eat)
                .then(wash)
                .then(res => {
                console.log(res)
            })
        },
        failMeal() {
            debugger
            //做饭
            function cook(){
                console.log('开始做饭。');
                var p = new Promise(function(resolve, reject){        //做一些异步操作
                    setTimeout(function(){
                        console.log('做饭成功！');
                        resolve('烧焦的米饭');
                        // console.log('做饭失败！');
                        // reject('烧焦的米饭');
                    }, 1000);
                });
                return p;
            }

            //吃饭
            function eat(data){
                console.log('开始吃饭：' + data);
                var p = new Promise(function(resolve, reject){        //做一些异步操作
                    setTimeout(function(){
                        console.log('吃饭完毕!');
                        resolve('一块碗和一双筷子');
                    }, 2000);
                });
                return p;
            }
            let a = ''
            cook()
                .then(function () {
                    // throw new Error('fail error ~')
                    return a()
                })
                .catch(TypeError, function(e) {
                    debugger
                    console.log('1!');
                    //If a is defined, will end up here because
                    //it is a type error to reference property of undefined
                }).catch(ReferenceError, function(e) {
                    debugger
                    console.log('2!');
                //Will end up here if a wasn't defined at all
                }).catch(function(e) {
                    debugger
                    console.log('3!');
                //Generic catch-the rest, error wasn't TypeError nor
                    //ReferenceError
                });
        },
        allProm() {
            //切菜
            function cutUp(){
                console.log('开始切菜。');
                var p = new Promise(function(resolve, reject){        //做一些异步操作
                    setTimeout(function(){
                        console.log('切菜完毕！');
                        resolve('切好的菜');
                    }, 1000);
                });
                return p;
            }

//烧水
            function boil(){
                console.log('开始烧水。');
                var p = new Promise(function(resolve, reject){        //做一些异步操作
                    setTimeout(function(){
                        console.log('烧水完毕！');
                        resolve('烧好的水');
                    }, 3000);
                });
                return p;
            }
            // Promise.all([boil(), cutUp()])
            //     .then(res => {
            //         console.log(res)
            //         debugger
            //     })
            Promise.race([boil(), cutUp()])
                .then(res => {
                    console.log(res)
                })
        },
        tomeOut() {
            //请求某个图片资源
            function requestImg(){
                var p = new Promise(function(resolve, reject){
                    var img = new Image();
                    img.onload = function(){
                        resolve(img);
                    }
                    img.src = 'http://seller.wanwudezhi.com/static/img/Login_logo.09c77b22.png';
                });
                return p;
            }

//延时函数，用于给请求计时
            function timeout(){
                var p = new Promise(function(resolve, reject){
                    setTimeout(function(){
                        reject('图片请求超时');
                    }, 5000);
                });
                return p;
            }

            Promise
                .race([requestImg(), timeout()])
                .then(function(results){
                    console.log(results);
                })
                .catch(function(reason){
                    console.log(reason);
                });
        }
    }
}
</script>

<style scoped>
.img-view {
    width: 200px;
}
</style>
