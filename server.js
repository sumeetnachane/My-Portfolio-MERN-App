const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

//Dotenv Configuratin
dotenv.config(); //Environmental Variable Configure krna pdta hai const var ke niche hi rahega ye

//rest object
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//static files access
app.use(express.static(path.join(__dirname, "./client/build")));

//Routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//PORT
const PORT = process.env.PORT || 8080;

//Listen
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
