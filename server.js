import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import qnaLinkRoute from './routes/qnaLinkRoute.js';
import blogLinkRouter from './routes/blogLinkRoute.js';

dotenv.config();

const app = express();
app.use(json());
app.use(cors());


//routes
app.use('/api/qna', qnaLinkRoute);
app.use('/api/blog', blogLinkRouter);

const port = process.env.PORT || 4000;

app.listen(port, async () => {
    try {
        await connectDB();
        console.log("server running on ", port);
    } catch (err) {
        console.error("Failed to start server:", err);
    }
})
