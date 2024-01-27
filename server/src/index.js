const express = require("express");
const { PORT, CLIENT_URL} = require("./constants");
const app = express();
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");

//import passport middleware
require("./middlewares/passport-middleware");

//initialize middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: CLIENT_URL, credentials: true }))
app.use(passport.initialize());

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