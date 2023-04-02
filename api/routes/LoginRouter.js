const express = require('express');
const router = express.Router();

//internal modules
const {hashCode, fetchUserAuthData} = require('../controllers/LoginController');

// middleware here

//routes here

router.get('/:login', (req, res) => {
    try {

        const username = req.params.username;
        const password = req.params.password;
        const data = fetchUserAuthData(username, password);

        const json_data = JSON.stringify(data);
        res.status(200).send(json_data);

    } catch (error) {

        const data = {
            error: error.message
        }
        const json_data = JSON.stringify(data);
        res.status(400).send(json_data);
    
    }
})

module.exports = router;