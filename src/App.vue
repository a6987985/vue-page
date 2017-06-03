<template>
  <div id="app">
    <nav id="nav" :style="navWidth">
      <div class="btnClose"><span @click="showNav" :style="rotateClose"><i class="el-icon-close"></i></span></div>
      <nav-message :ifshow="show"></nav-message>
      <div-nav :ifshow="show"></div-nav>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
    <footer>
      <footer-nav name="-Siri"></footer-nav>
    </footer>
  </div>
</template>

<script>
  import navMessage from './components/navMessage.vue'
  import divNav from './components/divNav.vue'
  import footerNav from './components/footerNav.vue'
  export default {
    name: 'app',
    data: function () {
      return {
        show: true,
        navWidth: {
          width: '240px',
          transition: 'all 0.8s ease'
        },
        rotateClose: {
          transition: 'all 0.8s ease'
        }

      }
    },
    components: {
      'nav-message': navMessage,
      'div-nav': divNav,
      'footer-nav': footerNav
    },
    methods: {
      showNav: function () {
        this.show = !this.show;
        if (this.show) {
          this.navWidth.width = '240px';
          this.rotateClose.transform = "rotate(0deg)"
        } else {
          this.navWidth.width = '80px';
          this.rotateClose.transform = "rotate(495deg)"
        }
      }
    }
  }
</script>

<style>
  #app {
    height: 100%;
    overflow: hidden;
  }

  #nav {
    height: 100%;
    float: left;
    background-color: #eee;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .btnClose {
    text-align: right;
    padding: 10px 10px 0 0;
  }

  .btnClose span {
    display: inline-block;
  }

  .btnClose span:hover {
    cursor: pointer;
  }

  .el-icon-close {
    color: #b4b4b4;
  }

  .container {
    overflow: scroll;
    height: 100%;
  }

  footer {
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
