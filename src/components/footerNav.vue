<template>
  <p :style="rotateP">By: {{name}}</p>
</template>

<script>
export default {
	name: 'footerNav',
	props: ['name'],
	data: function () {
    return {
    	rotateP: {
    		transition: 'all 0.8s',
        transform: 'rotate(0deg)'
      }
    }
  }
}
</script>

<style>
p {
  font-size: 13px;
  font-family: -apple-system;
}
</style>
