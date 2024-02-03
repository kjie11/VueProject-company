const Mock = require('mockjs')




const page4 = function () {

  
  const img=require('@/assets/caseShow.png');
  
  
    
    const showCaseBox=[{ id: 1, img: require('@/assets/showCase1.png'), text: '中办数字图书馆' }, { id: 2, img: require('@/assets/showCase1.png'), text: '中办数字图书馆' }, { id: 3, img: require('@/assets/showCase1.png'), text: '中办数字图书馆' }, { id: 4, img: require('@/assets/showCase1.png'), text: '中办数字图书馆' }, { id: 5, img: require('@/assets/showCase1.png'), text: '中办数字图书馆' }, { id: 6, img: require('@/assets/showCase1.png'), text: '中办数字图书馆' }];
   
 return {img,showCaseBox}
}

Mock.mock('http://localhost:8080/mock/case', page4) 