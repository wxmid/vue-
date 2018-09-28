<template>
    <button class="w-btn"></button>
</template>

<script>
export default {
  name: 'w-button'
}
</script>

<style scoped lang="stylus">
.w-btn
  min-width:80px;
  min-height:40px;
  line-height: 40px;
  color: #fff;
  background: #58bdff;
  border:none;
  -webkit-border-radius: 5px
  -moz-border-radius: 5px
  border-radius: 5px
  outline none
.w-btn:active
  background: #4aa0d8;
</style>
