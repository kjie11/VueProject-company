// const Mock=require('mockjs')
// var data=Mock.mock({
//     'name': 'John Doe',
//   'age|20-30': 25,  
//   'email': 'john@example.com',
//   'gender|1': ['male', 'female'],  
//   'city': 'New York'
// })
// console.log(data)
// module.exports=function (app){
//     app.get('/api/mock',(req,res)=>{
//         res.json(data)
//     }
//     )
// }

// const Mock = require('mockjs') // 引入mockjs

// module.exports = function (app) { // 暴露一个函数，用于拦截请求时触发
//   //监听http请求： app是一个请求实例，.get方法第一个参数传需要拦截的url，第二个参数传一个函数，该函数有两个参数（也可用app.post）
//   app.get('/http:\/\/localhost:8080\/userInfo/', (rep, res) => {
//     // 设置要返回的数据（用mock随机生成的数据）
//     let json = {
//       id: '@id()', // 得到随机的id
//       username: '@cname()', // 随机生成中文名字
//       email: '@email()', // email
//       ip: '@ip()', // ip地址
//       description: '@paragraph()', // 描述
//       date: '@date()' // 随机生成日期
//     }
//     // 通过res.json将上面声明的随机数据转为json并作为请求的返回值返回
//     res.json(Mock.mock(json))
//   })
// }

import {mock} from 'mockjs';
mock("http://localhost:8080/api/mock",{
  "code":0,
  "data":222222222,
  "msg":"success!"
})
