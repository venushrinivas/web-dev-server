import people from './users/users.js';
let users = people;
const userController = (app) => {
    app.get('/api/users', (req, res) => {
        findAllUsers(req, res)
    });
    app.get('/api/users/:uid', (req, res) => {
        findUsersByUID(req, res);
    });
    app.post('/api/users', (req, res) => {
        createUser(req, res);
    });
    app.delete('/api/users/:uid', (req, res) => {
        deleteUser(req, res);
    });
    app.put('/api/users/:uid', (req, res) => {
        updateUser(req, res);
    });
}

const updateUser = (req, res) => {
    users = users.map(user=> {
        if (user._id === req.params.uid) {
            return req.body;
        }
        return user;
    });
    res.sendStatus(200);
}

const deleteUser = (req, res) => {
    users = users.filter(user => user._id !== req.params.uid);
    res.sendStatus(200);
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

const findUsersByUID = (req, res) => {
    res.json(users.find(person => req.params.uid === person._id));
}

const findAllUsers = (req, res) => {
    const type = req.query.type;
    if (type) {
        res.json(findUsersByType(type));
        return;
    }
    res.json(users);
}

const findUsersByType = (type) => {
    return users.filter(person => person.type === type);
}

export default userController;