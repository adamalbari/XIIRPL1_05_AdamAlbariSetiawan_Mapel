import express from 'express'
const app = express();
import connectDB from "./config/mongoose.js";
import userrouter from "./router/router.js";
const port = 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(userrouter);


app.get("/", (req, res) => {
  res.send("Adam");
});


connectDB();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
