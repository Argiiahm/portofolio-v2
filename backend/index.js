import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors"
import ProjectsRoute from "./routes/ProjectsRoute.js"

const app = new express();

app.use(cors());
app.use(express.json())
app.use(fileUpload())

app.use(express.static('public'))
app.use(ProjectsRoute)


const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
    console.log(`Server Running On Port ${PORT}`);
})