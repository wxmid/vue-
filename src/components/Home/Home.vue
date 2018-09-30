<template>
  <div class="home">
    <v-header></v-header>
    <div class="container">
      <div class="sidebar">
        <!--<el-row>-->
          <!--<el-col :span="24">-->
            <el-menu
              :default-active="onRoutes"
              class="el-menu-vertical-demo"
              :collapse="isCollapse"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              unique-opened router>
              <nav-menu :navMenus="menus"></nav-menu>
            </el-menu>
          <!--</el-col>-->
        <!--</el-row>-->
      </div>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../Base/Header/Header'
import NavMenu from '../../Base/NavMenu/NavMenu'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    NavMenu,
    'v-header': Header
  },
  data () {
    return {
      menus: []
    }
  },
  computed: mapState({
    isCollapse: state => state.isCollapse,
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  }),
  created () {
    this.menus = this.$router.options.routes[1].children
    console.log(this.menus)
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.home
  height: 100%;
  .sidebar
    display: inline-block
    height:100%;
    background: #545c64;
  .container
    display: flex;
    justify-content: space-between;
    height:calc(100% - 60px);
    .el-menu-vertical-demo
      border:none;
      text-align: left;
    .el-menu-vertical-demo:not(.el-menu--collapse)
      width: 240px;
    .content
      width: 100%;
      padding:20px;
</style>
<style lang="stylus">
  h1,h2,h3,h4,h5,h6,p
    margin:0;
    padding:0;
  .fun-describe
    text-align: left
    margin:10px 0;
  .code-green
    color: #63e002
  .bold
    font-weight:bold
</style>
