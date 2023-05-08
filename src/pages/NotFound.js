import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="text-bg-primary">
            <div className="container py-5">
                <h2>Page Not Found!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque culpa reiciendis impedit, aut soluta atque eius accusamus sunt reprehenderit praesentium unde quia totam tenetur.</p>

                <p>Go to the <Link className="text-white" to="/">Homepage</Link>.</p>
            </div>
        </div>
    );
}
 
export default NotFound;