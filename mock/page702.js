const Mock = require('mockjs')
const readfile = function(filePath) {
    
    let xhr = null, okStatus = document.location.protocol === 'file' ? 0 : 200
    xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
    xhr.open('GET', filePath, false)
    xhr.overrideMimeType('text/html;charset=utf-8')
    xhr.send(null)
    return xhr.status === okStatus ? xhr.responseText : null
};

const jobDetails = readfile('static/jobDetails.txt');
const jobRequirement = readfile('static/jobRequirement.txt');



const page702 = function () {
    const details=jobDetails;
    const requirement=jobRequirement;
  
  const img=require('@/assets/joinUs.png');
  
  const job= 'UI设计师';
            const pay='6k-8k';
            const experience= '经验3-5年 / 大专';
            const tags= ['五险一金', '定期体检', '扁平化管理', '午餐补助', '福利多'];
            const name= '陈女士';
            const phone= '010-66897777';
            const address= '北京市海淀区上地信息路12号A206';
            const otherJobs= [{ title: '财务专员', pay: '6k-8k', experience: '经验1-3年', background: '本科', date: '1' }, { title: 'WEB前端开发工程师', pay: '6k-8k', experience: '经验1-3年', background: '本科', date: '1' }, { title: 'PHP开发工程师', pay: '6k-8k', experience: '经验1-3年', background: '本科', date: '1' }];

    
    
   
 return {img,details,requirement,job,pay,experience,tags,name,phone,address,otherJobs}
}

Mock.mock('http://localhost:8080/mock/joinUsDetail', page702) 