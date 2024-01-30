<template>
    <div class="newsContent"  >
                <div class="date" style="display: flex;flex-direction: column; align-items: center; ">
                    <div style="font-size: 30px; margin-top: 15px; color: #606266 ; margin-bottom: 5px;">{{ date }}</div>
                    <div style="margin-bottom: 15px; color: #606266;">{{year}}/{{ month }}</div>
                </div>
                <div class="textBox">
                    <div class="newstitle"> {{ title }}</div>
                    <div class="content">{{content}}</div>
                </div>
    </div>
    
</template>

<style>
.newsContent {
        display: flex;
        align-items: center;
        
        width: 100%;
        min-height: 150px;
       
       
        margin-top: 30px;
        margin-bottom: 30px;
        
        border-bottom: 2px solid gray; 

            
    }
    .date {
        background-color: #EBEEF5;
        width: 100px;
        height: 100px;
        margin: 0px;


    }
    .textBox {
       
        height: 80px;
        width: 1000px;
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
        font-size: 18px; 
        margin-bottom: 10px;
    }

    .textBox .content {
        
        text-align: left;
   
    }
    
</style>
<script>
    export default {
    props: [
        'date',
        'year',
        'month',
        'title',
        'content',
  ],
    data() {
       
      return {
        
    

      }
    }
  }
</script>