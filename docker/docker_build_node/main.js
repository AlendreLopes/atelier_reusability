const app = require('express')();

const port = 8000;

app.get('/', (req, res) =>{
    res.send("<h1>Hi</h1>");
});

app.get('/contact', (req, res) =>{
    res.send("<h1>Contact</h1>");
})

app.listen(port);
