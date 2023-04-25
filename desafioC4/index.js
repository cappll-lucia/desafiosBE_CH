import ProductManager from "./managers/productManager.js";

const productManager = new ProductManager();

const context = async()=>{

    const prods = await productManager.getProducts();
    console.log(prods)

    const newProd = {
        title: 'primer producto de prueba',
        description:'este es un producto de prueba',
        price:200,
        thumbnail:'Sin imagen',
        code:'abc123',
        stock:25
    }

    await productManager.addProduct(newProd);

    await productManager.updateProduct(2, {
        description:'Descripcion actualizada',
        code:'aaa777'
    })

    const myProd = await productManager.getProductById(15);
    console.log(myProd);

    await productManager.deleteProduct(3);

};
context();