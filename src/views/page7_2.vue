<template>
    <div>
        <!-- <NavigateBar></NavigateBar> -->
        <TopPicture :img="img" :topPictureTitle="topPictureTitle" :topPictureTitleEN="topPictureTitleEN"></TopPicture>

        <div style=" width: 1200px; margin: 0 auto;">
            <span id="path" >{{ currentPath }}</span>
        <div style="display: flex;  margin-top: 10px;">
            <div style="flex: 2.5; margin-right: 10px; min-height: 500px; border: 1px solid grey; padding-left: 40px; ">
                <h2 style="text-align: left;">{{ job }}</h2>
                <div style="display: flex; align-items: center;">
                    <h3 style="text-align: left; color: orange; margin-right: 50px;">{{ pay }}</h3>
                    <span>{{ experience }}</span>
                </div>
                <div style="display: flex; align-items: center; color:grey">
                    <div v-for="(item, index) in tags" :key="index"  v-if="index < tags.length - 1">{{ item
                    }},&nbsp;</div>
                    <div v-else >{{ item }}</div>
                </div>


                <div class="jobDetails" style="margin-top:50px ;">
                    <p style="text-align: left; font-size: large;">职位描述</p>
                    <p class="lineFeed">{{ jobDetails }}</p>
                </div>

                <div class="jobRequirement" style="margin-top:50px ;">
                    <p style="text-align: left; font-size: large;">任职要求</p>
                    <p class="lineFeed">{{ jobRequirement }}</p>
                </div>

                <div class="contact" style="margin-top: 50px;margin-bottom: 50px;">
                    <div class="lineFeed">联系人：{{ name }}</div>
                    <div class="lineFeed">联系电话：{{ phone }}</div>
                    <div class="lineFeed">公司地址：{{ address }}</div>

                </div>
            </div>
            <div
                style=" flex: 1;  margin-left: 10px; height:420px;border: 1px solid grey;  background-color: red; overflow: hidden;">
                <h3 style="color: white; text-align: left; margin-top:0px; margin-left: 10px; padding: 10px; height: 10px;">
                    其他职位</h3>
                <div style="background-color: white;">
                    <div v-for="(item, index) in otherJobs"
                        style="padding: 20px;margin:0px;margin-left: 20px; margin-right: 20px; border-bottom: 1px solid grey; background-color: white; text-align: left; ">
                        <p style="line-height: 1.0; margin: 0px;">{{ item.title }}</p>
                        <div style="line-height: 1.0; margin: 0px;display: flex; align-items: center; ">
                            <p style="color: orange; font-weight: bold;">{{ item.pay }}</p>
                            <p style="color: grey;"> &nbsp;/&nbsp; {{ item.experience }} / {{ item.background }}</p>
                        </div>
                        <div style="color: grey;">{{ item.date }}天前发布</div>
                    </div>

                </div>

            </div>


        </div>
        </div>
    </div>
</template>
<style scoped>
.lineFeed {
    white-space: pre-wrap;
    word-wrap: break-word;
    text-align: left;
    line-height: 2.5;
    font-size: medium;
}
#path {
    color: grey;margin-top: 10px; margin-bottom: 10px;display: block; text-align: left;
}
</style>
<script>
import TopPicture from '../components/TopPicture.vue';
import NavigateBar from '../components/navigateBar.vue';


export default {
    name: 'App',

    data() {
        return {
            img: require('@/assets/joinUs.png'),
            topPictureTitle: "人才招聘",
            topPictureTitleEN: "JOIN US",
            currentPath: '当前位置：首页 > 人才招聘 > 详情',
            job: 'UI设计师',
            pay: '6k-8k',
            experience: '经验3-5年 / 大专',
            tags: ['五险一金', '定期体检', '扁平化管理', '午餐补助', '福利多'],
            jobDetails: '',
            jobRequirement: '',
            name: '陈女士',
            phone: '010-66897777',
            address: '北京市海淀区上地信息路12号A206',
            otherJobs: [{ title: '财务专员', pay: '6k-8k', experience: '经验1-3年', background: '本科', date: '1' }, { title: 'WEB前端开发工程师', pay: '6k-8k', experience: '经验1-3年', background: '本科', date: '1' }, { title: 'PHP开发工程师', pay: '6k-8k', experience: '经验1-3年', background: '本科', date: '1' }],

        };
    },
    components: {

        NavigateBar,

        TopPicture,

    },
    mounted() {

        this.jobDetails = this.readFile('static/jobDetails.txt')
        this.jobRequirement = this.readFile('static/jobRequirement.txt')

    },
    methods: {
        readFile(filePath) {
            // 创建一个新的xhr对象
            let xhr = null, okStatus = document.location.protocol === 'file' ? 0 : 200
            xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
            xhr.open('GET', filePath, false)
            xhr.overrideMimeType('text/html;charset=utf-8')
            xhr.send(null)
            return xhr.status === okStatus ? xhr.responseText : null
        },





    }




}





</script>