const env = require('./env');
const mongoose = require('mongoose');
const express = require('express');
const models = require('./model')
const app = express();




// Just Hello World
app.get('/', async (req,res) => {
    res.json({
        status: 'Hello world',
    });
});

// Get all documents in the collection
app.get('/all', async (req,res) => {

    // Find all the users
    const users = await models.UserModel.find();

    console.log(users);

    res.json({
        status: 'Users find',
        users,
    });
});

// Create a new document with predefined data but a new _id
app.get('/new', async (req,res) => {

    // Create and save the new user
    var newUser = new models.UserModel();
    await newUser.save();

    // Send the response and the new user created
    res.json({
        status: 'User created',
        newUser,
    });
});




app.listen(env.PORT, () => {
    console.log(`Example app listening at http://localhost:${env.PORT}`)
});

(async () => {
    try {

        // Conectar con la base de datos, la funcion recive el string de conexion
        await mongoose.connect(env.DB_URI, {
            dbName: env.DB_DATABASE, // Base de datos
            // user: '', 
            // pass: '',
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        console.log('Mongoose is conected at DB ' + env.DB_DATABASE );
        

    } catch (error) {
        console.log(error);
    }
})();