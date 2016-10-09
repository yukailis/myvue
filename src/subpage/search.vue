<template>
    <div class="container">
      <div class="header">
        <p>
          <img src="../img/search/2.png">
          <input type="text" placeholder="搜索目的地">
        </p>
        <a v-link="{path:'/shouye'}">取消</a>
      </div>
      <p class="p">
        <img src="../img/search/3.png"><span>当前位置</span>
      </p>
      <p class="p">
        <img src="../img/search/4.png"><span>假设我在</span>
      </p>
      <h3>热门搜索</h3>
      <ul>
        <li>韩国</li>
        <li>马尔代夫</li>
        <li>金字塔</li>
        <li>纽约</li>
        <li>首尔</li>
        <li>澳大利亚</li>
        <li>港澳</li>
        <li>台湾</li>
        <li>丹麦</li>
      </ul>
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
  @import "../scss/search.scss";
</style>
