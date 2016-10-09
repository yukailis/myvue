<template>
  <div class="container">
    <div class="imgbox">
      <a id="person"></a>
      <a id="menu"></a>
      <img src="../img/my/3.png">
      <p class="circle"></p>
      <p class="p1">点击更多，体验更多</p>
      <p class="p2"><span>关注 0</span><span>粉丝 0</span></p>
    </div>
    <div class="box">
      <ul>
        <li><a href="###"><img src="../img/my/4.png">我的订单</a></li>
        <li><a href="###"><img src="../img/my/4.png">我的优惠劵</a></li>
        <li><a href="###"><img src="../img/my/4.png">离线浏览</a></li>
        </ul>
        <ul>
         <li><a href="###"><img src="../img/my/4.png">我的足迹</a></li>
        <li><a href="###"><img src="../img/my/4.png">我收藏目的地</a></li>
        <li><a href="###"><img src="../img/my/4.png">我的结伴</a></li>
      </ul>
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
      <img src="../img/index/footer4.png"><br>私人定制
    </a>
    <a v-link="{path:'/my'}">
      <img src="../img/index/footer7.png"><br>我的
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
  @import "../scss/my.scss";
</style>
