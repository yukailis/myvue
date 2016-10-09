<template>
  <header class="header">
    <a id="back" v-link="{path:'/personal'}"></a>
    <h1>我的订单</h1>
  </header>
  <ul v-changed>
    <li><a v-link="{path:'/dingdan/dall'}">全部</a></li>
    <li><a v-link="{path:'/dingdan/dlend'}">代付款</a></li>
    <li><a v-link="{path:'/dingdan/dgive'}">申请退款中</a></li>
  </ul>
  <div>
    <router-view></router-view>
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
  @import "../scss/dingdan.scss";
</style>
