import { useParams, useSearchParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();

    const [searchParams, setSearchParams] = useSearchParams();

    const name = searchParams.get("name")

    return (
        <div>
            <h1>Product {id} Page</h1>
            <p>Product = {name}</p>
        </div>
    );
}

export default ProductDetail;
