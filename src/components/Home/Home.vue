<template>
  <div class="home">
    <v-header></v-header>
    <div class="container">
      <div class="sidebar">
        <nav-menu></nav-menu>
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
export default {
  name: 'Home',
  components: {
    NavMenu,
    'v-header': Header
  },
  data () {
    return {
      msg: ''
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
    .content
      width: 100%;
</style>
