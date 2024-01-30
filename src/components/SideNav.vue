<template>
    
    <!-- <div>
    <el-card  class="box-card">
      <div class="clearfix" v-for="item in titlelist" :key=item.id style="margin: 20px;">
        
        <el-link :to="{ path: `/your-link-path/${item.id}` }">
          <span style="margin-right: 140px; font-weight: bold;">{{ item.title }}</span>
          <i class="el-icon-arrow-right"></i>
        </el-link>
        
            <el-row :gutter="30" >
  <el-col v-for="(item1, index) in item.content" :key="index" :span="index % 2 === 0 ? 12: 12" class="sidebar-content">
    <div style="margin-top: 10px;">{{ item1 }}</div>
  </el-col>
</el-row>
      

      </div>
      
    </el-card>
  </div> -->
           
  <div class="sideNav" >
                  
                <div v-for="(item,choices) in titlelist" :key="item.id" :index="item.id + 1"  active-text-color='#FF0000' style="text-align: left;">
                    
                    <div style="padding: 20px;">
                      <div class="titleCard" style="display: flex; justify-content: space-between;">
                       <div>{{ item.title }}</div> <div class="buttom"  @click="redirectToPage">></div>
                      </div>
                      <div>
                          <div style="display: flex; flex-wrap: wrap; justify-content:flex-start;align-items: flex-start;">
                          <div v-for="(content,index) in item.content" style="color: #909399; margin-right:15px;margin-top:18px;">
                           {{ content }}

                          </div>
                          </div>

                          <!-- <el-row >
                            <el-col :span="8" v-for="(content,index) in item.content" style="color: grey; justify-content: flex-start; align-items: flex-start;">
                           <div style="margin-top: 20px; color: #909399;">{{ content }}</div>

                            </el-col>
                          </el-row> -->
                      </div>
                  </div>
                </div>

  </div>
   



</template>
<style>
    .sideNav {
      background-color: white;
    }
</style>
<script>
export default {
    props: [
     
  ],
  data() {
    return {
        sideNavTitles:['解决方案','系列产品','软件模块','业务服务','相关研究'],

        titlelist:[
                    {id:1,title:'解决方案', content:["数字出版",'知识服务','数字资源库','数字教育','数据库']},
                    {id:2,title:'系列产品', content:['DPS5','OverLib','BitsPress']},
                    {id:3,title:'软件模块', content:['Sirs','LD-prediction','LD-DRM',]},
                    {id:4,title:'业务服务', content:['软件技术服务']},
                    {id:5,title:'相关研究', content:['compiler','Layout Engine','Ontoloy Design']},
                ],
        choicesList:[{id:1,title:'解决方案'},{id:2,title:'系列产品'},{id:3,title:'软件模块'},{id:4,title:'业务服务'},{id:5,title:'相关研究'},{id:6,title:'图书馆信息化'}],
     
                
    };
  },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      redirectToPage() {
     
      window.location.href = "https://your-destination-url.com";
    }
  
    }
  }
</script>

<style>
    .tac .el-icon-location {
        background-color: aqua;
        margin-left: auto;  /* 向右对齐 */
        

    }
    .tac {
        border-radius: 4px;
  min-height: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  padding: 10px;
    }
    .sidebar-content {
        color:#909399;
    }
    .el-card_header {
        padding: 0;
        margin: 0;
    }
    
 
</style>