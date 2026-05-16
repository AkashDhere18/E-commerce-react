import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const LoginPage = ({setloggeduser}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [regUser, setRegUser] = useState({})

    const inputEmailRef = useRef()

    const navigate = useNavigate()

    
    const handelLogin = (e) => {
        e.preventDefault()
        const storedUser = JSON.parse(localStorage.getItem('loggedUsers'))
        // console.log(email,password)
        if(!storedUser){
            alert('not registered')
            return
        }

        if(email == storedUser.userEmail && password == storedUser.userPass){
            // toast.success("Login successfully")
            setloggeduser(storedUser.userName)
            alert('succed')
            navigate('/dashboard',)
        }
        else{
            // toast.error("invalid credentials")
            alert('invalid credentials')
            navigate('/')
        }

        setEmail('')
        setPassword('')
    }


    useEffect(()=>{
        inputEmailRef.current.focus()
    },[])



    return (
        <div className='container mt-4 w-50 bg-info p-4 rounded '>
            <form onSubmit={handelLogin}>
                <h4>Login Page</h4>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                    ref={inputEmailRef}
                    value={email} 
                    onChange={(e)=> { setEmail(e.target.value)}}
                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    type="password" className="form-control" id="exampleInputPassword1" autoComplete="current-password"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/registerPage' > if not register ?</Link>
            </form>
        </div>
    )
}

export default LoginPage