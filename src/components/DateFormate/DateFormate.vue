<template>
<div>
  <h1>时间格式转化</h1>
  <p class="fun-describe">描述：时间戳转化为年月日时分秒（如：<code>1538134798526</code>）==> <code>yy-MM-dd hh:mm:ss</code></p>
  <div class="show-formate">
    <w-button>获取当前时间戳</w-button>
  </div>
</div>
</template>

<script>
import {dateFormate} from '../../common/js/dateFormate'
import WButton from '../../Base/w-button/w-button'
export default {
  name: 'DateFormate',
  components: {
    WButton
  },
  filters: {
    timeFormate (time, fmt) {
      return dateFormate(time, fmt)
    }
  },
  data () {
    return {
    }
  },
  created () {
    console.log(11)
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
.show-formate
  text-align: left
  margin-top:10px
</style>
