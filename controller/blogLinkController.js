import BlogLink from "../models/BlogLinkModel.js";
import connectDB from "../config/db.js";

const createLink = async (req, res) => {
    try {
        await connectDB();
        const { heading, description, link } = req.body;
        if (!heading || !description || !link) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const blogLink = new BlogLink({ heading, description, link });
        await blogLink.save();
        return res.status(201).json({ message: "Link created successfully", blogLink });
    } catch (error) {
        console.error("Error creating link:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const getLink = async (req, res) => {
    try {
        await connectDB();
        const blogLinks = await BlogLink.find();
        return res.status(200).json({ blogLinks });
    } catch (error) {
        console.error("Error getting links:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default { createLink, getLink };