import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            serverSelectionTimeoutMS: 5000 // Timeout faster if no connection available
        });
        console.log("database connected");
    } catch (error) {

        console.log("error while connecting Database ", error.message);

    }
}

export default connectDB;