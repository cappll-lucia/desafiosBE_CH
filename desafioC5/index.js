import ProductManager from "./managers/productManager.js";

const productManager = new ProductManager();

const context = async()=>{

    // TESTING
    // const prods = await productManager.getProducts();
    // console.log(prods)

    const newProd = {
        title: 'ultimo producto de prueba',
        description:'nada importante',
        price:800,
        thumbnail:'Sin imagen',
        code:'abc1236',
        stock:100
    }
    // await productManager.addProduct(newProd);

    // await productManager.updateProduct(1, {
    //     description:'Descripcion actualizada',
    //     code:'aaa777'
    // })

    // const myProd = await productManager.getProductById(15);
    // console.log(myProd);

    await productManager.deleteProduct(1);

};
context();