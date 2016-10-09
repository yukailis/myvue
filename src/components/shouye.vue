<template>
<!-- <audio autoplay>
  <source src="http://localhost:8066/low.mp3"></source>
</audio> -->
  <div class="container">
      <div class="head">
      <p>
        <a v-link="{path:'/area'}">北京</a><span><img src="../img/index/8.png"></span>
      </p>
      <p>
        <a href="###" id="search"><img src="../img/index/9.png"></a>
        <input type="text" placeholder="搜索国家、城市、景点等" v-letgo>
      </p>
      </div>
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
    <!-- 导航按钮 -->
    <!--   <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    <!-- 滚动条  -->
    <div class="swiper-scrollbar"></div>
  </div>
      <div class="dl">
        <a v-link="{path:'/bplace/alls'}">
            <dl>
              <dt><img src="../img/index/13.png"></dt>
              <dd>景点</dd>
            </dl>
        </a>
        <a v-link="{path:'/oneday'}">
            <dl>
              <dt><img src="../img/index/14.png"></dt>
              <dd>一日/半日游</dd>
            </dl>
        </a>
        <a href="###">
            <dl>
              <dt><img src="../img/index/15.png"></dt>
              <dd>特价活动</dd>
            </dl>
        </a>
        <a href="###">
          <dl>
            <dt><img src="../img/index/16.png"></dt>
            <dd>购物</dd>
          </dl>
        </a>
      </div>
      <p class="title">
        <img src="../img/index/17.png">热门国家
        <a href="###">更多></a>
      </p>
      <scroller lock-y>
        <div class="z">
          <ul>
            <li><img src="../img/index/18.png"></li>
            <li><img src="../img/index/18.png"></li>
          </ul>  
        </div> 
      </scroller>
       <p class="title">
        <img src="../img/index/17.png">精彩专题
      </p>
      <div class="xg" v-showhide>
         <p class="showhide">
           <img src="../img/index/19.png">
         </p>
         <p class="showhide">
          <img src="../img/index/20.png">
         </p>
         <p class="showhide">
           <img src="../img/index/21.png">
         </p>
         <p class="showhide">
           <img src="../img/index/19.png">
         </p>
         <p class="showhide">
           <img src="../img/index/21.png">
         </p>
         <div class="look">
            <span>查看全部</span><br><img src="../img/index/22.png">
         </div>
      </div>
  </div>
  <footer class="footer">
    <a v-link="{path:'/shouye'}">
      <img src="../img/index/footer1.png"><br>首页
    </a>
    <a v-link="{path:'/tuijian'}">
      <img src="../img/index/footer6.png"><br>推荐
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
  @import "../scss/shouye.scss";
  @import "../../node_modules/swiper/dist/css/swiper.css";
</style>
