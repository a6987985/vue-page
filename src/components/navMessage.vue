<template>
  <transition name="fade" enter-active-class="animated fadeInDownBig" leave-active-class="animated fadeOutUpBig" appear
              appear-active-class="animated fadeInDownBig">
    <div class="per-mes" v-if="ifshow">
      <div class="img"></div>
      <div class="table">
        <table align="center" cellpadding="6">
          <tr>
            <td class="title">姓名</td>
            <td>赵鑫</td>
          </tr>
          <tr>
            <td class="title">专业</td>
            <td>电子信息工程</td>
          </tr>
          <tr>
            <td class="title">学历</td>
            <td>本科</td>
          </tr>
          <tr>
            <td class="title">毕业院校</td>
            <td>大连东软信息学院</td>
          </tr>
          <tr>
            <td class="title">毕业年份</td>
            <td>2017</td>
          </tr>
        </table>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'navMessage',
    props: ['ifshow'],
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .per-mes {
    width: 240px;
    text-align: center;
    color: #4d5566;
  }

  .table {
    margin: 4px 0;
  }

  table td {
    font-size: 13px;
    text-align: left;
    font-family: -apple-system;
  }

  .img {
    width: 170px;
    height: 170px;
    display: inline-block;
    border-radius: 100%;
    box-shadow: 0 0 8px 4px #e6e6e6 inset;
    background-image: url("../assets/img2.png");
    background-repeat: no-repeat;
  }
</style>
