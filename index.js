const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.send("Thank you for calling me");
});
app.get('/fruits/banana', (req, res)=>{
    res.send({fruit: 'banana', quantity: 2000, price: 5000});
})
const users = ['atiq', 'john', 'alberto', 'david', 'tisco', 'costa']
app.get('/users/:id', (req, res) =>{
    const userId = req.params.id;
    const name = users[userId];
    res.send({userId,name});
});

app.post('/addUser', (req, res) =>{
    const user = req.body;
    user.id = 55;
    res.send(user);
    // res.send(req.body);
})

app.listen(3000, () => console.log("Listening to port 3000"));