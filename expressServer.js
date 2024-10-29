import express from "express";
const app = express();
app.get("/users/:username/settings", (req, res) => {
  res.send("About page");
});
app.post("/about", (req, res) => {
  res.send("About Form");
});


const PORT = 3000;
app.listen(PORT, () =>
  console.log("Server Started at", `http://localhost:${PORT}`)
);