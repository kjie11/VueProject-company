<template>
  
  <body>
    <div id="app">
    <NavigateBar></NavigateBar>
       <!-- <el-header style="padding: 0; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); margin-bottom: 10px;"><NavigateBar></NavigateBar></el-header> -->
      <router-view></router-view>
    







<myFooter ></myFooter>

  </div>
</body>
</template>

<script>
// import axios from 'axios';
import NavigateBar from './components/navigateBar.vue';
import SideNav from './components/SideNav.vue';

import FourBox from './components/FourBox.vue';
import BoxGrid from './components/BoxGrid.vue';
import myFooter from './components/Footer.vue';
import SlideImage from './components/SlideImage.vue'  

export default {
  name: 'App',
  
  data() {
  return {
    moreLink: 'https://your-target-link.com',
    footerText:'hi this is footer',
    src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    fourbox1:['content1','content2','content3','content4'],
    fourbox4:'this is 4th fourbox',
    boxGridContent1:['content1','content2','content3','content4'],

  };
},
  components:{
    
    NavigateBar,
    SideNav,
   
    FourBox,
    BoxGrid,
    myFooter,
    SlideImage,
  },
  // async created() {
  //       const res =await axios.get('/app/mock')
  //       console.log("res is :",res)
        
        
  //   }

}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}

.main-container {
  
  margin: 0 200px;
  height: 100%;
  
  
  
}

.el-main {
  background-color: #2c3e50;
  align-items: stretch;
}
.main-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 50%;
  height: 100%;
}

.two-title {
  height:100;
}
.after-fourbox {
  border-radius: 4px;
    min-height: 300px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adjust the shadow as needed */
  padding: 10px;
  margin-top: 30px;
}



body{
       margin:0;
       padding:0;
     }


</style>
