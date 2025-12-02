const mongoose = require('mongoose')
const projectModel = require('../models/project')

const featureCreation = async (req,res) =>{
    const projectId = req.params.prjId
    const {FName,FDescription} = req.body

    const project = await projectModel.findById(projectId);
    project.features.push({FName,FDescription});
    await project.save()

    res.json({message:"Created the Feature data"})

}

const featureReading = async (req,res) =>{
    res.json({message:"this is the data"})
}

const featureUpadation = async (req,res) =>{
    res.json({message:"this is the data"})
}

const featureDeletion = async (req,res) =>{
    const prjId = req.params.prjId
    const fetId = req.params.fetId
    const project = await projectModel.findById(prjId);
    project.features.id(fetId).deleteOne()
    await project.save()

    res.json({message : "deleted the feature"});
}

module.exports = { 
    featureCreation,
    featureDeletion,
    featureReading,
    featureUpadation
}