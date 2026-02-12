import mongoose from "mongoose";

const qnaSchema = new mongoose.Schema({
    topic: {
        type: String,

    },
    link: {
        type: String
    }
}, { timestamps: true })

const QnaLink = mongoose.model("QnaLink", qnaSchema);
export default QnaLink;