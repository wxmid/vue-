<template>
    <button class="w-btn" @click="handleClick"><slot></slot></button>
</template>

<script>
export default {
  name: 'w-button',
  data () {
    return {
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="stylus">
.w-btn
  padding: 12px 20px;
  font-size: 14px;
  color: #fff;
  background: #58bdff;
  border:none;
  -webkit-border-radius: 5px
  -moz-border-radius: 5px
  border-radius: 5px
  outline none
  line-height: 1;
.w-btn:active
  background: #4aa0d8;
</style>
