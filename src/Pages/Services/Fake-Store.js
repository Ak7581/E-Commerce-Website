import Product from "../Product/Product";

 export const FakeStoreApi = {
    fatchAllProducts :  async ()=>{
     const res = await   fetch('http://fakestoreapi.com/products')
     const results = res.json()
     return results;
},
 fatchProductsById : async (ProductId) =>{
   console.log(ProductId);
    const res = await fetch(`http://fakestoreapi.com/products/${ProductId}`)
    const results = res.json()
    return results;
 }, 
 fatchProductsBySearchQuery: async (query) => {
   const res = await fetch("https://fakestoreapi.com/products")
   const result = await res.json()
   return result.filter((product) => product.title.toLowerCase().includes(query))
}

}