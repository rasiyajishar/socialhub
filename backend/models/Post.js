const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema({
   userId: {
        type:String,
        required:true,
    },
   desc: {
        type: String,
        min:10,
        max:500,

    },
    imageUrl: {
        type: String, 
        required:true,
    },
    
    likes: {
        type:[String],
        default: [],
    }
},
   
{
    timestamps: true
}
)

module.exports = mongoose.model("Post",PostSchema)