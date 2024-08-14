const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running at ${port} http://localhost:3000`);
});
