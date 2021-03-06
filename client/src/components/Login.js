import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/authActions';
import { Redirect, Link, NavLink } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [noEmail, setNoEmail] = useState('');
  const [noPassword, setNoPassword] = useState('');
  const currentUserId = useSelector(state => state.auth.id);

  const dispatch = useDispatch();
  let emailDiv = "form-input";
  let passwordDiv = "form-input";
  const handleSubmit = e => {
    e.preventDefault();
    setNoEmail('');
    setNoPassword('');
    if (email && password) {
      dispatch(login(email.toLocaleLowerCase(), password));
    } else if (!email && password) {
      emailDiv = "bad-input";
      setNoEmail("Oi! We're gonna need that email of yours!")
    } else if (email && !password) {
      passwordDiv = "bad-input";
      setNoPassword("What's the password?");
    }
  }

  const demoUser = e => {
    e.preventDefault();
    dispatch(login('javier@aa.io', 'password'))
  };

  const demoAdmin = e => {
    e.preventDefault();
    dispatch(login('admin@prettygoodcoop.com', 'password'))
  };

  if (currentUserId === 666) return <Redirect to='/admin' />
  if (currentUserId) return <Redirect to='/' />

  return (
    <>
      <div className='loginWrapper'>
          <div className="loginContainer">
          <NavLink to='/'><div className='authLogo'/></NavLink>
            <div id='loginLabel'>
              log in
            </div>
            <form className='loginContainer__form' onSubmit={handleSubmit}>
              <div>
                <span style={{ color: 'red' }}>{noEmail}</span>
                <input type='email' className={emailDiv} name='email' value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
              </div>
              <div>
                <input type='password' className={passwordDiv} name='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
              </div>
              <span style={{ color: 'red' }}>{noPassword}</span>
              <div>
                <button type='submit' className='loginContainer__loginButton'>
                  log in
                </button>
                <button type='submit' className='loginContainer__loginButton' onClick={demoUser}>
                  demo user log in
                </button>
                <button type='submit' className='loginContainer__loginButton' onClick={demoAdmin}>
                  demo admin log in
                </button>
                <Link to='/signup'>
                  <button type='submit' className='loginContainer__loginButton'>
                    sign up
                  </button>
                </Link>
              </div>
            </form>
            <div id='redirect'>
            </div>
          </div>
        </div>
    </>
  )
}
export default Login;
