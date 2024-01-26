const express = require("express");
const { PORT } = require("./constants");
const app = express();

//import routes
const authRoutes = require("./routes/auth");

//initialize routes
app.use("/api", authRoutes)


//app start
const appStart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
        
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

appStart();