import Articles from "../models/ArticlesModel.js";
import { body, validationResult } from "express-validator";

//Validasi Article
export const validateArticle = [
    body("title").notEmpty().withMessage("title is required!"),
    body("content").notEmpty().withMessage("content is required!"),
    body("author").notEmpty().withMessage("author is required!")
];


export const getArticles = async(req, res) => {
    try {
        const response = await Articles.findAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getArticlesById = async (req, res) => {
    try {
        const response = await Articles.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const createArticle = async (req, res) => {

    const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }

    try {
        await Articles.create(req.body)
        res.status(201).json({msg: "Article Has been Created!"})
    } catch (error) {
        console.log(error)
    }
}

export const updateArticle = async (req, res) => {
   const errors = validationResult(req);
   if(!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})   
   }

   try {
     await Articles.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({msg: "Article Has Been Updated!"})
   } catch (error) {
      console.log(error);
   }
}

export const deleteArticle = async (req, res) => {
    try {
        await Articles.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Article Deleted!"})
    } catch (error) {
        console.log(error);
    }
}