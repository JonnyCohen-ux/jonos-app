const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(
  express.static(path.join(__dirname, "client/jonos-app/dist/jonos-app"))
);

app.get("*", (req, res) => {
  res.sendFile(path.resolve("client/jonos-app/dist/jonos-app/index.html"));
});
const PORT = process.env.PORT || 7788;

app.listen(PORT, () => console.log("connected"));
// תעשה אבל למקרה ביטחון
