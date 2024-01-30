<template>
  <el-row :gutter="20">
    <el-col :span="6" v-for="(content, index) in boxGridContent " :key="index">
      <div class="imgBox">
        <img :src="content" class="image" />
      </div>

        
        
    </el-col>
  </el-row>

  <!-- <div class="container">

    <div class="showCase">

      <div v-for="(content, index) in boxGridContent" :key="content.id">
        <div class="box">
          <img :src="content" alt=""
            style="width: 100%; height: 100%; padding: 0px; margin: :0px;  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
        </div>

      </div>


    </div>
  </div> -->
</template>
<script>
export default {
  props: [
    'boxGridContent',
  ],
  data() {
    return {

    };
  },
  computed: {
    groupedContent() {
      const groupSize = 2;
      const result = [];
      for (let i = 0; i < this.boxGridContent.length; i += groupSize) {
        result.push(this.boxGridContent.slice(i, i + groupSize));
      }
      return result;
    },
  },
};
</script>
<style scoped>
.image {
  width: 100%;
  margin: 0px;
  padding: 0px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.container {
  width: 1120px;
  /* 固定宽度为1120px */
  margin: 0 auto;
  /* 设置左右边距为auto，使其水平居中 */
  display: flex;
  justify-content: center;
  align-items: center;



}

.showCase {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;


}

.box {

  margin-right: 0px;
  margin-left: 0px;
  margin-top: 20px;
  margin-bottom: 5px;
  min-height: auto;
  width: 260px;

  flex: 0 0 25%
}

.imgBox{
  width:100%;
  height:210px;
  margin-bottom: 20px;
}
.image{
  width:100%;
  height:100%;
  object-fit: contain
}
</style>