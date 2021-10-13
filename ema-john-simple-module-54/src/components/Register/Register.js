import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {user, signInUsingGoogle} = useAuth()
    const stopLoading = e => {
        e.preventDefault()
    }
    return (
        <div className="container">
            <div className="">
                <h2 className="text-center alert alert-primary mt-3">Create an account</h2>
                <div className="alert alert-secondary d-flex justify-content-center align-items-center"> 
                    <form onSubmit={stopLoading}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                        <input type="name" name="username" className="form-control" id="firstName" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Re-type Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Already have an account ? 
                                <Link to="login">Log in</Link>
                            </label>
                    </div>
                        <div className='text-center'>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <div><strong>-------------or------------</strong></div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success m-2" onClick={signInUsingGoogle}>Google</button>
                            
                            <button type="submit" className="btn btn-primary">Facebook</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;