<template>
  <div class="demo3">
    <h3>{{msg}}</h3>
    <p>
      <a href="https://a6987985.github.io/website/css_trasform3D/transform.html" target="_blank" >
        <el-button>新窗口打开</el-button></a>
    </p>
    <iframe src="https://a6987985.github.io/website/css_trasform3D/transform.html" width="900px" height="690px" frameborder="no"></iframe>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'CSS 3D轮播图'

      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .demo1{
    text-align: center;
    max-width: 1500px;
    margin:0 auto;

  }
  button:hover {
    cursor: pointer;
  }
</style>
