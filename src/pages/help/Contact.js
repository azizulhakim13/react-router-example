const Contact = () => {
    return (  
        <div className="contact">
            <h3>Contact Us</h3>

            <div className="col-md-10 me-auto col-lg-5 pt-4">
                <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                <div className="form-floating mb-3 text-dark">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label>Email address</label>
                </div>
                <div className="form-floating mb-3 text-dark">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label>Password</label>
                </div>
                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                <hr className="my-4"/>
                <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                </form>
            </div>
        </div>
    );
}
 
export default Contact;