const mongoose = require('mongoose')

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

const featureSchema = mongoose.Schema({
    FName:{
        type:String,
        required:true
    },
    FDescription:{
        type:String,
        required:true
    }
})

const projectSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Domain:{
        type:String,
        default:"None"
    },
    Categorie:{
        type:String,
        required:true
    },
    Rating:{
        type:Number,
        required:true
    },
    Relevance:{
        type:Number,
        default:5
    },
    Description:{
        type:String,
        default:"No Description"
    },
    features:{
        type:[featureSchema]
    }

})

const projectModel = mongoose.model("project",projectSchema)

module.exports = projectModel