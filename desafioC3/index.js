
class ProductManager{


    constructor(){
        this.products=[]
    }

    addProduct=(title, description,price,thumbnail,code,stock)=>{
        if (title&&description&&price&&thumbnail&&code&&stock){
            if(!this.getProductByCode(code)){
                const newProduct = {
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock,
                    id: this.products.length===0 ? 1 : this.products[this.products.length-1].id+1
                }
                this.products.push(newProduct);
                console.log('Producto registrado con éxito!');
            }else{
                console.log(`No se pudo completar el registro. Ya existe un producto con code=${code}`)
            }
        }else{
            console.log(`No se pudo completar el registro. Todos los campos son obligatorios`)
        }
    }

    getProducts=()=> this.products

    getProductById=(_id)=>{
        const prodID = this.products.find(prod=>prod.id==_id);
        return prodID ?  prodID : 'Not Found'
    }

    getProductByCode=(_code)=>{
        return this.products.find(prod=>prod.code==_code)
    }
}

const testManager = new ProductManager();

testManager.addProduct('Set lápices', 'La caja contiene 12 lápices de colores', 500,'/desktop/shop/set12lapices', 'L001', 15 );
testManager.addProduct('Campera', 'Talle s color negro', 2400,'/desktop/shop/campera', 'R001', 3 );
testManager.addProduct('Mate', 'Tipo calabaza', 1000,'/desktop/shop/set12lapices', 'B001', 1 );
/// producto termo no se registra porque descrip está vacía
testManager.addProduct('Termo', '', 1000,'/desktop/shop/set12lapices', 'B001', 1 );

const productsList = testManager.getProducts();
console.log('---------Lista de productos-------');
console.log(productsList);

console.log('---------Producto con id=2-------');
console.log(testManager.getProductById(2));

