import React from 'react'

function Login() {
  return (
    <div className='formOne'>
     <form>
      <h1>Login</h1>
    <div>
    <input placeholder='Name' type='name'/>
    </div>
    <div>
   <input placeholder='Enter Email' type='email'/>
    </div>
   <div>
   <input placeholder='password' type='password'/>
   </div>
   <div>
    <button type='submit'>
      Login
    </button>
   </div>
    
     </form>

      </div>
  )
}

export default Login