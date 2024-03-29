const bookModel = require("../models/bookModel");

const saveBooksController = async (req, res) =>{
    try{
        if(
            !req.body.title || !req.body.author || !req.body.author
        ){
            return res.status(400).send({
                message: 'Send all required fields: title, author and publish year'
            });
        }
        
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear};

        const book = await bookModel.create(newBook)

        return res.status(201).send(book)

    }catch (error){
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
}

//Routes to get all books from database

const getBooksController = async (req, res) =>{
    try{
        const books = await bookModel.find({});
        return res.status(200).json({
            noOfBooks: books.length,
            data: books
        });

    }catch (error) {
        console.log(error.message);
        res.status(500).send({
            message:error.message
        })
        

    }
}

//Controller for getting one book 

const getOneBookController = async (req, res) =>{
    try{
    const {id} = req.params;
    
    const book = await bookModel.findById(id);

    return res.status(200).json(book)

    }catch (error){
        console.log(error.message);
        res.status(500).send({
            message:error.message
        })

    }
}

const updateBookController = async (req, res) =>{   
    try{
    if(!req.body.title || !req.body.author || !req.body.publishYear){
        return res.status(400).send({
            message: 'Send all required fields: title, author, publishYear'
        });
    }
     
    const {id} = req.params;
    const result = await bookModel.findByIdAndUpdate(id, req.body);

    if(!result){
        return response.status(404).json({message: 'Book not found'})

    }

    return res.status(200).send({message: 'Book updated Successfully'});

    }catch (error){
        console.log(error);
        res.status(500).send({
            message: message.error
        })
    }

}


const deleteBookController = async (req, res) =>{
    try{
        const { id } = req.params;

        const deletedBook = await bookModel.findByIdAndDelete(id);

        if(!deletedBook){
            return res.status(404).send({
                message:'Book not found'
            })
        }

        return res.status(200).json({
            message:'Book deleted successfully',
            data: deletedBook
        })

    }catch (error){
        console.log(error);
        res.status(500).send({message: messge.error})
    }
}

module.exports = {saveBooksController, getBooksController, getOneBookController, updateBookController, deleteBookController}