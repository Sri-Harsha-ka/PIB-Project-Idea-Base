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

// Routes of project ( CURD Op)
route.post('/create',apiHandler.projectCreation)
route.get('/read',apiHandler.projectReading)
route.post('/update/project/:prjId',apiHandler.projectUpdation)
route.post('/delete/project/:prjId',apiHandler.projectDeletion)

// Routes of features ( CURD Op)
route.post('/create/:prjId' , featureHandler.featureCreation)
route.get('/read/:prjId',featureHandler.featureReading)
route.post('/update/feature/:prjId/:fetId' , featureHandler.featureUpadation)
route.post('/delete/feature/:prjId/:fetId',featureHandler.featureDeletion)



module.exports = route