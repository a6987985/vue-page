<template>
  <div>
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <router-link to="/resume">
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <span v-if="ifshow">个人简历</span>
        </el-menu-item>
      </router-link>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>
            <span v-if="ifshow">项目经验</span>
          </template>
          <router-link to="/demos/canvasDraw">
            <el-menu-item index="1-2-1"><span v-if="ifshow">Canvas绘图板</span></el-menu-item>
          </router-link>
          <router-link to="/demos/traversal">
            <el-menu-item index="1-2-2"><span v-if="ifshow">JS遍历树</span></el-menu-item>
          </router-link>
          <router-link to="/demos/3d">
            <el-menu-item index="1-2-3"><span v-if="ifshow">CSS3实现3D轮播图</span></el-menu-item>
          </router-link>
          <router-link to="/demos/sortTable">
            <el-menu-item index="1-2-4"><span v-if="ifshow">表格排序</span></el-menu-item>
          </router-link>
          <router-link to="/demos/weather">
            <el-menu-item index="1-2-5"><span v-if="ifshow">极简天气</span></el-menu-item>
          </router-link>
          <router-link to="/demos/weather">
            <el-menu-item index="1-2-6"><span v-if="ifshow">极简天气</span></el-menu-item>
          </router-link>
        </el-submenu>

      <router-link to="/XXXX">
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span v-if="ifshow">其它信息</span>
        </el-menu-item>
      </router-link>

      <router-link to="/info">
        <el-menu-item index="4">
          <i class="el-icon-information"></i>
          <span v-if="ifshow">联系方式</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'divNav',
    data () {
      return {}
    },
    props: ['ifshow'],
    methods: {
    	handleOpen(key, keyPath) {
    		console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
    		console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .router-link-active {
    text-decoration: none;
  }
  a {
    text-decoration: none;
  }
  .el-menu {
    background-color: #eee;
  }
</style>
