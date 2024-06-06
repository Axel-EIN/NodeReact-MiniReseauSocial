import { User } from '../models/index.js';

export const getAll = async (req, res) => {
    try {
        // On récupère tous les articles
        const articles = await User.findAll()
        // On renvoie les articles avec un statut 200
        res.status(200).json(articles)
    } catch (err) {
        // En cas d'erreur, on renvoie un statut 500 avec le message d'erreur
        res.status(500).json({ error: "Error lors de la récupération" })
    }
}