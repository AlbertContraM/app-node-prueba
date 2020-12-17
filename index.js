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




app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
});

(async () => {
    try {

        // Conectar con la base de datos, la funcion recive el string de conexion
        await mongoose.connect(process.env.DB_URI, {
            dbName: process.env.DB_DATABASE, // Base de datos
            user: process.env.DB_USER, 
            pass: process.env.DB_PASSWORD,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        console.log('Mongoose is conected at DB ' + process.env.DB_DATABASE );
        

    } catch (error) {
        console.log(error);
    }
})();