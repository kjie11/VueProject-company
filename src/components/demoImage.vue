<template>
    
    <el-image :src="src"></el-image>

  
</template>
<script>
  export default {
    props: [
    'src',   
  ],
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        
      };
    }
  }
</script>

<style>
    .block {
        margin: 20px;
    }
</style>