const port = 3000;

const express = require('express');
const cookieParser = require('cookie-parser')
const path = require('path')
const ejs = require('ejs');

const app = express();

app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/public')))
/*
    瀏覽器有時候會自動在網址末尾加"/"
    導致無法訪問http://localhost:3000/sum.html
*/

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.send('Hello, My Server!')
}) 

app.get('/getData', (req, res) => {
    const { number } = req.query;
    if(!number){
        res.send('Lack of Parameter')
    }else if(number === 'POSITIVE_INTEGER'){
        res.send(`1+2+....+${number}`)
    }else if(isNaN(number) || number == 0){//字串0或數字0都不要
        res.send('Wrong Parameter')
    }else{
        let sum = 0;
        for(let i = 1; i <= number; i++){
            sum += i;
        }
        res.send(`${sum}`)
    }
})

app.get('/myName', (req, res) => {
    let {userName} = req.cookies
    if(userName){
        res.render('myName', {userName})   
    }else{
        res.redirect('/trackName')
    }
})

app.get('/trackName', (req, res) => {
    const {name} = req.query
    res.cookie('userName', name)
    if(name){
        res.redirect('/myName')
    }else{
        res.render('trackName')
    } 
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})