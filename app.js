const express = require('express');
const usermodel = require('./usermodel');
const app = express()
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send("Hello Boys")
})

app.get('/create', async (req, res) => {
    let createUser = await usermodel.create({ name: "Sujoy Das", username: "devsujoy36", email: "sujoydaspc2023@gmail.com", })
    res.send(createUser);
})

app.get('/update', async (req, res) => {
    let updateUser = await usermodel.findOneAndUpdate({ username: "devsujoy36" }, { name: "Sourav Das" }, { new: true })
    res.send(updateUser);
})

app.get('/read', async (req, res) => {
    let users = await usermodel.findOne({username: "devsujoy36"})
    res.send(users)
})

// usermodel.find() ekta Array dey 
// usermodel.findOne() ekta Object dey 

app.listen(port, () => console.log(`Server is running port: ${port}`))
