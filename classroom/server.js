const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require('path');

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Session and flash configuration
const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) =>{
    res.locals.successMsg =req.flash("success"); 
    res.locals.errorMsg = req.flash("error") ;
    next();
});


// Handle the register route and save the session name
app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    if(name === "anonymous"){
        req.flash("error", "user not registered");
    } else{
        req.flash("success", "User registered successfully!");
    }
    res.redirect("/hello");
});

// Handle the hello route and render the EJS template
app.get("/hello", (req, res) => {
    res.render("page.ejs", { name: req.session.name });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
