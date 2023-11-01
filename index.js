const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const PORT = 5002;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use("/api", require('./routes'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
