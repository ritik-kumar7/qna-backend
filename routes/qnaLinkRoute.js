import express from 'express'
import qnaLinkContoller from '../controller/qnaLinkContoller.js';

const qnaLinkRoute = express.Router();

qnaLinkRoute.post("/create", qnaLinkContoller.createLink);
qnaLinkRoute.get("/send", qnaLinkContoller.sendLink);

export default qnaLinkRoute;