<template>
  <div class="container">
      <header class="head">
        <p>
           <a v-link="{path:'/area'}">北京</a><span><img src="../img/index/8.png"></span>
        </p>
        <h1>推荐</h1>
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
      <p class="title">
        <img src="../img/index/17.png">低价折扣
        <a v-link="{path:'/dzprice'}">更多></a>
      </p>
      <div class="z" v-go>
        <ul>
          <li><img src="../img/tuijian/1.png"><p>带你去拔草帝都周边其妙角落</p><span>￥129</span></li>
         <li><img src="../img/tuijian/1.png"><p>带你去拔草帝都周边其妙角落</p><span>￥129</span></li>
         <li><img src="../img/tuijian/1.png"><p>带你去拔草帝都周边其妙角落</p><span>￥129</span></li>
         <li><img src="../img/tuijian/1.png"><p>带你去拔草帝都周边其妙角落</p><span>￥129</span></li>
        </ul>      
      </div>
      <p class="title">
        <img src="../img/index/17.png">精选主题
      </p>
      <div class="tx">
        <p><img src="../img/tuijian/2.png"></p>
        <p><img src="../img/tuijian/2.png"></p>
      </div>
      <div class="tx">
        <p><img src="../img/tuijian/2.png"></p>
        <p><img src="../img/tuijian/2.png"></p>
      </div>
  </div>
  <footer class="footer">
    <a v-link="{path:'/shouye'}">
      <img src="../img/index/footer2.png"><br>首页
    </a>
    <a v-link="{path:'/tuijian'}">
      <img src="../img/index/footer5.png"><br>推荐
    </a>
    <a v-link="{path:'/personal'}">
      <img src="../img/index/footer4.png"><br>私人定制
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
  @import "../scss/tuijian.scss";
   @import "../..//node_modules/swiper/dist/css/swiper.css"
</style>
