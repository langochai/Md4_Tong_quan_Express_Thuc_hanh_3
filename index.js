const express = require('express');
const app = express();
const PORT = 8000;
const products = [
    {
        title: 'iphone 14',
        src: 'images/iphone.jpeg'
    },
    {
        title: 'oppo',
        src: 'images/oppo.png'
    },
    {
        title: 'samsung',
        src: 'images/samsung.jpeg'
    },
    {
        title: 'xiaomi',
        src: 'images/xiaomi.png'
    }
];
app.set('views','./views');
app.set('view engine','ejs');
app.use(express.static('public'));
app.get('/', ((req, res) => {
    res.render('home', {data: products})
}))
app.listen(PORT,()=>{
    console.log(`segs at port ${PORT}`)
});