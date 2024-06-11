import express from 'express'
import { Router } from 'express';
import { Content } from '../models/index.js';
import { io } from "../services/socket.js";

// Create a new tweet
const createTweet = async (req, res) => {
    try {
        const tweet = await Content.create(req.body);

        // Emet un evvénement websocket pour informer les clients
        io.emit('newTweet', response);

        res.status(201).json(tweet);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all tweets
const getAll =  async (req, res) => {
    try {
        const tweets = await Content.findAll();
        res.status(200).json(tweets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a tweet by id
const getById = async (req, res) => {
    try {
        const tweet = await Content.findByPk(req.params.id);
        if (tweet) {
            res.status(200).json(tweet);
        } else {
            res.status(404).json({ error: 'Tweet not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a tweet by id
const updateTweet = async (req, res) => {
    try {
        const tweet = await Content.findByPk(req.params.id);
        if (tweet) {
            await tweet.update(req.body);
            res.status(200).json(tweet);
        } else {
            res.status(404).json({ error: 'Tweet not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a tweet by id
const deleteTweet = async (req, res) => {
    try {
        const tweet = await Content.findByPk(req.params.id);
        if (tweet) {
            await tweet.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Tweet not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export {
    getAll,
    createTweet,
    getById,
    updateTweet,
    deleteTweet
}