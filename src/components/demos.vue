<template>
  <div class="demos">
    <h1>{{msg}}</h1>
    <div class="pro-table">

      <div class="ea-pro">
        <router-link to="/demos/canvasDraw">
          <div class="front">
            <div class="content">Canvas绘图板</div>
          </div>
          <div class="back">
            <div class="content">Vue/Element UI</div>
          </div>
        </router-link>
      </div>
      <div class="ea-pro">
        <router-link to="/demos/traversal">
          <div class="front">
            <div class="content">JS原生遍历树</div>
          </div>
          <div class="back">
            <div class="content">CSS/JS</div>
          </div>
        </router-link>
      </div>
      <div class="ea-pro">
        <router-link to="/demos/3d">
          <div class="front">
            <div class="content">CSS3实现3D轮播图</div>
          </div>
          <div class="back">
            <div class="content">CSS3</div>
          </div>
        </router-link>
      </div>
      <div class="ea-pro">
        <router-link to="/demos/sortTable">
          <div class="front">
            <div class="content">表格排序</div>
          </div>
          <div class="back">
            <div class="content">JS</div>
          </div>
        </router-link>
      </div>
      <div class="ea-pro">
        <router-link to="">
          <div class="front">
            <div class="content">画图板</div>
          </div>
          <div class="back">
            <div class="content">vue</div>
          </div>
        </router-link>
      </div>
      <div class="ea-pro">
        <router-link to="">
          <div class="front">
            <div class="content">画图板</div>
          </div>
          <div class="back">
            <div class="content">vue</div>
          </div>
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '项目经验'
      }
    }
  }
</script>

<style>
  h1 {
    text-align: center;
  }
  a {
    color: #4d5566;
  }
  a.router-link-active {
    color: #4d5566;
  }
  .demos {
    color: #4d5566;
    font-family: -apple-system;
  }
  .pro-table {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
  }
  .ea-pro {
    width: 20%;
    height: 120px;
    margin: 10px 3%;
    position: relative;
    display: inline-block;
    box-shadow: 1px 1px 4px #dddddd;
    background-color:  #EFF2F7;
    border:1px solid #EFF2F7;
    transform-style: preserve-3d;
    transition: all 0.8s;
  }
  .ea-pro:hover {
    transform: rotateX(180deg) scale(1.2,1.2);
    border: 1px solid #58b7ff;

  }
  .front {
    position: absolute;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    transform-style: preserve-3d;

  }
  .back {
    position: absolute;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    transform-style: preserve-3d;
    transform: rotateY(180deg) rotate(180deg);
    backface-visibility: hidden;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
  .demos {
    max-width: 1500px;
    margin: 0 auto;
  }
</style>
