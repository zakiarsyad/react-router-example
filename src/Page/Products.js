import { Link, Outlet } from "react-router-dom";

function Products() {
    return (
        <div className="products">
            <div className="productsNav">
                <Link to="/products/list"> List </Link>
                <Link to="/products/add"> Add </Link>
            </div>

            <Outlet />
        </div>
    );
}

export default Products;
