import React from 'react'

function SignUp() {
  return (
    <div className='Signup'>
      <form>
      <h1>      SignUp</h1>
      <div>
        <input placeholder='name' type='text' />


      </div>
      <div>
        <input placeholder='password' type='text' />

      </div>
      <div>
        <input placeholder='email' type='text' />
      </div>
      <div>
        <button type='submit'>
          SignUp
        </button>
      </div>
      </form>
      
    </div>
  )
}

export default SignUp