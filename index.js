const express = require('express');
const app = express();

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
})

app.listen(3000, () => console.log("Listening to port 3000"));