import Project from "../models/ProjectModel.js";
import path from "path";
import fs from "fs"


//Show Project
export const getProjects = async(req, res) => {
    try {
        const response = await Project.findAll()     
        res.status(200).json(response);                                       
    } catch (error) {
        console.log(error.message);
    }
}

//Show Project By ID
export const getProjectById = async (req, res) => {
    try {
        const response = await Project.findOne({
        where: {
            id: req.params.id
        }
    }); 
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

//Add Project
export const addProject = async(req, res) => {
    if(req.files === null) {
        return res.status(400).json({msg: "No File Uploaded!"})
    }
    const title = req.body.title;
    const description = req.body.description;
    const stack = req.body.stack;
    const source = req.body.source;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const formatImage = ['.png','.jpg','.jpeg']

    if(!formatImage.includes(ext.toLowerCase())) {
        return res.status(422).json({msg: "Invalid Image"})
    }

    if(fileSize > 5000000) {
        return res.status(422).json({msg: "Image must be less than 5MB"})
    }

    file.mv(`./public/images/${fileName}`, async(err) => {

        if(err) {
            return res.status(500).json({msg: err.message});
        }

        try {
            await Project.create({
                title: title,
                Image: fileName,
                url: url,
                description: description,
                stack: stack,
                source: source
            });
            res.status(201).json({msg: "Project Added!"})
        } catch (error) {
            console.log(error.message);
        }
    })
}

//Update Project
export const updateProject = async (req, res) => {
    const project = await Project.findOne({
        where: {
            id: req.params.id
        }
    });

    if(!project) {
        return res.status(404).json({msg: "Not Data Found"})
    }

    let fileName = "";

    if(req.files === null) {
        fileName = Project.Image;
    }else {
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
          
        const formatImage = ['.png','.jpg','.jpeg']

        if(!formatImage.includes(ext.toLowerCase())) {
            return res.status(422).json({msg: "Invalid Image"})
        }

        if(fileSize > 5000000) {
             return res.status(422).json({msg: "Image must be less than 5MB"})
        }

        const filePath = `./public/images/${project.Image}`
        fs.unlinkSync(filePath)

        file.mv(`./public/images/${fileName}`, async(err) => {
            if(err) {
                return res.status(500).json({msg: err.message});
            }
        });
    }
    
    const title = req.body.title;
    const description = req.body.description;
    const stack = req.body.stack;
    const source = req.body.source;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    try {
        await Project.update({
            title: title,
            description: description,
            stack: stack,
            source: source,
            url: url,
            Image: fileName
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Project Updated!"});
    } catch (error) {
        console.log(error.message);
    }
}

//Delete Project
export const deleteProject = async (req, res) => {
    const project = await Project.findOne({
        where: {
            id: req.params.id
        }
    });

    if(!project) {
        return res.status(404).json({msg: "Not Data Found"})
    }

    try {
        const filePath = `./public/images/${project.Image}`
        fs.unlinkSync(filePath)

        await Project.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Project Deleted!"})
    } catch (error) {
        console.log(error.message); 
    }
}