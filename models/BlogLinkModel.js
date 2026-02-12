import mongoose from "mongoose";

const blogLinkSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model("BlogLink", blogLinkSchema);