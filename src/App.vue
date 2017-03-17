<template>
  <div id="app">
    <template></template>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import template from './components/template'

export default {
  name: 'app',
  components: {
    template
  },
  computed: {
    ...mapState([
      'main'
    ])
  },
  head: {
    title () {
      return {
        inner: this.title
      }
    }
  },
  methods: {
    ...mapActions(['GET_POSTS'])
  },
  mounted () {
    this.GET_POSTS()
    this.$router.beforeEach((to, from, next) => {
      if (from.name === 'xxx') {}
      next()
    })
  },
  watch: {
    '$route' (to, from) {}
  }
}
</script>

<style lang='scss'>
@import "./style/helpers/_mixins.scss";
@import "./style/helpers/_responsive.scss";
@import "./style/_variables.scss";

#app {
  font-family: $sans-serif-stack;
  font-size: $font-size;
  line-height: $line-height;
  color: $black;
  background: $white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
