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
    <el-menu-item v-else :index="item.name" :key="item.path" @click="getCurrentRouter(item)">
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
    getCurrentRouter (data) {
      this.$store.commit('setCurrentRouter', {router: data})
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
<style>
  .el-menu--collapse>.nav-menu>.el-menu-item span, .el-menu--collapse>.nav-menu>.el-submenu>.el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
</style>
