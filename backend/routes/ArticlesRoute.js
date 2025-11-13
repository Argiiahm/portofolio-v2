import { getArticles, getArticlesById, createArticle, updateArticle, deleteArticle, validateArticle } from "../controllers/ArticlesController.js";
import express from "express"

const Route = express.Router()

Route.get("/articles",getArticles)
Route.get("/articles/:id",getArticlesById)
Route.post("/article/create", validateArticle, createArticle)
Route.patch("/article/update/:id", validateArticle, updateArticle)
Route.delete("/article/delete/:id", deleteArticle)

export default Route