//1
const express = require('express');
const cors = require ('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to contact book application. ' });
});

module.exports = app;

//2

const contactController = require('./controllers/contact.controller');

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to contact book application.' });
});

app.route('/api/contacts')
    .get(contactController.findAll)
    .post(contactController.create)
    .delete(contactController.deleteAll);

app.route('/api/contacts/favorite').get(contactController.findAllFavorite);

app.route('/api/contacts/:id')
    .get(contactController.findOne)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = app;

//3

const ApiError = require('./api-error');



app.route('/api/contacts/:id')
    .get(contactController.findOne)
    .put(contactController.update)
    .delete(contactController.delete);

// Handle 404 response.
app.use((req, res, next) => {
    return next(new ApiError(404, 'Resource not found'));
});
// Define error-handling middleware last, after other app.use() and routes calls.
app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || 'Internal Server Error',
    });
});












