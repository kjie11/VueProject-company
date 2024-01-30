const Mock=require('mockjs')
var data=Mock.mock({
    'name': 'John Doe',
  'age|20-30': 25,  // age 的值将固定为 25
  'email': 'john@example.com',
  'gender|1': ['male', 'female'],  // gender 的值将在 'male' 和 'female' 之间固定
  'city': 'New York'
})
console.log(data)
module.exports=function (app){
    app.use('/api/mock',(req,res)=>{
        res.json(data)
    }
    )
}