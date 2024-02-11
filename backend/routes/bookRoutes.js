const express = require('express');
const { saveBooksController, getBooksController, getOneBookController, updateBookController, deleteBookController } = require('../controllers/bookController');

const router = express.Router();

//Saving book

router.post('/books', saveBooksController)

//getting books

router.get('/books', getBooksController)

//route for getting one book by id from database

router.get('/books/:id', getOneBookController);


//route for updating books

router.put('/books/:id', updateBookController)

//route for deleting book

router.delete('/books/:id', deleteBookController)


module.exports = router