<template>
<div>
  <h1>时间格式转化</h1>
  <p class="fun-describe">描述：时间戳转化为“年”、“月”、“日”、“时”、“分”、“秒”中的一个或多个组合（如：<code>1538273363320</code>）==> <code>2018-09-30 10:09:23</code> 或 <code>2018-09-30</code> 或 <code>10:09:23</code></p>
  <div class="demo-block">
    <div class="show-formate">
      <w-button @click="getCurrentTime">获取当前时间戳</w-button>
      <label style="margin-left: 20px;">选择时间格式：</label>
      <el-select v-model="timefmt" placeholder="请选择">
        <el-option
          v-for="item in formates"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </div>
    <div class="demo-exhibition">
      <span class="bold">当前时间戳：</span><span class="code-green">{{timeStamp}}</span> <i class="el-icon-d-arrow-right"></i> <span class="code-green">{{timeStamp,timefmt | timeFormate}}</span>
    </div>
    <div class="code-block">
      <code>
        function formatDate (time, fmt) {
        let date = new Date(time)
        if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
        }
        for (let k in o) {
        let str = o[k] + ''
        if (new RegExp(`(${k})`).test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
        }
        return fmt
        };
        function padLeftZero (str) {
        return ('00' + str).substr(str.length)
        }
      </code>
    </div>
  </div>
</div>
</template>

<script>
import {formatDate} from '../../common/js/dateFormate.js'
import WButton from '../../Base/w-button/w-button'
export default {
  name: 'DateFormate',
  components: {
    WButton
  },
  data () {
    return {
      timeStamp: (new Date()).getTime(),
      timefmt: 'yyyy-MM-dd hh:mm:ss',
      formates: ['yyyy-MM-dd hh:mm:ss', 'yyyy/MM/dd hh:mm:ss', 'yyyy年MM月dd日 hh:mm:ss', 'yyyy年MM月dd日 hh时mm分ss秒', 'yyyy-MM-dd', 'yyyy/MM/dd', 'yyyy年MM月dd日', 'hh:mm:ss', 'hh时mm分ss秒']
    }
  },
  filters: {
    timeFormate (time, fmt) {
      return formatDate(time, fmt)
    }
  },
  created () {
    console.log(11)
  },
  methods: {
    getCurrentTime () {
      this.timeStamp = (new Date()).getTime()
    }
  }
}
</script>

<style scoped lang="stylus">
.show-formate
  text-align: left
  /*min-width:550px*/
.demo-block
  margin-top:10px
  text-align: left
  .demo-exhibition
    margin-top:10px
</style>
