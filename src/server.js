
//Server
const express = require('express')
const server = express()


const { 
    PageGiveClasses,
    PageStudy,
    Pagelanding,
    saveClasses
} = require("./pages") 


//settings nunjucks (Template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.urlencoded({ extended: true}))
.use(express.static("public"))
.get("/", Pagelanding)
.get("/study", PageStudy)
.get("/give-classes", PageGiveClasses)
.post("/save-classes",saveClasses)
.listen(5500)







