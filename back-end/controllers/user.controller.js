import { ENV } from "../config/env.js";
import { User } from "../config/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Inscription / Ajout utilisateur
const register = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await User.create({ ...req.body, password: hashedPassword });
        res.status(201).json("User has been created!");
    } catch (error) { console.log(error); }
}

// Récupération de tout les Utilisateurs
const getAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) { console.log(error); }
}

// Récupération d'un seul utilisateur par son id clé primaire
const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        if (!user)
            return res.status(404).json("User not found !");
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
}

// Login de l'utilisateur
const login = async (req, res) => {
    try {

        const user = await User.findOne({
            where:
                { email: req.body.email }
        });

        if (!user)
            return res.status(404).json("User not found !");

        const comparePassword = await bcrypt.compare(req.body.password, user.password);

        if (!comparePassword)
            return res.status(400).json("Wrong Credentials ! ");

        const token = jwt.sign(
            { id: user.id },
            ENV.TOKEN,
            { expiresIn: "24h" }
        );

        res
            .cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json(user);
    } catch (error) {
        console.log(error);
    }
}

export {
    login,
    register,
    getAll,
    getById
}