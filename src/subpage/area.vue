<template>
  <div class="container" v-render>
    <div class="mark"></div>
    <div class="content">
        <p class="search">
          <img src="../img/index/9.png"><input type="text" placeholder="搜索城市名称或拼音">
        </p>
        <p class="nows">
          北京<span>GPS定位</span>  
        </p>
        <h2>海外热门城市</h2>
        <ol>
          <li>北京</li>
          <li>上海</li>
          <li>南京</li>
          <li>辽宁</li>
          <li>大连</li>
          <li>安徽</li>
        </ol>
        <h3>全部城市</h3>
        <ul id="ul">    
        </ul>
         <p class="close"><a v-link="{path:'/shouye'}">X</a></p>
    
    </div>
   
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
  @import "../scss/area.scss";
</style>
