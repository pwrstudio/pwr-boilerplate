<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'template',
  data () {
    return {
      msg: 'PWR'
    }
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
  },
  watch: {
    '$route' (to, from) {}
  }
}
</script>

<style scoped lang='scss'>
@import "../style/helpers/_mixins.scss";
@import "../style/helpers/_responsive.scss";
@import "../style/_variables.scss";
</style>
