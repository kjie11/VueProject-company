<template>
    <div>

        <!-- <NavigateBar></NavigateBar> -->
        <TopPicture :img="img" :topPictureTitle="topPictureTitle" :topPictureTitleEN="topPictureTitleEN"></TopPicture>

        <div style="width: 1200px; margin:0 auto; ">

            <div class="navBar">
                <ul id="navPage4">
                    <li><a href="#">全部</a></li>
                    <li><a href="#">出版</a></li>
                    <li><a href="#">政府信息化</a></li>
                    <li><a href="#">教育</a></li>
                    <li><a href="#">图书馆</a></li>
                    <li><a href="#">科研</a></li>

                </ul>
            </div>



            <div class="showCase">

                <!-- <div v-for="(content, index) in showCaseBox" :key="content.id">
                    <div class="box">
                        <img :src="content.img" alt="" style="width: 100%; padding: 0px; margin: :0px;">
                    </div>
                    <div class="additional-text">
                        {{ content.text }}
                    </div>
                </div> -->

                <el-row :gutter="20">
                <el-col :span="8" v-for="(content, index) in showCaseBox " :key="content.id">
                    <div class="box">
                        <img :src="content.img" alt="" style="width: 100%; padding: 0px; margin: :0px;"/>
                    <p>{{content.text}}</p>
                    </div>



                </el-col>
            </el-row>


            </div>

        </div>


    </div>
</template>
<style scoped>
.navBar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;

   
    margin: 0 auto;
    margin-top: 35px;



}

#navPage4 {

    border: none;
    
    width: 60%;
    margin: 0 auto;
    display: flex;
    list-style: none;


    padding: 0px;


}

#navPage4 li a {
    margin-left: 19px;
    margin-right: 19px;
    margin-top: 3px;
    margin-bottom: 3px;
    padding: 4px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    outline: none;
    color: black;
    display: inline-block;
    text-decoration: none;
    z-index: 3;
}

#navPage4 li:hover {
    color: white;
    border-radius: 5px;
    background-color: red;

}

#navPage4 li a:hover {
    color: white;
}

#navPage4 li {
    margin: 0 auto;
}

.showCase {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    justify-content: space-between;

    margin-bottom: 100px;

}

.box {

    margin-right: 0px;
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: 5px;
    min-height: auto;
    min-width: 300px;

    flex: 0 0 25%
}
</style>
<script>
import axios from 'axios';
import TopPicture from '../components/TopPicture.vue';
import NavigateBar from '../components/navigateBar.vue';
import DropdownMenu from '../components/DropdownMenu.vue';
axios.defaults.baseURL="http://localhost:8080"

export default {
    name: 'App',
    mounted() {
    
    axios.get('/mock/case').then(res => { // url即在mock.js中定义的
    
     this.img=res.data.img;
     this.showCaseBox=res.data.showCaseBox
    
    console.log("this is img",res.data)
    })
     },

    data() {
        return {
            img:'',
            //img: require('@/assets/caseShow.png'),
            topPictureTitle: "案例展示",
            topPictureTitleEN: "CASE SHOW",
            
            //showCaseBox: [{ id: 1, img: require('@/assets/showCase1.png'), text: '中办数字图书馆' }, { id: 2, img: require('@/assets/showCase1.png'), text: '中办数字图书馆' }, { id: 3, img: require('@/assets/showCase1.png'), text: '中办数字图书馆' }, { id: 4, img: require('@/assets/showCase1.png'), text: '中办数字图书馆' }, { id: 5, img: require('@/assets/showCase1.png'), text: '中办数字图书馆' }, { id: 6, img: require('@/assets/showCase1.png'), text: '中办数字图书馆' }]

        };
    },
    components: {

        NavigateBar,
        DropdownMenu,
        TopPicture,
    },
    methods: {
        handleMenuSelect(index) {
            this.selectedTitleIndex = parseInt(index);
        },
    },


}





</script>