<template>
  <el-row style="background-color: white; width: 100%;">

    <div class="parent" >
      <img :src="companyLogo" alt="">
      <div class="left" style="text-align: left; font-weight: bold;font-size:20px; vertical-align: middle; min-width: 80px;"><span
          style="vertical-align: middle;">立道软件</span></div>
      <div class="right" >
        <ul id="nav" style="background-color: white;">
          <!-- <li :class="{ 'active': this.$route.path === '/dashboard' }"><a href="/#/dashboard" >首页</a></li>
          <li :class="{ 'active': this.$route.path === '/solution' }"><a href="/#/solution" >解决方案</a></li>
          
          <li :class="{ 'active': this.$route.path === '/product' }"><a href="/#/product">产品</a></li>
          <li :class="{ 'active': this.$route.path === '/case' }"><a href="/#/case">案例</a></li>
          <li :class="{ 'active': this.$route.path === '/service' }"><a href="/#/service">服务</a></li>
          <li :class="{ 'active': this.$route.path === '/news' }"><a href="/#/news">新闻</a></li>
          <li :class="{ 'active': this.$route.path === '/joinUs' }"><a href="/#/joinUs">人才招聘</a></li>
          <li :class="{ 'active': this.$route.path === '/aboutUs' }"><a href="/#/aboutUs">关于我们</a></li> -->
          <li ><router-link to="/dashboard" class="unactive">首页</router-link></li>
          <li ><router-link to="/solution" class="unactive">解决方案</router-link></li>
          
          <li ><router-link to="/product" class="unactive">产品</router-link></li>
          <li ><router-link to="/case" class="unactive">案例</router-link></li>
          <li ><router-link to="/service" class="unactive">服务</router-link></li>
          <li ><router-link to="/news" class="unactive">新闻</router-link></li>
          <li ><router-link to="/joinUs" class="unactive">人才招聘</router-link></li>
          <li ><router-link to="/aboutUs" class="unactive">关于我们</router-link></li>
        </ul>
      </div>
    </div>
  </el-row>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL="http://localhost:8080"
export default {
  mounted() {
    
    axios.get('/mock/apiMock').then(res => { // url即在mock.js中定义的
     this.companyLogo=res.data.companyLogo;
     console.log("here is api mock",res.data)
    
    
    
    })
     },
  data() {
    return {
      activeIndex: '1',
      isHovered: false,
      companyLogo:'',
      // companyLogo: require('@/assets/companyLogo.png'),
    };
  },
  methods: {
    setHovered(value) {
      this.isHovered = value;
    },
  },
};
</script>

<style>
.unactive {
  color: black;
}
#nav {
  display: flex;
  justify-content: flex-end;
  border: none;
  list-style: none;
  padding: 0px;
  margin-bottom: 15px;
 width: 100%;


}
#nav li {
  width: 100px;
  /* padding: 5px; */
  text-align: center;
  
  
}

#nav li a {
  margin-left: 0px;
  margin-right: 0px;
  padding: 4px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  outline: none;
 /* color: black; */
  display: inline-block;
  text-decoration: none;
  z-index: 3;
  width: 90px;
  padding: 5px;
  
  border-radius: 40px;
}

#nav li a:hover {
  color: white;
  
}

.right li .router-link-active {
  background-color: red;
  border-radius: 40px;
  width: 100px;
  
  
  color:white;
}

.right li a.router-link-active {
  color: white;
}

.active {
  color: white;
  border-radius: 40px;
  background-color: red;
 

}


.right li:hover {
  color: white;
  border-radius: 40px;
  background-color: red;
  width: 90px;


}



.parent {
  display: flex;
  align-items: center;
  flex-direction: row;
  width:1200px;
  margin: 0 auto;
  height: 100%;

}

.right {
  display: flex;
  align-items: center;
  float: right;
  width: 100%;
  margin-right: 0px;
  margin-top: 10px;
  margin-bottom: 10px;

}

.left {
  float: left;
  margin-top: 10px;
  margin-bottom: 10px;
}

.active {
  background-color: red;
  color: white;
}
</style>
