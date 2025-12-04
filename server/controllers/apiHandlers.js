const mongoose = require('mongoose')
const projectModel = require('../models/project')

// In Form - Project
// 1.Project Name
// 2.Project Domain
// 3.Categorie
// 4.Rating
// 5.Relevance
// 6.Description

// For Features
//   1.Feature Name
//   2.Feature Description

const projectCreation = async (req, res) => {

    const { Name, Domain, Categorie, Rating, Relevance, Description } = req.body;

    try {
        const data = await projectModel.create({
            Name,
            Domain,
            Categorie,
            Rating,
            Relevance,
            Description
        })

        res.status(201).send(`${Name} prj Has been Created`)

    } catch (err) {
        res.status(500).redirect('/error')
    }

}

const projectReading = async (req, res) => {
    try {
        const data = await projectModel.find();
        res.json(data);
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Error Occured" })
    }
}

const projectUpdation = async (req, res) => {
    try {
        const prjId = req.params.prjId
        const { Name, Domain, Categorie, Rating, Relevance, Description } = req.body;

        const prjUp = await projectModel.findByIdAndUpdate(prjId, {
            Name,
            Domain,
            Categorie,
            Rating,
            Relevance,
            Description
        })

        res.json({ "message": "Succuss" })
    } catch (err) {
        console.error(err)
    }
}

const projectDeletion = async (req, res) => {
    try {
        const prjId = req.params.prjId
        await projectModel.findByIdAndDelete(prjId)

        res.json({ message: "Project is deleted" })
    } catch (err) {
        console.error(err)
        return res.json({ failed: "error occured" })
    }
}

module.exports = {
    projectCreation,
    projectDeletion,
    projectReading,
    projectUpdation
}