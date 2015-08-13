var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Order = require("../models/Order.js");

// get the orders
router.get('/', function(req, res, next){
    Log.i("return the list of orders");
    res.status(200).json({
        "success" : "TODO : List of orders"
    })
});

// get order by id
router.get('/:id', function(req, res, next) {
    Log.i("get order by id "+req.params.id);
    res.status(200).json({
        "success" : "TODO : get order by id"
    })
});

// create a new order
router.post('/', function(req, res, next) {
    Log.i("create a new order");
    res.status(201).json({
        "success" : "TODO : create a new order"
    })
});

//update an order
router.put('/:id', function(req, res, next) {
    Log.i("update the order with id "+req.params.id);
    res.status(202).json({
        "success" : "TODO : List of orders"
    })
});

//delete an order
router.delete('/:id', function(req, res, next) {
    Log.i("delete the order with id "+req.params.id);
    res.status(204).json({
        "success" : "TODO : List of orders"
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