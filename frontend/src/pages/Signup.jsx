import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email.toLocaleLowerCase(), password)
  }
  
  return (
    <div className='h-full overflow-auto'>
      <div className="p-4 navbar bg-primary text-primary-content flex justify-between">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    <div className="flex h-full bg-base-300">
      <form onSubmit={handleSubmit} className='px-12 py-6 m-auto border-2 border-primary flex flex-col justify-center gap-y-4 bg-base-200 rounded-lg'>
        <h3 className='text-2xl font-semibold text-base-content'>Signup</h3>
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

        <button className='block self-end btn btn-secondary font-bold' disabled={isLoading}>Signup</button>  
        {error && <div className='alert alert-error shadow-lg'>{error}</div>}
      </form>  
    </div>
    </div>
  )
}

export default Signup