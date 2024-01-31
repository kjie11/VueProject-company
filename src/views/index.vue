<template>
  <div style="background-color: #e5e5e5;">
    
     
        <!-- <NavigateBar></NavigateBar> -->
     
      <div style="width: 1200px; margin:0 auto; margin-top: 0px;">
        <div style="height: 20px;"></div>
      <el-container>
          <el-aside style="margin-right: 18px; ">
            <SideNav></SideNav>
          </el-aside>
          <el-main style="position: relative; ">
            <div class="main-content" style=" position: absolute;top: 0;left: 0;width: 100%;height: 100%;">

              <SlideImage :src="slideImg"></SlideImage>
            </div>
          </el-main>

      </el-container>



      <div class="two-title" style="">
        <el-row gutter="10">
          <el-col :span="8" >
            <div>

              <p style="font-size: 18px; font-weight: bold; text-align: left; ">公司新闻 <el-link class="more"
                  :underline='false' href='https://www.baidu.com'>更多<i class="el-icon-arrow-right"></i></el-link> </p>


            </div>
          </el-col>
          <el-col :span="16">
            <div>
              <p style="font-size: 18px; font-weight: bold; text-align: left;">案例介绍<el-link class="more"
                  :underline='false' href='https://www.baidu.com'>更多<i class="el-icon-arrow-right"></i></el-link> </p>
            </div>
          </el-col>
        </el-row>


      </div>

      <FourBox :src="src" :fourbox4="fourbox4" :fourbox1="fourbox1" :fourbox2="fourbox2" :fourbox3="fourbox3"
        style=" "></FourBox>

          </div>
      <div class="after-fourbox" height="50px" style="background-color: white;">
        <h2>合作伙伴</h2>



        
        <div>
          <BoxGrid  :boxGridContent="boxGridContent1" :text="'Text ' + index"></BoxGrid>
        </div>
      </div>

    </div>
  
</template>
  
<script>
import NavigateBar from '../components/navigateBar.vue';
import SideNav from '../components/SideNav.vue';

import FourBox from '../components/FourBox.vue';
import BoxGrid from '../components/BoxGrid.vue';
import myFooter from '../components/Footer.vue';
import SlideImage from '../components/SlideImage.vue';
import axios from 'axios';
import {mock} from 'mockjs';
axios.defaults.baseURL="http://localhost:8080"
mock("http://localhost:8080/api/index",{
  "code":0,
  "data":11111111,
  "msg":"this is index page!",
  
})



export default {
  name: 'App',
  mounted (){
    axios.get('/api/index').then(result=>{
      console.log(result.data);
    })
  },

  data() {
    return {
      moreLink: 'https://your-target-link.com',
      footerText: 'hi this is footer',
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      slideImg: require('@/assets/slideImg.png'),
      fourbox1: ['content1', 'content2', 'content3'],
      fourbox1: [{ title: 'PHP岗位正在热聘中...', content: '公可待遇福利好，每年有一次旅游，提供住宿...', date: '2015-06-28' }, { title: 'PHP岗位正在热聘中...', content: '公可待遇福利好，每年有一次旅游，提供住宿...', date: '2015-06-28' }, { title: 'PHP岗位正在热聘中...', content: '公可待遇福利好，每年有一次旅游，提供住宿...', date: '2015-06-28' }],
      fourbox4: { title: '环保部HCFC业务平台', content: '生态环境部贯彻落实党中央关于生态环境保护工作的方针政策和决策部界，在履行职责过程中坚持和加强党对生态环境保护工作的集中统一领导' },
      boxGridContent1: [require('@/assets/logo1.png'), require('@/assets/logo2.png'), require('@/assets/logo3.png'), require('@/assets/logo4.png'), require('@/assets/logo5.png'), require('@/assets/logo6.png'), require('@/assets/logo7.png'), require('@/assets/logo8.png'),],
      sideNavTitles: ['解决方案', '系列产品', '软件模块', '业务服务', '相关研究'],
      fourbox2: require('@/assets/fourbox2.png'),
      fourbox3: require('@/assets/fourbox3.png'),
    };
  },
  components: {

    NavigateBar,
    SideNav,

    FourBox,
    BoxGrid,
    myFooter,
    SlideImage,
  }

}
</script>
  
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

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
  width: 1200px;
  height: 100%;
}

.two-title {
  height: 100;
}

.after-fourbox {
  border-radius: 4px;
  min-height: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /* Adjust the shadow as needed */
  padding: 10px;
  margin-top: 30px;
}

.two-title .more {
  float: right;
  color: #F56C6C;
  font-weight: normal;
  font-size: 18px;
}
</style>
  