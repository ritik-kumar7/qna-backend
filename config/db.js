import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URL, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log("database connected");
    } catch (error) {
        console.error("error while connecting Database ", error.message);
        throw error;
    }
}

export default connectDB;