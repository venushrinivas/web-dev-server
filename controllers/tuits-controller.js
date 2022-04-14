import * as tuitsDao from "../models/tuits-dao.js";

const createTuit = async (req, res) => {
    try {
        const newTuit = req.body;
        newTuit.likes = 0;
        const insertedTuit = await tuitsDao.createTuit(newTuit);
        res.json(insertedTuit);
    } catch ( e) {
        console.log(e);
    }
}

const getTuits = async (req, res) => {
    let tweets = await tuitsDao.findAllTuits();
    res.json(tweets);
}

const updateTuit = async (req, res) => {
    try {
        const tuitdIdToUpdate = req.params.tuitid;
        const updatedTuit = req.body;
        const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
        res.send(status);
    } catch (e) {
    }
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tuitid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
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