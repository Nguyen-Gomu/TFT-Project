const Product = require('../../models/Product/productModel');

const CreateProduct = function(req, res, next){
    const product = new Product(req.body);
    product.save(function(err, Productlist){
        if (err){
            console.log(err);
        }
        res.json({
            messsage: 'Create product successfully!',
            Productlist
        })
    })
}

const SelectAllProduct = function(req, res, next){
    Product.find(function(err, ProductList){
        if (err){
            console.log(err);
        }
        res.json(ProductList)
    })
}

const SelectProduct = function(req, res, next){
    Product.findById(req.params.id, function(err, ProductList){
        if (err){
            console.log(err);
        }
        res.json(ProductList)
    })
}
const UpdateProduct = function(req, res, next){
    var data = {
        name: req.body.name,
        gender: req.body.gender,
        brand: req.body.brand,
        content: req.body.content,
        price: req.body.price,
        skind: req.body.skind,
        img_link: req.body.img_link,
        count: req.body.count,
        size: req.body.size,
        type: req.body.type
    }
    Product.findByIdAndUpdate(req.params.id, data, function(err){
        if (err){
            return next(err);
        }
        res.json({
            messsage: 'Update product successfully!',
            data
        })
    })
}

const DeleteProduct = function(req, res, next){
    Product.findByIdAndRemove(req.params.id, function(err){
        const id = req.params.id;
        if (err){
            console.log(err);
        }
        res.json({
            messsage: 'Delete product successfully!',
            id
        })
    });
}

module.exports = {
    CreateProduct,
    SelectAllProduct,
    SelectProduct,
    UpdateProduct,
    DeleteProduct
}