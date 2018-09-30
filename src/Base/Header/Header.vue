<template>
    <div class="header">
      <img src="/static/logo1.jpg" alt="" class="e-logo">
      <span class="collapse-btn" @click="Collapse"><i class="el-icon-menu"></i></span>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
    Collapse () {
      this.$store.commit('changeCollapse')
    }
  }
}
</script>

<style scoped lang="stylus">
.header
  height: 60px
  background: #800303
  border-bottom:2px solid #3b8502;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  text-align: left;
  padding:0 10px;
  line-height: 60px;
  .collapse-btn
    font-size: 46px;
    color: #000;
    line-height: 60px;
    padding: 6px 10px;
    vertical-align: middle;
  .e-logo
    width: 50px
    height: 50px
    -webkit-border-radius: 50%
    -moz-border-radius: 50%
    border-radius: 50%
    vertical-align: middle;
    float: right;
    padding: 4px 0;
</style>
