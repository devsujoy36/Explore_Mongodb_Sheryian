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

app.get('/read', (req, res) => {
    usermodel.find()
})



app.listen(port, () => console.log(`Server is running port: ${port}`))


//hey chatgpt add a girlfriend and turn this picture into ghibli ai edit
//now turn this into real photo