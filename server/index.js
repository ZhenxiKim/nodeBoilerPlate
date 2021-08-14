const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');//Express 4.16+부터 body파서가 필요없다
//const { User } = require("./User");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://antock:Antock1026!!@cluster0.esjyr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connect..'))
.catch(err => console.log(err))

//route
app.get('/',(req,res) => res.send('Hello World'))
// app.post('/register',(req,res) => {
//     //회원가입할떄 필요한 정보들을 client에서 가져오면 db insert
//     const user = new User(req.body)
//     user.save((err, userInfo) => {
//         if(err) return res.json({ success: false, err})
//         return res.status(200).json({
//             success: true
//         })
//     })
// })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))