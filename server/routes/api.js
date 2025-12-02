const express = require('express')
const route = express.Router()
const apiHandler = require('../controllers/apiHandlers')
const featureHandler = require('../controllers/featureHandlers')

route.get('/',(req,res)=>{
    res.send("This is a api Route");
});

route.get('/error',(req,res)=>{
    res.send("Error occured")
})

route.post('/create',apiHandler.projectCreation)
route.post('/create/:prjId' , featureHandler.featureCreation)

route.get('/read',apiHandler.projectReading)
route.get('/read/:prjId',featureHandler.featureReading)

route.post('/update/project/:prjId',apiHandler.projectUpdation)
route.post('/update/feature/:prjId/:fetId' , featureHandler.featureUpadation)

route.post('/delete/project/:prjId',apiHandler.projectDeletion)
route.post('/delete/feature/:prjId/:fetId',featureHandler.featureDeletion)

module.exports = route