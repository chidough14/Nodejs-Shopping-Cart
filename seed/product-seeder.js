var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shoppingCart');

var products = [
    new Product({
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/A1wfQTp74oL._SX355_.jpg',
    title: 'Designer Bags',
    description: 'Excellent Arrivals !!!',
    price: 10
}),
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/1089/8530/products/Packing-Cube-Shoulder-Bag-Nordic-Halcyon-400d_1024x1024.jpg?v=1510245871',
        title: 'Awesome Bags',
        description: 'Great Quality !!!',
        price: 50
    }),
    new Product({
        imagePath: 'https://5.imimg.com/data5/CC/JL/MY-29211282/designer-school-bag-500x500.jpg',
        title: 'Calvin klien Bags',
        description: 'Made in Italy',
        price: 40
    }),
    new Product({
        imagePath: 'https://img2.newchic.com/thumb/large/oaupload/newchic/images/5B/98/f28af3c8-0e78-4f44-81fb-5fbe4e486a8a.jpg',
        title: 'hugo Boss Bags',
        description: 'Excellent Quality',
        price: 10
    })
];

var done = 0;
for (var i=0; i< products.length; i++) {
    products[i].save(function(err, result){
       done++;
       if (done === products.length){
           exit();
       }
    });
}


function exit(){
    mongoose.disconnect();
}
