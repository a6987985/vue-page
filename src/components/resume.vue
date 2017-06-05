<template>
  <div class="resume">

    <div class="top">
      <h1>{{msg}}</h1>
      <table align="center">
        <tr>
          <td class="title">姓名:</td>
          <td>赵鑫</td>
        </tr>
        <tr>
          <td class="title">职位意向:</td>
          <td>前端开发（北京）</td>
        </tr>
        <tr>
          <td class="title">联系方式:</td>
          <td>17692459745</td>
        </tr>
        <tr>
          <td class="title">邮箱:</td>
          <td>6987985@163.com</td>
        </tr>
      </table>

    </div>
    <div class="skill">
      <span class="skill">技能</span>
      <hr>
      <div style="padding: 0 50px">
        <h4>1.HTML & CSS</h4>
        <ul>
          <li>能遵循 W3C 规范，写出规范化，语义化的代码。注重代码的可维护性及性能优化</li>
          <li>熟悉HTML5以及CSS3的新特性,掌握盒模型，浮动，定位，flex等的使用</li>
        </ul>
        <h4>2.JavaScript</h4>
        <ul>
          <li>熟悉 JavaScript的基本语法，了解Ajax请求的使用等</li>
          <li>掌握事件模型，DOM，BOM操作</li>
        </ul>
        <h4>3.框架 & 工具</h4>
        <ul>
          <li>对Vue.js的使用有简单的了解，了解Vue.js中数据驱动，组件，路由等概念</li>
          <li>了解Bootstrap，Element UI等常用UI框架，进行网页的响应式布局及美化</li>
          <li>对组件化开发，webpack，有简单了解</li>
          <li>了解Git的常用命令，使用Webstorm进行代码编写</li>
        </ul>
      </div>
    </div>
    <div class="skill">
      <span class="skill">项目经验</span>
      <hr>
      <div style="padding: 0 50px">
        <h4>1.个人主页</h4>
        <ul>
          <li>使用Vue-cli脚手架工具，尝试通过组件化概念进行构建单页项目</li>
          <li>使用Vue-router，通过路由的形式，对多个页面、组件在单页中进行整合使用</li>
        </ul>
        <h4>2.JavaScript</h4>
        <ul>
          <li>熟悉 JavaScript的基本语法，了解Ajax请求的使用等</li>
          <li>掌握事件模型，DOM，BOM操作</li>
        </ul>
        <h4>3.框架 & 工具</h4>
        <ul>
          <li>对Vue.js的使用有简单的了解，了解Vue.js中数据驱动，组件，路由等概念</li>
          <li>了解Bootstrap，Element UI等常用UI框架，进行网页的响应式布局及美化</li>
          <li>对组件化开发，webpack，有简单了解</li>
          <li>了解Git的常用命令，使用Webstorm进行代码编写</li>
        </ul>
      </div>
    </div>
    
    <div class="skill">
      <span class="skill">其他技能</span>
      <hr>
      <div class="skillContent">
        <table width="100%">
          <tr>
            <td class="title">
              Sketch
            </td>
            <td>熟悉Sketch的基本使用，能用Sketch来处理矢量图</td>
          </tr>
          <tr>
            <td class="title">英语水平</td>
            <td>CET-4: 485</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="skill">
      <span class="skill">个人介绍</span>
      <hr>
      <div class="skillContent">
        <ul style="padding-left: 15px">
          <li>自学能力强，喜欢在安静的环境下学习</li>
          <li>喜欢追逐前沿技术，对前端开发<strong>充满热情</strong></li>
          <li>有足够毅力和恒心</li>
          <li>上学期间自学前端知识，还存在很多不足，缺乏<strong>大项目开发经验</strong></li>
          <li>希望在以后的工作中学习更多知识，积累更多经验</li>
        </ul>
      </div>
    </div>
    <div class="skill">
      <span class="skill">感谢</span>
      <hr>
      <p style="font-size:16px;text-indent:2em;word-wrap: break-word;margin-left: 25px;margin-right: 25px;line-height: 1.5rem;">
        非常感谢您能够看到这里，期待您能给予我一次<strong>难忘的工作经历</strong>。
      </p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'resume',
    data () {
      return {
        msg: '简历'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    text-decoration: none;
    color: #9da4ff;
  }
  a:hover{
    text-decoration: underline;
  }
  li,td{
    line-height: 1.5rem;
  }
  td.title{
    padding: 0 20px 0 0;
  }
  div.skill div.eachItem{
    display: flex;
    border-bottom: 1px dashed rgb(207, 207, 207);
  }
  div.skill div.skillContent ul{
    margin:8px 0;
  }
  div.skill div.skillContent span.title{
    display: inline-block;
    width: 18%;
    vertical-align: top;
    margin: 8px 0;
  }
  div.skill div.content{
    display: inline-block;
    word-wrap:  break-word;
    width: 82%;
  }
  div.skill div.skillContent{
    padding: 0 50px;
  }
  div.skill span.skill{
    display: inline-block;
    margin:0 25px;
    font-size: 1.5rem;
    color: #66ccff;
  }
  div.skill{
    text-align: left;
    margin:35px 0;
  }
  hr{
    border:1px solid #d5d5d5;
  }

  table td.title {
    width:100px;
  }
  table td{
    text-align: left;
    padding: 2px 0;
  }
  div.top{
    text-align: center;
  }

  .resume{

    max-width: 850px;
    margin:0 auto;
    color: #8492A6;

  }
</style>
