import { useState } from 'react'
import { useLogin } from "../hooks/useLogin"
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className=''>
      <div className="p-4 navbar bg-primary text-primary-content flex justify-between">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-2 h-full bg-base-300 ">
        
        <form onSubmit={handleSubmit} className='max-w-lg p-6 border-2 border-primary flex flex-col justify-center gap-y-4 bg-base-200 rounded-lg'>
          <h3 className='text-2xl font-semibold text-base-content'>Login</h3>
          <label className='block text-lg font-medium text-base-content'>Email:</label>
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            value={email}
            placeholder="Email" 
            className="input input-bordered input-primary w-96 max-w-xs" />
          <label className='block text-lg font-medium text-base-content'>Password:</label>
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            value={password}
            placeholder="Password" 
            className="input input-bordered input-primary w-96 max-w-xs" />

          <button disabled={isLoading} className='block self-end btn btn-secondary font-bold'>Login</button>  
          {error && <div className='alert alert-error shadow-lg'>{error}</div>}
        </form>  
        <div className="alert shadow-lg w-max px-8">
          <div className='flex flex-col'>
            <div>
              <span className='select-none'>Demo Email: </span>
              <span className='text-lg font-semibold underline'>Demo.user@gmail.com</span>
            </div>
            <div>
              <span className='select-none'>Demo Password: </span>
              <span className='text-lg font-semibold underline'>Demopass123!</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login