import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./ProductCard";
import { use, useEffect, useState } from "react";
function ProductList() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log("Reder ProductList");

    useEffect(() => {
        fetch("http://localhost:8080/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setProducts(data)
                setIsLoading()
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="row justify-content-center">
            <button
                className="btn btn-primary m-4"
                onClick={() => { setCount(++count) }}>
                Increment
            </button>
            <>{count}</>

            <button className="btn btn-secondary m-4" onClick={() => { setCount(--count) }}>Decrement</button>
            {

            }
            {
                isLoading ? <h1>Loading...</h1> : <> {
                    products.map((product) => {
                        return (
                            <ProductCard
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                            />
                        )
                    })

                }
                </>
            }

        </div>
    )
}

export default ProductList;