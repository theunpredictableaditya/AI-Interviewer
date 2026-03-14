import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

/**
 * @description To Connect The Bakend With Database
 */
const dbConnection = async () => {
try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("\n Database Connection Established SuccessFully");                     
} catch (error) {
    console.log("Error Occured While Connecting To Database", error);
    process.exit(1);
}
}

export default dbConnection;