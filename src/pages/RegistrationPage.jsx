import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const RegistrationPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

    const handelRegister = (e) => {
        e.preventDefault()
        console.log(userName,email,password)

        const regUser = {
            userName : userName,
            userPass : password,
            userEmail : email
        }

        localStorage.setItem('loggedUsers', JSON.stringify(regUser))
        toast.success("Register successful")

        setUserName('')
        setEmail('')
        setPassword('')
    }
  return (
    <div className='container mt-4 w-50 bg-info p-4 rounded '>
            <form onSubmit={handelRegister}>
                <h4>Register Page</h4>
                <div className="mb-3">
                    <label htmlFor="exampleUserName" className="form-label">User Name</label>
                    <input
                    value={userName} 
                    onChange={(e)=> { setUserName(e.target.value)}}
                    type="text" className="form-control" id="exampleUserName"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                    value={email} 
                    onChange={(e)=> { setEmail(e.target.value)}}
                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/' >Already Registered</Link>
            </form>

            <ToastContainer />
        </div>
  )
}

export default RegistrationPage