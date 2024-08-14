const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();

// Use CORS middleware before defining routes
const corsOptions = {
  origin: "https://book-snap-frontend.vercel.app", 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware setup
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Route setup
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

// Define port and start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
