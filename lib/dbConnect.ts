import mongoose, { connection } from "mongoose";
async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI!)
        connection.on('connected',() => {
            console.log("Successfully connected to MongoDB");
        })
        connection.on('error',(error) => {
            console.log(`Failed to connect: ${error}`);
            process.exit(1)
        })
    } catch (error) {
        console.log(`Error connecting to DB: ${error}`);
    }
}
export default connect