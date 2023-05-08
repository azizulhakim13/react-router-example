import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
    return (  
        <div className="help-layout py-md-5 text-bg-primary">
            <div className="container">
                <h2 className="mb-3">Website Help</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ullam, ratione voluptatibus expedita beatae iure.</p>

                <nav className="d-flex justify-content-center pb-4 mt-3">
                    <NavLink className="btn btn-outline-warning me-3"  to="faq">View the FAQ</NavLink>
                    <NavLink className="btn btn-warning" to="contact">Contact Us</NavLink>
                </nav>

                <Outlet />
            </div>

        </div>
    );
}
 
export default HelpLayout;