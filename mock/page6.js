const Mock = require('mockjs')




const page6 = function () {

  
  const img=require('@/assets/news.png');
  
  
 const news=[{ id: 1, title: '你所理解的IT到底是什么?', content: '互联网技术定义:互联网技术指在计算机技术的基础上开发建立的一种信息技术，直译:nternet Technology; 简称:IT.' ,date:'27',year:'2020',month:'08'}, { id: 2, title: '你所理解的IT到底是什么?', content: '互联网技术定义:互联网技术指在计算机技术的基础上开发建立的一种信息技术，直译:nternet Technology; 简称:IT.',date:'28',year:'2021',month:'07' }];
    
 return {img,news}
}

Mock.mock('http://localhost:8080/mock/news', page6) 