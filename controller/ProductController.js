const Product = require('../model/Product');

//
exports.getAllProducts = async (req, res) =>{
    try{
        const products = await Product.find()
        res.json(products)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    } 
}

exports.getSingleProduct = async(req, res)=>{
    try{
        const product = await Product.findOne({proId: req.params.id})
        if(!product)
            return res.status(404).json({msg:'Request Not Found'})

            res.json(product)
        
    }
        catch(err){
            res.status(500).json({msg:err.message})
        
    }
}

exports.addNewProduct = async (req, res)=>{
    try{
        const product = Product.findOne({proId : req.body.proId})
        if(!product){
            const addedProduct = await Product.create(req.body)
            res.json(addedProduct)
        }
        else{
            res.json("Product Exist")
        }
    }
    catch(err){
        res.status(500).json({msg:err.msg})
    }
}
