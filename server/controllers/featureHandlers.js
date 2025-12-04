const projectModel = require('../models/project')

const featureCreation = async (req, res) => {

    try {
        const projectId = req.params.prjId
        const { FName, FDescription } = req.body

        const project = await projectModel.findById(projectId);
        project.features.push({ FName, FDescription });
        await project.save()

        res.json({ message: "Created the Feature data" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Error Occured" })
    }

}

const featureReading = async (req, res) => {
    try {
        const prjId = req.params.prjId
        const prj = await projectModel.findById(prjId);

        res.json(prj.features)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Error Occured" })
    }
}

const featureUpadation = async (req, res) => {
    try {
        const prjId = req.params.prjId
        const fetId = req.params.fetId
        const prj = await projectModel.findById(prjId)
        const fet = await prj.features.id(fetId)

        const { FName, FDescription } = req.body;

        fet.FName = FName;
        fet.FDescription = FDescription;
        await prj.save();

        res.status(200).json({ message: " Success" })


    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Error Occured in server" })
    }
}

const featureDeletion = async (req, res) => {

    try {
        const prjId = req.params.prjId
        const fetId = req.params.fetId
        const project = await projectModel.findById(prjId);
        project.features.id(fetId).deleteOne()
        await project.save()

        res.json({ message: "deleted the feature" });
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Error Occured" })
    }
}

module.exports = {
    featureCreation,
    featureDeletion,
    featureReading,
    featureUpadation
}