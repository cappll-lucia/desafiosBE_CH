import fs from 'fs';

export default class ProductManager{
    constructor(){
        this.path = './files/products.json';
    }

    getProducts = async()=>{
        if(fs.existsSync(this.path)){
            const data = await fs.promises.readFile(this.path, 'utf-8');
            const products = JSON.parse(data);
            return products;
        }else{
            return [];
        }
        
    }

    getProductById= async(_id)=>{
        const products = await this.getProducts();
        const foundProd = products.find((p)=>p.id==_id)
        if(!foundProd){
            const err = new Error();
            err.message=`No existe un producto con id=${_id}`
            throw err
        }
        return foundProd
    }

    addProduct = async(_prod)=>{
        const products = await this.getProducts();
        if(products.length==0){
            _prod.id=1
        }else{
            _prod.id=products[products.length-1].id+1;
        }
        products.push(_prod);
        await fs.promises.writeFile(this.path, JSON.stringify(products), null, '\t');
    }
    
    deleteProduct = async(_id)=>{
        let products = await this.getProducts();
        products=products.filter(prod=>prod.id!=_id);
        await fs.promises.writeFile(this.path, JSON.stringify(products), null, '\t');
    }
    
    updateProduct = async(_id, _changes)=>{
        const myProd = await this.getProductById(_id);
        const products = await this.getProducts();
        const index = products.findIndex(prod=>prod.id===_id);
        if(!myProd){
            const err = new Error();
            err.message=`No existe un producto con id=${_id}`
            throw err
        }
        if(_changes.title){
            myProd.title=_changes.title;
        }
        if(_changes.description){
            myProd.description=_changes.description;
        }
        if(_changes.price){
            myProd.price=_changes.price;
        }
        if(_changes.thumbnail){
            myProd.thumbnail=_changes.thumbnail;
        }
        if(_changes.code){
            myProd.code=_changes.code;
        }
        if(_changes.stock){
            myProd.stock=_changes.stock;
        }

        products[index]=myProd;
        await fs.promises.writeFile(this.path, JSON.stringify(products), null, '\t');
    }
}