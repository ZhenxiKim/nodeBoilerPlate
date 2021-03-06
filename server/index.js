const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');//Express 4.16+부터 body파서가 필요없다
const { User } = require("./models/User");

const config = require('./config/key');

//application/x-www-form-urlencoded 분석해서 가져옴
app.use(express.urlencoded({extended: true}));

//application/json 분석해서 가져옴
app.use(express.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connect..'))
.catch(err => console.log(err))

//route
app.get('/',(req,res) => res.send('Hello World~~!'))
app.post('/register',(req,res) => {
    //회원가입할떄 필요한 정보들을 client에서 가져오면 db insert
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.post('/login', (req, res) => {
    //요청된 이메일을 데이터 베이스에서 찾는다.
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))