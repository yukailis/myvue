<template>
  <header class="header">
    <a id="back" v-link="{path:'/tuijian'}"></a>
    <h1>抢折扣</h1>
  </header>
  <main class="main">
      <p class="title">抢低价折扣</p>
      <img src="../img/dzprice/1.png" id="tit">
      <div class="dl">
      <a v-link="{path:'/details'}">
        <dl>
          <dt><img src="../img/dzprice/2.png"></dt>
          <dd>
            <p>[暑假特惠]上海直飞沙巴5-6天自行由（三、五星酒店任选，可选海景房）</p>
            <span>3.9折</span>
            <span>1899<i>元起</i></span>
          </dd>
        </dl>
        </a>
        <a v-link="{path:'/details'}">
        <dl>
          <dt><img src="../img/dzprice/2.png"></dt>
          <dd>
            <p>[暑假特惠]上海直飞沙巴5-6天自行由（三、五星酒店任选，可选海景房）</p>
            <span>3.9折</span>
            <span>1899<i>元起</i></span>
          </dd>
        </dl>
        </a>
        <a v-link="{path:'/details'}">
        <dl>
          <dt><img src="../img/dzprice/2.png"></dt>
          <dd>
            <p>[暑假特惠]上海直飞沙巴5-6天自行由（三、五星酒店任选，可选海景房）</p>
            <span>3.9折</span>
            <span>1899<i>元起</i></span>
          </dd>
        </dl>
        </a>
        <a v-link="{path:'/details'}">
        <dl>
          <dt><img src="../img/dzprice/2.png"></dt>
          <dd>
            <p>[暑假特惠]上海直飞沙巴5-6天自行由（三、五星酒店任选，可选海景房）</p>
            <span>3.9折</span>
            <span>1899<i>元起</i></span>
          </dd>
        </dl>
        </a>
      </div>
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
  @import "../scss/dzprice.scss";
</style>
