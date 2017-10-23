<template>
  <div>
    <div class='message'>
      <p class='message__text message__text--active'>{{msg}}</p>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'temp',
  data() {
    return {
      msg: 'PWR'
    }
  },
  computed: {
    ...mapState(['main'])
  },
  head: {
    title() {
      return {
        inner: this.title
      }
    }
  },
  methods: {
    ...mapActions(['GET_POSTS'])
  },
  mounted() {
    this.GET_POSTS()
  },
  watch: {
    $route(to, from) {}
  }
}
</script>

<style scoped lang='scss'>
@import '../style/helpers/_mixins.scss';
@import '../style/helpers/_responsive.scss';
@import '../style/_variables.scss';

.message {
  padding: 20px;
  background: blue;

  &__text {
    background: red;

    &--active {
      color: green;
    }
  }
}
</style>
