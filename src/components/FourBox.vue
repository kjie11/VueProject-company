<template>
<el-row gutter="10" >
  <el-col :span="8" style="padding-left: 0 !important; "><div class=" grid-content">
    
        <div class="four-vertical">
                <div v-for="(content, index) in fourbox1" :key="index" class="small-box">
                 
                    <div style="display: flex; align-items: center;">
                        <div style="width:60px; height: auto;  background-color: #DCDFE6;">
                          <h2>0{{ index+1 }}</h2>
                        </div>
                            <div style="display: flex; flex-direction: column;">
                                <div style="display: flex;justify-content: space-between;">
                                    <span style="line-height: normal; margin-left: 10px;   padding: 0px; text-align: left;font-weight: bold;font-size: medium;">{{ content.title }}</span>
                                    <span style="color:grey;">{{ content.date }}</span>
                                  </div>
                                <span style="margin-left: 10px; color: grey; text-align: left; font-size: small;">{{content.content}}</span>
                            </div>
                        <div>
                          
                        </div>
                    </div>

                </div>
                
          </div>
        
        </div>
    </el-col>


    <el-col :span="5">
    <div class="grid-content " style="padding: 0px;">
        
            
        
           <img :src="fourbox2" style="height: 100%; width: 100%; ">
    </div>
</el-col>
  <el-col :span="5" style="padding: 0px;">
      <div class="grid-content " style="padding: 0px;">
          
              
        <img :src="fourbox3" style="height: 100%; width: 100%; ">
            
      </div>
    </el-col>
  <el-col :span="6" style="padding-right: 0 !important; overflow: hidden;">
    <div class="grid-content " style="padding: 20px; border-top: 2px solid red; ">
      <h3 style="color: red;">{{ fourbox4.title }}</h3>
       <p style="line-height: 2.0; text-align: left;font-size:16px; margin-left: 10px; margin-right: 10px;">{{ fourbox4.content }}</p>
    </div>
  </el-col>
</el-row>
</template>
<style>

.grid-content {
    border-radius: 4px;
    background-color: white;
    height: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adjust the shadow as needed */
  padding-left: 5px;
  padding-right: 5px;
    
  }


.four-vertical {
   
    height: 100%;
    display: flex;
    flex-direction: column;
    
    

}
.small-box {
    flex: 1;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.small-box el-row {
  display: flex;
  align-items: center;
}

.el-col.el-col-6{
  
  margin: 0;

}

.el-row {
   
    display: flex;
    flex-wrap: wrap
  }

</style>

<script>
  export default {
    props: [
    'src',   
    'fourbox1',
    'fourbox4',
    'fourbox2',
    'fourbox3',
  ],
    data() {
       
      return {
        
        text: 'aaaaaaaaaaaaaaaaaaaaaa',
        list:['qqq','111','www','qqq'],
        
      }
    }
  }
</script>