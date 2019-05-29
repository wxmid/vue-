<template>
  <!--<iframe v-if="currentRouter.meta.iframe" :src="currentRouter.path" frameborder="0" class="iframe"></iframe>-->
  <router-view></router-view>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Container',
  data () {
    return {}
  },
  computed:mapState({
      currentRouter: state => state.currentRouter
    }),
  created () {
    let currentRouter = this.$route
    console.log(this.$store.state.currentRouter)
  },
  methods: {}
}
</script>

<style scoped>
.iframe {
  width: 100%;
  height: 100%;
}
</style>
