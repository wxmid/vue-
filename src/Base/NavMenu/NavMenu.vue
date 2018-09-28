<template>
  <div class="nav-menu">
    <template v-for="(item) in navMenus">
    <el-submenu v-if="item.children && item.children.length" :index="item.path" :key="item.name">
      <template slot="title">
        <i :class="item.meta.icon"></i>
        <span>{{item.meta.title}}</span>
      </template>
      <NavMenu :navMenus="item.children"></NavMenu>
    </el-submenu>
    <el-menu-item v-else :index="item.path" :key="item.name">
      <i :class="item.meta.icon"></i>
      <span slot="title">{{item.meta.title}}</span>
    </el-menu-item>
  </template>
  </div >
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['navMenus'],
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">

</style>
