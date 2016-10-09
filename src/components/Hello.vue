<template>
  <div class="container" v-wipes>
      <img src="../img/index/1.png" class="img1"  v-hides>
      <ul>
        <li><img src="../img/index/4.png"></li>
        <li><img src="../img/index/5.png"></li>
        <li><img src="../img/index/6.png"><a id="go" v-link="{path:'/shouye'}">立即体验</a></li>
      </ul>
      <ol>
        <li></li>
        <li></li>
        <li></li>
      </ol>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../scss/index.scss"
</style>
