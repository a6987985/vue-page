<template>
  <div class="demo2">
    <h3>{{msg}}</h3>
    <p>
      <a href="https://a6987985.github.io/website/js_9/js_9.html" target="_blank" >
        <el-button>新窗口打开</el-button></a>
    </p>
    <iframe src="https://a6987985.github.io/website/js_9/js_9.html" width="900px" height="690px" frameborder="no"></iframe>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'JS遍历树'

      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    color: #4d5566;
    font-family: -apple-system;
  }
  .demo1{
    text-align: center;
    max-width: 1500px;
    margin:0 auto;

  }
  button:hover {
    cursor: pointer;
  }
</style>
