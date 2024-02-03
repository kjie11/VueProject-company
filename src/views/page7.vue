<template>
    <div>
    <!-- <NavigateBar></NavigateBar> -->
    <TopPicture :img="img" :topPictureTitle="topPictureTitle" :topPictureTitleEN="topPictureTitleEN" ></TopPicture>
    
        <div class="horizontalContainer">
            <div class="box">
                <div class="logo">
                    <img :src="phoneLogo" alt="">
                </div>
                <div class="text">
                    <div style="margin: 10px; margin-bottom: 20px; font-weight: bold; font-size:larger; text-align: left;">{{ boxLeftTitle }}</div>
                    <div v-for="(item, index) in boxLeftContent" :key="index" style="margin: 5px; text-align: left;"><span>{{ item.title }}</span><span style="color: red;">{{ item.content }}</span></div>
                </div>
            </div>
            <div class="box">
                <div class="logo">
                    <img :src="emailLogo" alt="">
                </div>
                <div class="text">
                    <div style="margin: 10px; margin-bottom: 20px; font-weight: bold; font-size:larger; text-align: left;">{{ boxRightTitle }}</div>
                    <div v-for="(item, index) in boxRightContent" :key="index" style="margin: 5px; text-align: left;"><span>{{ item.title }}</span><span style="color: red;">{{ item.content }}</span></div>
                </div>
            </div>
        </div>

        <div class="detailCard" v-for="(item,index) in people">
            <div class="children" id="left">
                <div >
                    <div style="font-weight: bold; font-size:larger; text-align: left; margin-bottom: 20px; margin-left: 5px;">{{ item.job }}</div>
                    <div style="display: grid; grid-template-columns: auto 1fr; align-items: center;"><span style="font-weight: bold; font-size:larger; text-align: left; margin-bottom: 20px; margin-left: 5px;">{{ item.pay }}</span><span style=" text-align: left; margin-bottom: 20px; margin-left: 85px; color: #606266;">{{ item.detail }}</span></div>
                        <div style="display: flex; flex-wrap: wrap;">
                    <div v-for="(tag, index2) in tags" :key="index2" style=" align-items: center; margin-left: 5px;margin-right: 5px; border: 1px solid #C0C4CC; width: 100px; color: grey; padding: 5px; ">
                    {{ tag }}
                        </div>
                </div>
                </div>
            </div>
            <div class="children" id="right" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
                <div style="color: grey;">{{ item.date }}</div>
                <div @click="redirectToPosition(index)"><el-button type="danger" style="width: 120px;">查看职位</el-button></div>
            </div>
        </div>
        
    
    </div>
</template>
<style scoped>
    .horizontalContainer {
        display: flex;
  justify-content: center; 
        
    }

    .box {
    /* 添加样式，可以设置宽度、高度、边框等样式 */
   
    padding: 10px;
    height: 100px;
    width: 450px;
    margin: 15px;
    margin-top: 40px;
    margin-bottom: 0px;
    background-color: #EBEEF5;
    display: flex;
  justify-content:flex-start; 
    }
    .box .logo {
        background-color: antiquewhite;
        width: 100px;
        height: auto;
    }
    
    .box img {
        width: 100%; /* 图片宽度占据整个 .logo 宽度 */
        height: 100%; /* 图片高度占据整个 .logo 高度 */
        object-fit: cover;
    }
    .detailCard {
        min-height: 150px;
        width: 970px;
        margin: 0 auto;
        border: 1px solid #C0C4CC;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        
    }
    .detailCard .children {
        min-height: 120px;
        min-width: 200px;
        margin-left: 50px;
        margin-right: 50px;
        margin-top: 30px;
        margin-bottom: 30px;
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
    
    axios.get('/mock/joinUs').then(res => { // url即在mock.js中定义的
    
     this.img=res.data.img;
     this.phoneLogo=res.data.phoneLogo;
     this.emailLogo=res.data.emailLogo;
     this.boxLeftContent=res.data.boxLeftContent;
     this.boxRightContent=res.data.boxRightContent;
     this.people=res.data.people;
     this.tags=res.data.tags;
    
    console.log("this is img",res.data)
    })
     },
    data() {
    return {
        //img:require('@/assets/joinUs.png'),
        img:'',
      topPictureTitle:"人才招聘",
      topPictureTitleEN:"JOIN US",
    //   phoneLogo:require('@/assets/phone.png'),
    //   emailLogo:require('@/assets/email.png'),
      boxLeftTitle:'招聘联系电话',
      boxRightTitle:'简历投递邮箱',
    //   boxLeftContent:[{title: '联系电话：',content:'01066897777'},{title:'联系人：',content:'陈女士'}],
    //   boxRightContent:[{title:'人力资源部邮箱E-Mail:',content:'1160610077@qq.com'}],
    //   people:[{job:'财务专员',pay:'6K-8K',detail:'西安/经验/3-5年/大专',date:'1天前发布'},{job:'UI设计师',pay:'6K-8K',detail:'西安/经验/3-5年/大专',date:'1天前发布'},{job:'WEB前端开发工程师',pay:'6K-8K',detail:'西安/经验/3-5年/大专',date:'1天前发布'},{job:'PHP开发工程师',pay:'6K-8K',detail:'西安/经验/3-5年/大专',date:'1天前发布'}],
    //   tags:['定期体检','带薪年假','五险一金','周末双休'],
      
    };
  },
  components:{
      
      NavigateBar,
    
      TopPicture,
      
    },
  methods: {
    redirectToPosition(index) {
      window.location.href = "/#/joinUsDetail";
      // 或者直接指定完整的URL： window.location.href = "https://example.com/your-url";
    }
  
  },
    
  
  }
    




</script>