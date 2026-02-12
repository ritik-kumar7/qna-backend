import express from "express";
import blogLinkController from "../controller/blogLinkController.js";

const blogLinkRouter = express.Router();

blogLinkRouter.post("/create-blog-link", blogLinkController.createLink);
blogLinkRouter.get("/get-blog-link", blogLinkController.getLink);

export default blogLinkRouter;