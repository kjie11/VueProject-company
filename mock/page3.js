const Mock = require('mockjs')

const readfile = function(filePath) {
    
    let xhr = null, okStatus = document.location.protocol === 'file' ? 0 : 200
    xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
    xhr.open('GET', filePath, false)
    xhr.overrideMimeType('text/html;charset=utf-8')
    xhr.send(null)
    return xhr.status === okStatus ? xhr.responseText : null
};

const paragraph = readfile('static/productContent.txt');


const page3 = function () {
 const para=paragraph;
  
  const img=require('@/assets/product.png');
  const productImg=require('@/assets/productImg.png');
  let choicesList=[];
  choicesList= [
    {id:1,title:'数字出版',choices: ['DPSS媒体资源管理平台', '比特出版']},
    {id:2,title:'出版信息化',choices: ['文件流转信息系统']},
    {id:3,title:'图书馆',choices: ['图书荐购系统']},
    {id:4,title:'教育',choices: ['高校素材征订管理系统', '高等学习e课系统']},
    {id:5,title:'政府企业信息化', choices: ['事项审批业务管理系统']},
    ];
    const titles= ["数字出版", "出版信息化", "图书馆", "教育", "政府企业信息化",];
   
 return {img,productImg,choicesList,para,titles}
}

Mock.mock('http://localhost:8080/mock/product', page3) 