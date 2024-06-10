
import { User, Inbox } from '../models/index.js'; 


export const getAllMessages = async (req, res) => {
  try {
    const inbox1 = await Inbox.findAll({
      where: {
        inboxFromId: req.user.id
      },
    });
    const inbox2 = await Inbox.findAll({
      where: {
        inboxToId: req.user.id
      },
    });
    const inbox3 = [...inbox1, ...inbox2]
    res.status(200).json(inbox3);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la récupération des messages" });
  }
};



export const addMessage = async (req, res) => {
  try {

    const body2 = { ...req.body, inboxFromId: req.user.id, inboxToId:req.params.id }

    const message = await Inbox.create(body2);

    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la création du message" });
  }
};
