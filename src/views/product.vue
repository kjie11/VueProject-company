<template>
  <div>


    <!-- <el-header style="padding: 0; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); margin-bottom: 10px;"><NavigateBar></NavigateBar></el-header> -->
    <TopPicture :img="img" :topPictureTitle="title" :topPictureTitleEN="titleEN"></TopPicture>

    <DropdownMenu  :currentPath="currentPath" :groupTitle="groupTitle" :src="productImg"
      :Page3paragraph="paragraph" :choicesList="choicesList"></DropdownMenu>


  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}



.img-div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.solution {
  flex: left;
  color: white;
  align-items: center;
  font-size: 35px;
  font-weight: bolder;


}

.program {
  color: white;
  align-items: center;
  font-size: 35px;
  font-weight: bolder;

  clear: both;
}


span {
  word-break: normal;
  width: auto;
  display: block;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
}

.main-content {
  min-height: 470px;
}

span {
  color: grey;
}
</style>


<script>
import axios from 'axios';
import NavigateBar from '../components/navigateBar.vue';
import DropdownMenu from '../components/DropdownMenu.vue';
import TopPicture from '../components/TopPicture.vue';
axios.defaults.baseURL = "http://localhost:8080"
export default {
  name: 'App',
  // created() {
  //   console.log("starting")
  //   axios.get('/mock/product').then(res => { // url即在mock.js中定义的

  //     this.img = res.data.img;

  //     this.choicesList = res.data.choicesList
  //     this.productImg = res.data.productImg

  //     console.log("this is img", res.data)
  //   })
  // },

  data() {
    return {
      //img:require('@/assets/product.png'),
      title: "产品",
      titleEN: "PRODUCTS",
      //titles: ["数字出版", "出版信息化", "图书馆", "教育", "政府企业信息化",],
      selectedTitleIndex: null,
      groupTitle: "全部产品系列",
      currentPath: "当前位置：首页>产品",
      //productImg:require('@/assets/productImg.png'),
      productImg: '',
      paragraph: "",
      //   choicesList: [
      // {id:1,title:'数字出版',choices: ['DPSS媒体资源管理平台', '比特出版']},
      // {id:2,title:'出版信息化',choices: ['文件流转信息系统']},
      // {id:3,title:'图书馆',choices: ['图书荐购系统']},
      // {id:4,title:'教育',choices: ['高校素材征订管理系统', '高等学习e课系统']},
      // {id:5,title:'政府企业信息化', choices: ['事项审批业务管理系统']},
      // ],



    };
  },
  components: {

    NavigateBar,
    DropdownMenu,
    TopPicture,
  },
  mounted() {

    //this.paragraph = this.readFile('static/productContent.txt')
    console.log("starting")
    axios.get('/mock/product').then(res => { // url即在mock.js中定义的

      this.img = res.data.img;

      this.choicesList = res.data.choicesList
      this.productImg = res.data.productImg
      this.paragraph=res.data.para
      this.titles=res.data.titles

      console.log("this is img", res.data)
    })

  },
  methods: {
    // readFile(filePath) {
    //   // 创建一个新的xhr对象
    //   let xhr = null, okStatus = document.location.protocol === 'file' ? 0 : 200
    //   xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
    //   xhr.open('GET', filePath, false)
    //   xhr.overrideMimeType('text/html;charset=utf-8')
    //   xhr.send(null)
    //   return xhr.status === okStatus ? xhr.responseText : null
    // },





  }


}


</script>