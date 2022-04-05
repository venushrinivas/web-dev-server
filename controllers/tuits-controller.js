import tuits from "./tuits.js";

let tweets = tuits;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    tweets = [newTuit, ...tweets];
    res.json(newTuit);
}

const getTuits = (req, res) => {
    res.json(tweets);
}

const updateTuit = (req, res) => {
    tweets = tweets.map(tweet => {
        if (tweet._id === req.params.tuitid) {
            return req.body;
        } else {
            return tweet;
        }
    });
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    tweets = tweets.filter(tweet => tweet._id !== req.params.tuitid);
    res.sendStatus(200);
}

const tuitController = (app) => {
    app.get('/api/tuits', (req, res) => {
        getTuits(req, res);
    });
    app.post('/api/tuits', (req, res) => {
        createTuit(req, res);
    });
    app.put('/api/tuits/:tuitid', (req, res) => {
        updateTuit(req, res);
    });
    app.delete('/api/tuits/:tuitid', (req, res) => {
        deleteTuit(req, res);
    });
}

export default tuitController;