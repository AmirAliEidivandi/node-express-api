const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const winston = require("winston");
require("dotenv").config();

const connectDB = require("./app/db/connect");
const usersRouter = require("./app/routes/users.routes");
const notFound = require("./app/error/not-found");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/users", usersRouter);
app.get("/", (req, res) => res.send("Hello World!"));

// error
app.use(notFound);

// create logger
const logger = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize({ all: true })),
        }),
        new winston.transports.File({ filename: "error.log", level: "error" }),
    ],
    exceptionHandlers: [new winston.transports.File({ filename: "exception" })],
});

const PORT = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => logger.info(`Example app listening on PORT ${PORT}!`));
    } catch (error) {
        logger.error(error.message);
    }
};

start();
