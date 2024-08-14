const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const corsOptions = {
  origin: "https://book-snap-frontend.vercel.app", // Replace with your frontend URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running at ${port} http://localhost:3000`);
});
