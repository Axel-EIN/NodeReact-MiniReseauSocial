import { Inbox } from '../models/inbox.model.js'
import { User } from '../models/user.model.js'; 


export const getAllMessages = async (req, res) => {
  try {
    const inbox = await Inbox.findAll({
      where: {
        user_id_to: req.user.id,
      },
    });
    res.status(200).json(inbox);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la récupération des messages" });
  }
};


export const addMessage = async (req, res) => {
  try {
    const { text, user_id_to } = req.body;

    const recipient = await User.findByPk(user_id_to);
    if (!recipient) {
      return res.status(404).json({ error: "Utilisateur destinataire non trouvé" });
    }

    const message = await Inbox.create({
      text,
      user_id_from: req.user.id,
      user_id_to,
    });

    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la création du message" });
  }
};
