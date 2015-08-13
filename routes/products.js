var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Product = require("../models/Product.js");

// get the products
router.get('/', function(req, res, next){
    Log.i("return the list of products");
    res.status(200).json({
        "success" : "TODO : List of products"
    })
});

// get the product with given id
router.get('/:id', function(req, res, next) {
    Log.i("get product by id "+req.params.id);
    res.status(200).json({
        "success" : "TODO : get product by id"
    })
});

// create a new product
router.post('/', function(req, res, next) {
    Log.i("create a new product");
    res.status(201).json({
        "success" : "TODO : create a new product"
    })
});

//update a product
router.put('/:id', function(req, res, next) {
    Log.i("update the product with id "+req.params.id);
    res.status(202).json({
        "success" : "TODO : update product"
    })
});

// delete a product
router.delete('/:id', function(req, res, next) {
    Log.i("delete the product with id "+req.params.id);
    res.status(204).json({
        "success" : "delete product"
    })
});

//
///* GET /todos listing. */
//router.get('/', function(req, res, next) {
//    Todo.find(function (err, todos) {
//        if (err) return next(err);
//        res.json(todos);
//    });
//});
//
///* GET /todos/id */
//router.get('/:id', function(req, res, next) {
//    Todo.findById(req.params.id, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});
//
///* POST /todos */
//router.post('/', function(req, res, next) {
//    console.log(req.body);
//    Todo.create(req.body, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});
//
///* PUT /todos/:id */
//router.put('/:id', function(req, res, next) {
//    Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});
//
///* DELETE /todos/:id */
//router.delete('/:id', function(req, res, next) {
//    Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});

module.exports = router;