<template>
    <div style="width: 1200px; margin:0 auto;">
      <div id="path" >
        <span style="align-self:self-start;">{{ currentPath }}</span>
      </div>
      <div class="main-content" >
        <div class="div1" >
          
                  <div id="dropDownBox" ><span id="groupTitle" >{{groupTitle}}</span></div>

                  <el-menu active-text-color="#FF0000"   > 
                  <el-submenu v-for="(item,choices) in choicesList" :key="item.id" :index="item.id + 1"  active-text-color='#FF0000' style="text-align: left;">
                    <template slot="title">
                      <span :style="{ color: selectedTitleIndex === index + 1 ? '#FF0000' : '',textAlign: 'left' ,fontSize:'16px',marginLeft:'5px',color: '#000000' } ">{{ item.title }}</span>
                    </template>
                    <el-menu-item-group :style="{textAlign:'left'}">
                        <el-menu-item v-for="(choice,index) in item.choices" :key="item.id+1"  active-text-color="#FF0000">
                            {{ choice }}
                        </el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>

                

                </div>
                
                <div class="div2">
                
                        <div class="imgBox">
                                <img :src="src" alt="">
                        </div>
                        
                        <div class="textBox">
                            <p v-for="(paragraph, index) in text" :key="index" >{{ paragraph }}</p>
                            <p>{{ Page3paragraph }}</p>
                        </div>

                        
                </div>
           
        
      </div>
    </div>
  </template>
  
<style >
     .main-content {
      min-height: 470px;
      width: 100%;
    }

    

    .div1{
	
      width:25%;
      height:auto;
      min-height: 300px;
      
     float: left;
     margin-right: 10px;
     align-self: self-start;
     border: 1px solid #f2f2f2;;
     background-color: red;
     padding-bottom: 5px;
    }
    .div2{
      
      width:75%;
      height:auto;
      min-height: 400px;
      float: right;
      margin-left: 10px;
      align-self: self-start;
      border: 1px solid #f2f2f2;;
    }

    .twoBox {
      width: 100%;
    }

    .submenu-content {
      font-size: 16px;
    }

    .imgBox img{
        padding: 20px;
        max-width:100%;
        overflow: hidden;
    }

    .textBox {
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
        font-size: 15px;
        
    }

    .textBox p {
        text-align: left; text-indent: 2em;line-height: 2;
    }
    #groupTitle {
      display: flex; align-items: center; margin-left: 25px;font-size: large;color: white;height: 50px;
    }
    #dropDownBox {
      background-color: red;
    }
    #path {
      margin-top:10px; margin-bottom:10px; display:flex; flex-direction:column; margin-left:0px;
      color:gray;
    }
</style>

<script>
    import NavigateBar from '../components/navigateBar.vue';
  
  export default {
    name: 'App',
    props: [
    'currentPath',   
    'titles',
    'groupTitle',
    'src',
    'text',
    'Page3paragraph',
    'choicesList',
  ],
  
    
    data() {
    return {
       
    };
  },
  methods: {
    handleMenuSelect(index) {
      this.selectedTitleIndex = parseInt(index);
    },

  },
    components:{
      
      NavigateBar,
     
    }
  
  }
    


</script>
