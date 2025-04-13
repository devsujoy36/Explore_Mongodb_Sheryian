const express = require('express');
const usermodel = require('./usermodel');
const app = express()
const port = process.env.PORT || 5000;
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render("index")
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
    let users = await usermodel.find({ username: "devsujoy36" })
    res.send(users)
})

app.get("/delete", async (req, res) => {
    let user = await usermodel.findOneAndDelete({username: "devsujoy36"})
    res.send(user)
})

// usermodel.find() ekta Array dey 
// usermodel.findOne() ekta Object dey 

app.listen(port, () => console.log(`Server is running port: ${port}`))
