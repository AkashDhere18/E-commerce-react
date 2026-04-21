import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify'

const LoginPage = () => {
    return (
        <div>
            <div className='container w-50 p-5 mt-5 bg-info rounded'>
                <h3>Login here...</h3>
                <form onSubmit={handleLogin}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                            // value="Jerry" 
                            // name={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-5">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <Link to='/register' >If not registered</Link>
                </form>

                <ToastContainer r position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce} />
            </div>
        </div>
    )
}

export default LoginPage