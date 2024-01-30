<template>
    <div>
        <!-- <NavigateBar></NavigateBar> -->
        <TopPicture :img="img" :topPictureTitle="topPictureTitle" :topPictureTitleEN="topPictureTitleEN" ></TopPicture>
       

        <div class="main" >
          <el-row style=" display:flex;
 4     flex-wrap: wrap; ">
          <div style="width: 32%; display: inline-block;  box-sizing: border-box; margin-right: 15px; padding: 10px;">
            <div  class="threeBoxTitle" >信息化项目建设服务</div>
            
            <el-card class="box-card" shadow="hover" >
              <div >
                {{ text[0] }}
              </div>
              
            </el-card>

          </div>
        <div style=" width: 32%; display: inline-block;  box-sizing: border-box; margin-right: 15px; padding: 10px;">
          <div  class="threeBoxTitle" >科学研究服务</div>
          <el-card class="box-card" shadow="hover" >
              <div class="text">
                {{ text[1] }}
              </div>
              
            </el-card>

        </div>
        <div style="width: 32%; display: inline-block;  box-sizing: border-box; padding: 10px;">
          <div  class="threeBoxTitle" >技术支持服务</div>
          <el-card class="box-card" shadow="hover" >
              <div>
                {{ text[2] }}
              </div>
              
            </el-card>

        </div>
      </el-row>
        </div>
    </div>
</template>
<style scoped>
.main {
  
  width: 1200px;
  margin:0 auto;
}
  .threeBoxTitle {
    margin: 0 50px; 
    color: black; 
    font-weight: bold; 
    font-size: large; 
    padding:0 20px; 
    padding-top: 5px; 
    padding-bottom: 5px;
    margin-bottom:30px ;
  }
  .threeBoxTitle:hover {
    background-color: #f00;
    color: white;
  }

  
  .box-card {
    text-align: left;
    padding-top:40px;
    padding-bottom: 40px;
    padding-left: 10px;
    padding-right: 10px;
    line-height: 24px;
    font-size: 14px;

  }
  .el-row  .el-card {
     
     height: 300px;

   }

</style>
<script>
import TopPicture from '../components/TopPicture.vue';
import NavigateBar from '../components/navigateBar.vue';

  
  export default {
    name: 'App',
    
    data() {
    return {
        img:require('@/assets/service.png'),
      topPictureTitle:"公司服务",
      topPictureTitleEN:"SERVICE",
      text:['以成为优秀的信息化项目服务解决方案提供商打造国内知名的信息技术服务品牌为发展目标业务开展基于企业信息化流程架构，以提升客户管理水平、降低运营成本为核心，围绕企业信息化领域，以云计算、大数据、移动互联网等信息技术为主要手段，为政府、企业、教育等行业客户提供咨询规划、软件开发、项目建设、运行维护等专业化服务，致力于中小企业解决企业运营信息化的关键问题，方便业务功能拓展和加强','公司有独立的研究团队，以拥有多年开发经验的海外归国留学人员带队，团队成员均由研发水平高、技术能力强、经验丰富的研发人员组成。目前已经开发DPS5、Overlib、比特出版等多项产品，并成功注册商标;同时公司现拥有多项软件著作权。伴随着企业发展，公司将继续加大研发投入，立志成为行业技术领军企业。','立道软件秉承“以客户为中心”的服务理念，致力于为用户提供高质量的产品与服务;贯彻“全员参与，技术创新，持续改善，追求客户百分之百满意”的质量方针;拥有了专门的技术支持团队，建立了完善的服务与支持体系，该体系以自行研发的业务服务管理平台为基础， 使用专业的项目管理理论对服务项目进行管理，实现服务设计和交付;通过对服务质量的持续改进，产品研发和服务交付的全过程管理，从而达成与客户的价值共创。']
     
    };
  },
  components:{
      
      NavigateBar,
    
      TopPicture,
    
    },
    mounted() {
       
          
  },
    methods :{
        

    }


    
  
  }
    




</script>