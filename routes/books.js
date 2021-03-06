const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController');
const cors = require('cors');

/* GET users listing. */

router.get('/', cors(), function(req, res, next) {
    
    bookController.getAllBooks()
                .then(books=> {
                    res.json({message: 'Success', data: books});
                    return;
                })
                .catch(err=>{
                    res.status(400).json({message: 'Failed', error: err});
                    return;
                })
})

router.post('/', function(req, res, next) {
    bookController.addBook(req.body.book)
                .then(book=>{
                    res.json({message: 'Success', data: book});
                    return;
                })
                .catch(err=>{
                    res.status(400).json({message: 'Failed', error: err});
                    return;
                })
})

router.delete('/:id', function(req, res, next){
    bookController.deleteBook(req.params.id)
                .then(book=>{
                    res.json({message: "Success", data: book});
                    return;
                })
                .catch(err=>{
                    res.status(400).json({message: 'Failure', error: err});
                    return;
                })
})

router.put('/', function(req,res,next){
    bookController.updateBook(req.body.book)
        .then(book=>{
            res.json({message:"success", data:book});
            return;
        })  //end then
        .catch(err=>{
            res.status(400).json({
                message: "failed", 
                error: err});
                return;
        }) //end catch
}) // end router.put



module.exports = router
