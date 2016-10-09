<template>
  <div class="container">
      <header class="head">
        <a id="back" v-link="{path:'/dzprice'}"></a>
        <h1>折扣详情</h1>
        <a href="###" id="love"></a>
      </header>
      <img src="../img/detail/1.png" id="tit">
      <div class="tells">
        <h4>马尔代夫6-7天含机票</h4>
        <span>11897人</span><span>浏览</span><span>96 已售</span><span><i>2999</i>元起</span>
      </div>
      <div class="line"></div>
      <p class="bt">
        <img src="../img/detail/2.png">
        <span>产品简介</span>
      </p>
      <ul>
        <li>出发地：纽约、香港、澳门、重庆、北京</li>
        <li>目的地：马累，马尔代夫</li>
        <li>旅行时间：2015年11月14日至2016年10月01日</li>
        <li>折扣君找亮点</li>
      </ul>
      <div class="bgbox">
        <p class="bg">
          直飞航班：多地直飞马尔代夫，一站直达，累
        </p>
        <p class="bg">
          说走就走，马尔代夫为免签海岛，只需要带上护照
        </p>
        <p class="bg">
          行程自由：单机票类产品，自由选择中意
        </p>
      </div>
      <div class="line1"></div>
      <p class="bt">
        <img src="../img/detail/2.png">
        <span>费用说明</span>
      </p>
      <h6>价格包含</h6>
      <ol>
        <li>1.香港/上海/北京直飞冲绳往返含税机票,托运行李费用(每件不超过20KG，具体以航司规定为准)</li>
        <li>2.全程4/3晚酒店住宿(含早以套餐标注为准)</li>
        <li>3.机场至酒店接送机以套餐标注为准</li>
        <li>4.自由行成品全国销售,变化较大,要实时查询,下单前请先咨询</li>
      </ol>
  </div>
  <footer class="footer"> 
      <p>电话预定</p>
      <p>立即购买</p>
  </footer>
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
  @import "../scss/details.scss";
</style>
