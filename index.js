const express = require("express");
const mongoose = require("mongoose");
const ticketRouter = require("./Routes/ticket.route");
const userRouter = require("./Routes/user.route");

const app = express();

const corsMiddleware = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
};

app.use(corsMiddleware);

app.use(express.json());

app.use("/api/ticket", ticketRouter);

app.use("/api/user", userRouter);

mongoose
  .connect(
    "mongodb+srv://saiteja8906:LZE2v4oO2bB9iQec@jiradb.154itxh.mongodb.net/?retryWrites=true&w=majority&appName=JiraDB"
  )
  .then(() => console.log("DB Connected!"))
  .catch(() => console.log("DB Connection Error!"));

app.listen(3001);
