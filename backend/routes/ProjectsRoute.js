import express from "express";
import { getProjects, getProjectById, addProject, updateProject, deleteProject } from "../controllers/ProjectController.js";

const Route = express.Router()

Route.get("/projects", getProjects);
Route.get("/project/:id", getProjectById);
Route.post("/project/add", addProject);
Route.patch("/project/update/:id", updateProject);
Route.delete("/project/delete/:id", deleteProject);

export default Route