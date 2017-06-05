<template>
  <div class="demos">
    <h1>{{msg}}</h1>
    <div class="flipContent">

      <div class="flip">
        <router-link to="/demos/canvasDraw">
          <div class="front">
            <div class="content">Canvas绘图板</div>
          </div>
          <div class="back">
            <div class="content">Vue/Element UI/</div>
          </div>
        </router-link>
      </div>


      <div class="flip">
        <router-link to="/demos/traversal">
          <div class="front">
            <div class="content">JS原生遍历树</div>
          </div>
          <div class="back">
            <div class="content">CSS/JS</div>
          </div>
        </router-link>
      </div>


      <div class="flip">
        <router-link to="/demos/3d">
          <div class="front">
            <div class="content">CSS3实现3D轮播图</div>
          </div>
          <div class="back">
            <div class="content">CSS3</div>
          </div>
        </router-link>
      </div>


      <div class="flip">
        <router-link to="/demos/sortTable">
          <div class="front">
            <div class="content">表格排序</div>
          </div>
          <div class="back">
            <div class="content">JavaScript</div>
          </div>
        </router-link>
      </div>


      <div class="flip">
        <router-link to="">
          <div class="front">
            <div class="content">5</div>
          </div>
          <div class="back">
            <div class="content">5</div>
          </div>
        </router-link>
      </div>


      <div class="flip">
        <router-link to="">
          <div class="front">
            <div class="content">6</div>
          </div>
          <div class="back">
            <div class="content">6</div>
          </div>
        </router-link>
      </div>


    </div>
    <transition name="fade" enter-active-class="animated fadeIn" leave-active-class="">

      <router-view></router-view>
    </transition>
  </div>

</template>

<script>
	export default {
		data () {
			return {
				msg: '项目经验'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  div.flipContent a {
    color: #000;
  }

  a.router-link-active {
    color: #000;
  }

  div.flipContent {
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  div.flip {
    width: 20%;
    height: 120px;
    margin: 10px 3%;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.8s;
    display: inline-block;
    box-shadow: 1px 1px 4px #dddddd;
    border: 1px solid #EFF2F7;
    background-color: #EFF2F7;
  }

  div.flip:hover {
    transform: rotateX(180deg) scale(1.2, 1.2);
    border: 1px solid #58B7FF;
    background-color: #f3f7fc;
    box-shadow: 1px 1px 4px #dddddd;
  }

  div.front {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
    text-align: center;
    backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-backface-visibility:hidden;	/* Chrome 和 Safari */
    -moz-backface-visibility:hidden; 	/* Firefox */
    -ms-backface-visibility:hidden;
  }

  div.back {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
    text-align: center;
    transform: rotateY(180deg) rotate(180deg);
  }

  .flip div.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    -webkit-backface-visibility:hidden;	/* Chrome 和 Safari */
    -moz-backface-visibility:hidden; 	/* Firefox */
    -ms-backface-visibility:hidden;
  }

  .demos {
    text-align: center;
    max-width: 1500px;
    margin: 0 auto;

  }
</style>
