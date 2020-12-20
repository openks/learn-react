const express = require('express')
const mongoose = require('mongoose')
// 链接数据库
const DB_URL = 'mongodb://127.0.0.1:27017/lts_personal'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log('链接成功')
})
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
})
const User = mongoose.model('user_for_react', UserSchema)
// 新增保存
// const zs = new User({ name: 'zs_' + Math.floor(Math.random() * 100), age: 10 })
User.create(
  { name: 'zs_' + Math.floor(Math.random() * 100), age: 10 },
  function (err, doc) {
    console.log('doc', doc)
  },
)
// 删除
// User.deleteOne({ name: 'zs2' }, function (err, doc) {
//   console.log(doc)
// })
// 更新
// User.updateOne({ name: 'zs_41' }, { $set: { age: 20 } },function(err,doc){
//     console.log("更新成功",doc)
// })
const app = express()
app.get('/', function (req, res) {
  res.send('<h1>hello</h1>')
})
app.get('/data', function (req, res) {
  // 查找
  User.find({}, function (err, doc) {
    res.json(doc)
  })
})
app.listen(9099, function () {
  console.log('node app start at 9099')
})
