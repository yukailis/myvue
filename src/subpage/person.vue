<template>
  <div class="container">
      <header class="head">
        <h1>私人定制</h1>
        <a href="###" id="near">附近</a>
      </header>
       <div class="swiper-container" v-swipe>
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="../img/index/7.png"></div>
              <div class="swiper-slide"><img src="../img/index/7.png"></div>
              <div class="swiper-slide"><img src="../img/index/7.png"></div>
              <div class="swiper-slide"><img src="../img/index/7.png"></div>
              <div class="swiper-slide"><img src="../img/index/7.png"></div>
              <div class="swiper-slide"><img src="../img/index/7.png"></div>
            </div>
            <!--分页器-->
            <div class="swiper-pagination"></div>
            <div class="swiper-scrollbar"></div>
      </div>
      <div class="box">
          <p>定制一套属于自己的私人计划吧！</p>
      </div>
       <div class="dl">
          <a>
            <dl>
              <dt><img src="../img/index/13.png"></dt>
              <dd>当地交通</dd>
            </dl>
          </a>
          <a>
            <dl>
              <dt><img src="../img/index/14.png"></dt>
              <dd>租车</dd>
            </dl>
          </a>
          <a v-link="{path:'/dingdan/dall'}">
            <dl>
              <dt><img src="../img/index/15.png"></dt>
              <dd>我的订单</dd>
            </dl>
          </a>
          <a href="###">
          <dl>
            <dt><img src="../img/index/16.png"></dt>
            <dd>私人定制</dd>
          </dl>
          </a>
      </div>
      <h6>当季精选</h6>
      <div class="img">
         <p>
           <img src="../img/person/1.png">
         </p>
         <p>
           <img src="../img/person/2.png">
           <img src="../img/person/2.png">
         </p>
      </div>
  </div>
  <footer class="footer">
    <a v-link="{path:'/shouye'}">
      <img src="../img/index/footer2.png"><br>首页
    </a>
    <a v-link="{path:'/tuijian'}">
      <img src="../img/index/footer6.png"><br>推荐
    </a>
    <a v-link="{path:'/personal'}">
      <img src="../img/index/footer3.png"><br>私人定制
    </a>
    <a v-link="{path:'/my'}">
      <img src="../img/index/footer8.png"><br>我的
    </a>
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
  @import "../scss/personal.scss";
   @import "../..//node_modules/swiper/dist/css/swiper.css"
</style>
