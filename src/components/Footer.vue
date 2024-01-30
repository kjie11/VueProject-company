<template>
  <footer class="myfooter" >

    <div class="footerContent">

      <div class="left1" style="margin: 15px; " >
        <p >{{ textLeft }}</p>
        <p>{{ textLeft1 }}</p>
        <p>{{ textLeft2 }}</p>
      </div>



      <div class="right1"  style="margin: 15px; ">
        <p >{{ textRight }}</p>
        <p>{{ textRight2 }}</p>
        <p>{{ textRight3 }}</p>
      </div>

    </div>

  </footer>
</template>

<style>
.myfooter {
  background-color: #1F1F23;
  color: #C0C4CC;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  padding: 0px;
 
  


}
.footerContent {
  display: flex;
  margin: 0px;
  width: 1200px;
  
}

.footerContent .left1 {
 
  width: 50%;
  border-right: 1px solid #ccc;
  text-align: left;
  margin-right: 50px;
  
}
.footerContent .right1 {
 
  width: 50%;
 
  
}

.footerContent .left1 p {
  
  margin: 12px;
  margin-right: 50px;
  text-align: left;
}

.footerContent .right1 p {
  
  margin: 12px;
  margin-left: 100px;
  text-align: left;
}
</style>

<script>
export default {
  props: [

  ],
  data() {
    return {
      textLeft: '联系我们',
      textLeft1: '北京市海淀区上地信息路12号A206',
      textLeft2: '电话: 010-66897777',
      textRight: '解决方案 | 产品 | 案例 | 服务 | 新闻 | 人才招聘  | 关于我们',
      textRight2: '版权所有：北京立道软件股份有限公司',
      textRight3: 'copyright@2019-2021',
    };
  },
};
</script>