<template>
    <div class="block" >
    <el-carousel  height="560px">
      <el-carousel-item v-for="item in 4" :key="item" >
        <img :src="src" alt="" style="height: 100%; width: 100%; object-fit: cover; margin: 0;">
      </el-carousel-item>
    </el-carousel>
  </div>
  </template>
  
  <style>
  
    .block {
        flex:1;
        width:100%;
        
       
        
        
    }

    .el-carousel__button {
        width: 10px;
        height:10px;
        border: none;
        border-radius: 50%;
        background-color:#E4E7ED;
        
    }
  
    

    .el-carousel__indicators { 
  left: unset;
  transform: unset;
  right: 2%;
}
.el-carousel__indicator--horizontal.is-active .el-carousel__button{
    width: 10px;
    height: 10px;
    background: #F56C6C;
    border-radius: 50%;
    opacity: 1;
}

.el-carousel__indicator--horizontal.is-active{
  background-color: transparent;
  border-radius: 50%;
  width: 10px;
    height: 10px;
}


    
  </style>

  <script>
  export default {
  props: [
    'src',   
  ],
  data() {
    return {
      
    };
  },
};
</script>