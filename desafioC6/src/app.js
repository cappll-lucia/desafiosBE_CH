import express from 'express';
import ProductManager from '../managers/productManager.js';

const PORT = 8080;
const app = express();
const productManager = new ProductManager();

app.get('/', (req,res)=>{
    res.send(`<h1>Este es el desafío de la clase 6</h1>`)
})

app.get('/products', async(req, res)=>{
    const products = await productManager.getProducts();
    const limit = req.query.limit;
    if(!limit) res.send(products)
        else res.send(products.slice(0, limit))
});

app.get('/products/:pid',    async(req, res)=>{
    try {
        const id = req.params.pid;
        console.log(id)
        const prod = await productManager.getProductById(id);
        if(prod) res.send(prod)
    } catch (error) {
        res.send(error)
    }
})

app.listen(PORT, ()=>console.log(`Server running at http://localhost:${PORT}`))