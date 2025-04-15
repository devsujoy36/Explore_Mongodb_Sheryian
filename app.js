const express = require('express');
const path = require('path');
const usermodel = require('./usermodel');
const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render("index")
})

app.post('/create', async (req, res) => {
    let createUser = await usermodel.create({ name: req.body.name, username: req.body.username, email: req.body.email, password: req.body.password })
    res.send(createUser);
})

app.post('/update', async (req, res) => {
    let updateUser = await usermodel.findOneAndUpdate({ username: req.body.username }, { name: req.body.name }, { new: true })
    res.send(updateUser);
})

app.post('/read', async (req, res) => {
    let users = await usermodel.find({ username: req.body.username })
    res.send(users)
})

app.post("/delete", async (req, res) => {
    let user = await usermodel.findOneAndDelete({ username: req.body.username })
    res.send(user)
})

app.listen(port, () => {
    console.log(`Server is running port: ${port}`)
})



//This is the curd oparation in mongodb
