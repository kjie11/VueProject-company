const Mock = require('mockjs')


const page2 = function () {
 let textList = []
 
 textList=[
    '立道软件的数字出板解决方率是将传统出版的内容与计算机技术相结合，实现内容的数字化，生产模式和远作流程的款字化，传摊频体的数字化和见读消受，学习形态的数字化.',
    '产品的优势:',
    '1.法设一个面向数字出版产品的全生南周期的业务楼式。安现内容的敌字化、生产楼式和运作流程的数字化、传袖载体的数字化和阅读消费、学习形态的数字化。',
    '2.专门为新一代数字内容 出版而设计，提供多形态，多场和多业务的产品模式，用户可以在比特出版中便操的创理时下流行的数字产品并快速发布，同时实现动态内容管理。',
    '3.操供统一而全面的数字内容营理平台，所有数字内容产品都可以拥有最新的信息技术功能，得到最全面的技术服务支持，并且对接册主流的数字产品发布平台《网站、苹果平白、安卓平台、微信公众号、H5、小程序等等)。',
    '4.充分发挥创受其现创总支现。',
  ];
  
  const img=require('@/assets/solution.png');
  const solutionImg=require('@/assets/solutionImg.png');
  choicesList=[{id:1,title:'数字出版'},{id:2,title:'数字教育'},{id:3,title:'识别图片'},{id:4,title:'数字资源管理'},{id:5,title:'政府信息化'},{id:6,title:'图书馆信息化'}];
 return {textList,img,solutionImg,choicesList}
}

Mock.mock('http://localhost:8080/mock/solution', page2) 