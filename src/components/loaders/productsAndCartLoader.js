import { getStoredCart } from "../../utilities/fakedb";

export const productsAndCartLoader=async()=>{
    //get products
    const productsData=await fetch('products.json');
    const products=await productsData.json();
    //get cart
    const savedCart=getStoredCart();
    const previousCart=[];

    // console.log("savedCart",savedCart)

    for(const id in savedCart){
        const addedProduct=products.find(product=>product.id ===id);
        if(addedProduct){
            const quantity=savedCart[id];
            addedProduct.quantity=quantity;
            previousCart.push(addedProduct);
        }
    }
    return {products:products,previousCart:previousCart};
}