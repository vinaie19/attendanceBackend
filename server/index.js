import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./routes/routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/post", postRouter);

app.get("/", (req, res) => {
  res.send("This is attendance end point");
});

mongoose
  .connect(
    "mongodb",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(3000, function () {
      console.log("server started");
    });
  })

  .catch((error) => console.log(error.message));
