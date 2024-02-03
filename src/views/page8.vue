<template>
    <div>
        <!-- <NavigateBar></NavigateBar> -->
        <TopPicture :img="img" :topPictureTitle="topPictureTitle" :topPictureTitleEN="topPictureTitleEN" ></TopPicture>
        
        
        <div style=" width: 1200px; margin:0 auto;">
            <div class="showBox" >
                    <h3>公司介绍</h3>
                    <div style="display: flex; height: 450px;padding-top: 10px; padding-bottom: 40px;">
                        <div class="text" style="flex:1; min-height: 100px;margin: 20px;padding: 50px;line-height: 2.0; text-align: left; ">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ text[0] }}</p>
                        </div>
                        <div class="img" style="flex: 1; min-height: 100px;  margin: 20px; position: relative; overflow: hidden;">
                            <div style="position: absolute; bottom: 0; left: 0; height: 50%; width: 50%; background-color: red; "></div>
                            <div style="position: absolute; top: 0; right: 0; height: 20%; width: 20%; background-color: blue;"></div>
                            <img :src="companyImg" alt="" style="position: absolute; bottom: 0; left: 0; width: 90%; height: 90%; margin-left: 10px;" />
                        </div>
                    </div>
            </div>

            <div class="showBox" >
                    <h3>企业文化</h3>
                    <div style="display: flex; height: 450px;padding-top: 10px; padding-bottom: 40px;">
                        
                        <div class="img" style="flex: 1; min-height: 100px;  margin: 20px; position: relative; overflow: hidden;">
                            <el-row>
                            <el-col :span="8">
                                <div class="grid-content" >
                                    <img :src=" page8imgs[0] " alt="" style="margin-right:auto;">
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="grid-content" style="height: 400px;  display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                    <img :src=" page8imgs[1] " alt="" style="margin-bottom: 15px;">
                                    <img :src=" page8imgs[2] " alt="" style="margin: 0;">
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="grid-content" >
                                    <img :src=" page8imgs[3] " alt="" style="margin-left: 5px;">
                                </div>
                            </el-col>
                            </el-row>
                        </div>
                        <div class="text" style="flex:1;min-height: 100px;margin: 20px;padding: 50px;line-height: 2.0; text-align: left; ">
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ text[1] }}</p>
                            <el-button size="medium"  style="bottom: 50px; background-color: red; margin-top: 50px; color: white !important;font-size: large;">more+</el-button>
                        </div>
                    </div>
            </div>

            

        </div>
        <div class="joinUsCard" style="background-color: aliceblue; min-height: 500px; padding: 15px;">
                <h2 style=" padding: 20px;">加入我们</h2>
                <span>和我们一起打造一个创新，高效的互联网平台</span>
        </div>

        <div style=" min-height: 500px; padding: 15px;">
            <h2 style=" padding: 20px;">联系我们</h2>
            <img :src="page8Address" alt="" style="margin-bottom: 10px; width: 1200px;">
        </div>
    </div>
</template>
<style scoped>
    .showBox {
       
        margin-bottom: 30px;
        margin-top: 20px;
    }
    .img .grid-content {
        height: 400px;display: flex; align-items: center;
      
    }
    .img .grid-content img:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
        
    }
    
</style>
<script>
import axios from 'axios';
import TopPicture from '../components/TopPicture.vue';
import NavigateBar from '../components/navigateBar.vue';
axios.defaults.baseURL="http://localhost:8080"
  
  export default {
    name: 'App',
    mounted() {
    
    axios.get('/mock/aboutUs').then(res => { // url即在mock.js中定义的
    
     this.img=res.data.img;
     
     this.companyImg=res.data.companyImg
     this.text=res.data.text
     this.page8imgs=res.data.page8imgs
     this.page8Address=res.data.page8Address
    console.log("this is img",res.data)
    })
     },
    
    data() {
    return {
        //img:require('@/assets/aboutUs.png'),
        img:'',
        // companyImg:require('@/assets/company.png'),
      topPictureTitle:"关于我们",
      topPictureTitleEN:"ABOUT Us",
    //   text:['我公司由多位归国留学人员发起创立。致力于数字出版解决方案，BPM信息流程管理解决方案，移动APP开发解决方案，独立开发编辑器，拥有自己的运行环境、虚拟机、动画引擎、脚本引擎。独立研发自由知识产权跨平台虚拟机和程序脚本。公司励志做出世界级的软件产品，让国产软件走向世界!我们有着最优秀的研发经验，市场影响力，产品开发能力，主要客户为出版传媒领域，电子杂志，广告设计，教育培训机构等','企业文化，或称组织文化(Corporate Culture或Organizational Culture)，是一个组织由其价值观信念、仪式、符号、处事方式等组成的其特有的文化形象，简单而言，就是企业在日常运行中所表现出的各方各面。','企业文化，或称组织文化(Corporate Culture或Organizational Culture)，是一个组织由其价值观信念、仪式、符号、处事方式等组成的其特有的文化形象，简单而言，就是企业在日常运行中所表现出的各方各面。'],
    //   page8imgs:[require('@/assets/page8img1.png'),require('@/assets/page8img2.png'),require('@/assets/page8img3.png'),require('@/assets/page8img4.png')],
    //   page8Address:require('@/assets/page8Address.png'),
    };
  },
  components:{
      
      NavigateBar,
    
      TopPicture,
    
    },
   
    methods :{
        

    }


    
  
  }
    




</script>