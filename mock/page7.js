const Mock = require('mockjs')




const page7 = function () {

  
  const img=require('@/assets/joinUs.png');
  
  
  const phoneLogo=require('@/assets/phone.png');
  const emailLogo=require('@/assets/email.png');
 const boxLeftContent=[{title: '联系电话：',content:'01066897777'},{title:'联系人：',content:'陈女士'}];
     const boxRightContent=[{title:'人力资源部邮箱E-Mail:',content:'1160610077@qq.com'}];
    const people=[{job:'财务专员',pay:'6K-8K',detail:'西安/经验/3-5年/大专',date:'1天前发布'},{job:'UI设计师',pay:'6K-8K',detail:'西安/经验/3-5年/大专',date:'1天前发布'},{job:'WEB前端开发工程师',pay:'6K-8K',detail:'西安/经验/3-5年/大专',date:'1天前发布'},{job:'PHP开发工程师',pay:'6K-8K',detail:'西安/经验/3-5年/大专',date:'1天前发布'}];
     const tags=['定期体检','带薪年假','五险一金','周末双休'];
    
 return {img,phoneLogo,emailLogo,boxLeftContent,boxRightContent,people,tags}
}

Mock.mock('http://localhost:8080/mock/joinUs', page7) 