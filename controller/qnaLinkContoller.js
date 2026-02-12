import QnaLink from "../models/QnaLinkModel.js";

const createLink = async (req, res) => {
    try {
        const { topic, link } = req.body;

        if (!topic || !link) {
            return res.status(400).json({ message: "Link or Topic are required" });
        }

        const qnaLink = await QnaLink.create({ topic, link });

        return res.status(201).json({ message: "link created", success: true, qnaLink });

    }
    catch (error) {
        console.log("error while creating link", error.message);
        return res.status(500).json({ message: "internal server error" })
    }

}

const sendLink = async (req, res) => {
    try {

        const link = await QnaLink.find();
        if (!link || link.length === 0) {
            return res.status(200).json({ message: "no link found", success: true, link: [] });
        }
        return res.status(200).json({ message: "link sent", success: true, link });

    }
    catch (error) {
        console.error("Error in sendLink:", error);
        return res.status(500).json({ message: "internal server error", error: error.message })

    }
}


export default { createLink, sendLink };