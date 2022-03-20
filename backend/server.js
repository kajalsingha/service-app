const express = require("express");
const dotenv = require("dotenv");

const app = express(); // main thing
dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`started ${PORT}`));
