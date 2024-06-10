import express from 'express'
import { Router } from 'express';
import Tweet from '../models/content.model'

// Create a new tweet
router.post('/', async (req, res) => {
    try {
        const tweet = await Tweet.create(req.body);
        res.status(201).json(tweet);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all tweets
router.get('/', async (req, res) => {
    try {
        const tweets = await Tweet.findAll();
        res.status(200).json(tweets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a tweet by id
router.get('/:id', async (req, res) => {
    try {
        const tweet = await Tweet.findByPk(req.params.id);
        if (tweet) {
            res.status(200).json(tweet);
        } else {
            res.status(404).json({ error: 'Tweet not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a tweet by id
router.put('/:id', async (req, res) => {
    try {
        const tweet = await Tweet.findByPk(req.params.id);
        if (tweet) {
            await tweet.update(req.body);
            res.status(200).json(tweet);
        } else {
            res.status(404).json({ error: 'Tweet not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a tweet by id
router.delete('/:id', async (req, res) => {
    try {
        const tweet = await Tweet.findByPk(req.params.id);
        if (tweet) {
            await tweet.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Tweet not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


