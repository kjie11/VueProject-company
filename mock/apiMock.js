const Mock = require('mockjs')




const apiMock = function () {

  
   const companyLogo=require('@/assets/companyLogo.png');
 return {companyLogo}
}

Mock.mock('http://localhost:8080/mock/apiMock', apiMock) 