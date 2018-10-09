<template>
    <div class="file-upload">
    <!--  <input type="file" @change="uploadFile" accept="image/png">
      <img :src="url" alt="">-->
      <!--<iframe class="frame-container" src="https://fanyi.baidu.com/#en/zh/" frameborder="0"></iframe>-->
    </div>
</template>

<script>
export default {
  name: 'FileUpload',
  data () {
    return {
      url: ''
    }
  },
  methods: {
    uploadFile (e) {
      let _this = this
      let file = e.currentTarget.files
      console.log(file)

      var blob = new Blob(file, {type: 'image/png'})
      var read = new FileReader() // 创建读取器对象FileReader
      // read.readAsText(blob)// 开始读取文件
      read.readAsDataURL(blob)// 开始读取文件
      read.onload = function () { // 数据读完会触发onload事件
        console.log(read.result)// read有个result属性存放这结果，从result获取到数据
        _this.url = read.result
      }
      console.log(window.URL.createObjectURL(blob))
      console.log(111)
      console.log(window.URL.createObjectURL(file[0]))
      console.log(123456)
    }
  }
}
</script>

<style scoped lang="stylus">
.file-upload,.frame-container
  width:100%;
  height: 100%
</style>
