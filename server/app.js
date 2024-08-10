if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require('express');
const cors = require("cors");
const router = require("./routers");
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(router)

app.listen(port, () => {
  console.log(`test fullstack ${port}`)
})