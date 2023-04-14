require("dotenv").config()

const port = process.env.PORT

const express = require("express")

const router = require("./routes")

const app = express()

// --- Middlewares --- // 
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// --- Templating --- //
app.set("view engine", "pug")
app.set("views", "./views") 

// --- Routing --- //
app.use(router);

app.listen(port, () => {
    console.log(`Express server launched on port ${port}`)
})