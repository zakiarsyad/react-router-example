import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1>The page you are looking for is NOT FOUND!</h1>
            <Link to="/">Go to Home Page</Link>
        </div>
    );
}

export default NotFound;
