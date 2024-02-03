const Mock = require('mockjs')




const page8 = function () {

  
  const img=require('@/assets/aboutUs.png');
  
  const companyImg=require('@/assets/company.png');
  const text=['我公司由多位归国留学人员发起创立。致力于数字出版解决方案，BPM信息流程管理解决方案，移动APP开发解决方案，独立开发编辑器，拥有自己的运行环境、虚拟机、动画引擎、脚本引擎。独立研发自由知识产权跨平台虚拟机和程序脚本。公司励志做出世界级的软件产品，让国产软件走向世界!我们有着最优秀的研发经验，市场影响力，产品开发能力，主要客户为出版传媒领域，电子杂志，广告设计，教育培训机构等','企业文化，或称组织文化(Corporate Culture或Organizational Culture)，是一个组织由其价值观信念、仪式、符号、处事方式等组成的其特有的文化形象，简单而言，就是企业在日常运行中所表现出的各方各面。','企业文化，或称组织文化(Corporate Culture或Organizational Culture)，是一个组织由其价值观信念、仪式、符号、处事方式等组成的其特有的文化形象，简单而言，就是企业在日常运行中所表现出的各方各面。'];
  const page8imgs=[require('@/assets/page8img1.png'),require('@/assets/page8img2.png'),require('@/assets/page8img3.png'),require('@/assets/page8img4.png')];
  const page8Address=require('@/assets/page8Address.png');
    
    
 return {img,companyImg,text,page8imgs,page8Address}
}

Mock.mock('http://localhost:8080/mock/aboutUs', page8) 