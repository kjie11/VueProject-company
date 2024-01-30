<template>
    <div class="img-div" :style="{ backgroundImage: 'url(' + img + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width:'100%', height: '200px' ,}">
        <div class="totalTitle" style="display: flex; flex-direction: column;">
           <span class="title">{{topPictureTitle}}</span>
           
           <span class="titleEN">{{ topPictureTitleEN }}</span>
        </div>
    </div>

    
</template>
<style>
.img-div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom:20px;
      }

    .title {
        flex: left;
        color: white;
        align-items: center;
        font-size: 35px;
        font-weight: bolder;

    }
    .titleEN {
        color: white;
        align-items: center;
        font-size: 35px;
        font-weight: bolder;
        
        clear:both;

    }
    
</style>
<script>
export default {
    name: 'App',
    props: [
    'img',
    'topPictureTitle',
    'topPictureTitleEN',
  ],
  
    
    data() {
    return {
        
    };
  },
  methods: {
    
  },
    components:{
      
   
    }
  
  }
    


</script>