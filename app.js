require("dotenv").config();
const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    Client = require("./models/client"),
    Order = require("./models/order"),
    Store = require("./models/store"),
    { writeJsonFile, getNowTimeStamp } = require("./scripts"),
    hbs = require("express-handlebars");

const port = process.env.PORT || 3000,
    /* host = process.env.HOST || "localhost", */
    host = "localhost",
    username = process.env.USERNAME,
    password = process.env.PASSWORD,
    dbUri = process.env.DBURI;
app.set("views", "./views");
app.engine(
    "hbs",
    hbs.engine({
        extname: "hbs",
        layoutsDir: "./views/layouts",
        defaultLayout: "index"
    })
);
app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

/* app.use((req, res, next) => {
    let ts = getNowTimeStamp();
    writeJsonFile("logger", `${ts.toString()} - ${req.method} ${req.url} - ${res.statusCode}`);
    next();
}); */

app.get("/", (req, res) => {
    res.render("main");
});
app.get("/clients", (req, res) => {
    Client.find({})
        .lean()
        .then((clients) => {
            console.info(clients);
            res.render("clients", { clients });
        });
});
app.get("/stores", (req, res) => {
    Client.find({}, () => {
        res.render("stores");
    });
});
app.get("/orders", (req, res) => {
    Client.find({}).then(() => {
        res.render("orders");
    });
});
app.post("/addClient", (req, res) => {
    let client = new Client(req.body);
    client.save().then((err, client) => {
        Client.find({})
            .lean()
            .then((clients) => {
                console.info(clients);
                res.render("clients", { clients });
            });
    });
});

mongoose
    .connect(dbUri)
    .then(
        app.listen(port, () => {
            console.info(`Server up @ http://${host}:${port}`);
        })
    )
    .catch((err) => console.log(err));
