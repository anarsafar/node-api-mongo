const express = require("express");
const router = express.Router();
const ProductModel = require("../models/Product");

//Get all products
router.get("/products", async (req, res) => {
    try {
        const products = await ProductModel.find()
        res.status(200).json({
            success: true,
            data: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server error 500"
        })
    }
})

// Add product
router.post("/products", async (req, res) => {

    const newProduct = new ProductModel(req.body)
    newProduct.save((err, doc) => {
        if (err) {
            res.status(400).json({
                success: false,
                error: "Bad request please prove a valid Schema"
            })
        } else {
            res.status(201).json({
                success: true,
                message: 'Product created successfully!'
            })
        }
    })
})

// Get product by ID
router.get("/products/:id", async (req, res) => {
    try {
        const ID = req.params.id
        const product = await ProductModel.findById(ID)
        res.status(200).json({
            success: true,
            data: product
        })

    } catch {
        res.status(500).json({
            success: false,
            error: "no such a product by given id"
        })
    }
})

// Delete products
router.delete("/products/:id", async (req, res) => {
    try {
        const ID = req.params.id
        await ProductModel.findByIdAndDelete(ID);

        res.status(201).json({
            success: true,
            message: 'Product deleted successfully!'
        })
    } catch {
        res.status(500).json({
            success: false,
            error: "no such a product by given id"
        })
    }
})

// Update products
router.put("/products/:id", async (req, res) => {
    try {
        const ID = req.params.id
        await ProductModel.findByIdAndUpdate(ID, req.body);

        res.status(200).json({
            success: true,
            message: 'Product updated successfully!'
        })
    } catch {
        res.status(500).json({
            success: false,
            error: "no such a product by given id"
        })
    }
})

module.exports = router;