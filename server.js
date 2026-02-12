import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import qnaLinkRoute from './routes/qnaLinkRoute.js';

dotenv.config();

const app = express();
app.use(json());
app.use(cors());


//routes
app.use('/api/qna', qnaLinkRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    connectDB();
    console.log("server running on ", port);
})
