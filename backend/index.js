import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import ProjectsRoute from "./routes/ProjectsRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(ProjectsRoute);

app.get("/", (req, res) => {
  res.send("Backend online...");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
