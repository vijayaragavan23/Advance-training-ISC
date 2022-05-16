const Order = require('../models/order.model');

exports.create = (req, res) => {
    if(!req.body.quantity) {
        return res.status(400).send({
            message: "Order quantity can not be empty"
        })
    }
    const order = new Order({
        product: req.body.product || "No product added",
        quantity: req.body.quantity
    });

    order.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some Error"
        });
    })
};

exports.findAll = (req, res) => {
    Order.find()
    .then(orders => {
        res.send(orders);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "some error"
        });
    });
};

exports.delete = (req, res) =>{
    Order.findByIdAndRemove(req.params.orderId)
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "Order not found"
            });
        }
        res.send({message: "Note deleted!"})
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Order not found!"
            })
        }
        return res.status(500).send({
            message: "Could not delete order"
        });
    });
};





