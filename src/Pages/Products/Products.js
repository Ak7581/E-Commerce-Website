import React from "react";
import { useState, useEffect } from "react";
import { FakeStoreApi } from "../Services/Fake-Store";
import { Link, useSearchParams } from "react-router-dom";
import  Item  from "../../Componnent/Item/Item";
import  {useCart}  from "../../Componnent/context/cart"
 
function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [query, setQuerry] = useSearchParams();
   const  {addToCart}  = useCart()

   const searchQuery = query.get("q");

  useEffect(() => {
    const fatchProducts = async () => {
      setLoading(true);
      const products = searchQuery
        ? await FakeStoreApi.fatchProductsBySearchQuery(searchQuery)
        : await FakeStoreApi.fatchAllProducts();
      setProducts(products);
      setLoading(false);
    };
    fatchProducts().catch((err)=> console.error(err));
  }, [searchQuery]);

  if (!loading && searchQuery && !products.length) {
    <div className="container">
      <div className="product py-2">
        <div className="details p-3">No produccts found matching your query.</div>
      </div>
    </div>;
  }

  return (
    <>
       <div className="container">
                <div className="products my-5">
                    <div className="grid">
                        {loading ? (
                            <div className="loader" />
                        ) : (
                            products.map((product) => (
                                <Item  data={product} addToCart={() => addToCart(product)} />
                            ))
                        )}
                    </div>
                </div>
            </div>
    </>
  );
}

export default Products;
