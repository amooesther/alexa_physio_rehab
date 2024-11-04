import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    
    // Here you can handle the login or sign up logic
    if (state === 'Sign Up') {
      // Sign up logic
      console.log("Signing up with:", { name, email, password });
      // Reset form or show success message
    } else {
      // Login logic
      console.log("Logging in with:", { email, password });
      // Reset form or show success message
    }

    // Clear the form fields after submission
    setEmail('');
    setPassword('');
    if (state === 'Sign Up') setName('');
  };

  return (
    <form onSubmit={onSubmitHandle} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold text-secondary'>{state === 'Sign Up' ? 'Create account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'Sign up' : 'Login'} to book an appointment</p>
        
        {state === 'Sign Up' && (
          <div className='w-full'>
            <p>Full name</p>
            <input
              className='border border-zinc-300 rounded w-full p-2 mt-1'
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}
        
        <div className='w-full'>
          <p>Email</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        
        <div className='w-full'>
          <p>Password</p>
          <input
            className='border border-zinc-300 rounded w-full p-2 mt-1'
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        
        <button className='bg-secondary text-primary w-full py-2 rounded text-base'>
          {state === 'Sign Up' ? 'Create account' : 'Login'}
        </button>
        
        {state === 'Sign Up' ? (
          <p>Already have an account? 
            <span onClick={() => setState('Login')} className='text-secondary underline cursor-pointer'> Login here</span>
          </p>
        ) : (
          <p>Create a new account? 
            <span onClick={() => setState('Sign Up')} className='text-secondary underline cursor-pointer'> Click here</span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
