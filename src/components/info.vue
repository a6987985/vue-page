<template>
  <div class="info">
    <h1>{{msg}}</h1>
    <table align="center" cellpadding="6">
      <tr>
        <td>联系电话:</td>
        <td>17692459745</td>
      </tr>
      <tr>
        <td>邮箱:</td>
        <td>6987985@163.com</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '联系方式'
      }
    }
  }
</script>

<style>
div.info {
  text-align: center;
  height: 100%;
}

  td {
    text-align: left;
  }
  table {
    position: relative;
    top: 30%
  }
</style>
