import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";
import dbConnection from "./db/dbConnection.js";
import { heygemini } from "./services/ai.services.js";

dbConnection().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
    .on(("error"), (err) => {
        console.log("Error Occured With Connecting To Database");
    });

    // heygemini();
})
.catch((err) => {
    console.log("Error Ocuured While Connecting With Database", err);
})