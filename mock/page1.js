const Mock = require('mockjs')




const page1 = function () {

  
 
  const slideImg= require('@/assets/slideImg.png');
  
  const fourbox1=[{ title: 'PHP岗位正在热聘中...', content: '公可待遇福利好，每年有一次旅游，提供住宿...', date: '2015-06-28' }, { title: 'PHP岗位正在热聘中...', content: '公可待遇福利好，每年有一次旅游，提供住宿...', date: '2015-06-28' }, { title: 'PHP岗位正在热聘中...', content: '公可待遇福利好，每年有一次旅游，提供住宿...', date: '2015-06-28' }];
     const  fourbox4={ title: '环保部HCFC业务平台', content: '生态环境部贯彻落实党中央关于生态环境保护工作的方针政策和决策部界，在履行职责过程中坚持和加强党对生态环境保护工作的集中统一领导' };
     const  boxGridContent1=[require('@/assets/logo1.png'), require('@/assets/logo2.png'), require('@/assets/logo3.png'), require('@/assets/logo4.png'), require('@/assets/logo5.png'), require('@/assets/logo6.png'), require('@/assets/logo7.png'), require('@/assets/logo8.png'),];
     const  sideNavTitles=['解决方案', '系列产品', '软件模块', '业务服务', '相关研究'];
     const  fourbox2=require('@/assets/fourbox2.png');
     const fourbox3= require('@/assets/fourbox3.png'); 
    
 return {slideImg,fourbox1,fourbox2,fourbox3,fourbox4,boxGridContent1,sideNavTitles}
}

Mock.mock('http://localhost:8080/mock/index', page1) 