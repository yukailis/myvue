<template>
  <header class="header">
    <a href="###" id="back"></a>
    <h1>景点</h1>
  </header>
   <ul v-events>
      <li><a v-link="{path:'/bplace/alls'}">全部</a></li>
      <li><a v-link="{path:'/bplace/theme'}">主题乐园</a></li>
      <li><a v-link="{path:'/bplace/alls'}">动物园&水族馆</a></li>
      <li><a v-link="{path:'/bplace/theme'}">特色景点</a></li>
    </ul>
  <main class="main">
    <router-view></router-view>
  </main>
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
  @import "../scss/bplace.scss";
</style>
