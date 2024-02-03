<template>
  <div>
    <!-- <NavigateBar></NavigateBar> -->
    <TopPicture :img="img" :topPictureTitle="topPictureTitle" :topPictureTitleEN="topPictureTitleEN"></TopPicture>

    <div class="main">
    <SingleNews :date="item.date" :year="item.year" :title="item.title" :content="item.content" :month="item.month"
      v-for="(item, index) in news" :key="index" style="width: 100%; "></SingleNews>

    <div class="block" style="margin-bottom: 100px; margin-top: 50px;">
      <span class="demonstration"></span>
      <el-pagination layout="prev, pager, next" :total="20" >
      </el-pagination>
    </div>
  </div>
  </div>
</template>
<style scoped>
.newsContent {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  min-height: 150px;
  width: 65%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;

  border-bottom: 2px solid #EBEEF5;


}

.date {
  background-color: #EBEEF5;
  width: 100px;
  height: 100px;


}

.textBox {

  height: 80px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
}

.textBox .newstitle {

  text-align: left;
  font-weight: bold;
  font-size: 23px;
  margin-bottom: 10px;
}

.textBox .content {

  text-align: left;

}
.main {
  width:1200px;
  margin:0 auto;
 
}
</style>
<script>
import axios from 'axios';
import TopPicture from '../components/TopPicture.vue';
import NavigateBar from '../components/navigateBar.vue';
import SingleNews from '../components/SingleNews.vue'
axios.defaults.baseURL="http://localhost:8080"


export default {
  name: 'App',
  mounted() {
    
    axios.get('/mock/news').then(res => { // url即在mock.js中定义的
    
     this.img=res.data.img;
     this.news=res.data.news
    
    console.log("this is img",res.data)
    })
     },


  data() {
    return {
      //img: require('@/assets/news.png'),
      img:'',
      topPictureTitle: "公司新闻",
      topPictureTitleEN: "NEWS",
     // news: [{ id: 1, title: '你所理解的IT到底是什么?', content: '互联网技术定义:互联网技术指在计算机技术的基础上开发建立的一种信息技术，直译:nternet Technology; 简称:IT.' }, { id: 2, title: '你所理解的IT到底是什么?', content: '互联网技术定义:互联网技术指在计算机技术的基础上开发建立的一种信息技术，直译:nternet Technology; 简称:IT.' }]
    };
  },
  components: {

    NavigateBar,

    TopPicture,
    SingleNews,
  },
  methods: {

  },


}





</script>