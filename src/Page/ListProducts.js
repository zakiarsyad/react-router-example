import { useState } from "react";
import { Link } from "react-router-dom";

function ListProducts() {
    const [products, setProducts] = useState([
        { id: 1, name: "Apple" },
        { id: 2, name: "Mango" },
        { id: 3, name: "Orange" },
        { id: 4, name: "Watermelon" },
        { id: 5, name: "Pineapple" },
    ]);

    return (
        <div>
            <h1>List Product Page</h1>
            {products.length && products.map((product, index) => {
                const url = `/products/${product.id}?name=${product.name}`;

                return (
                    <div key={index}>
                        <Link
                            to={url}
                        >{product.id}. {product.name}</Link>
                    </div>
                )
            })}
        </div>
    );
}

export default ListProducts;
