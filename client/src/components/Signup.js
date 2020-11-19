import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/actions/authActions';
import { Redirect, Link } from 'react-router-dom';

let emailDiv = "signupContainer__form-input";
let passwordDiv = "signupContainer__form-input";

function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [noInfo, setNoInfo] = useState('');
  const [noEmail, setNoEmail] = useState('');
  const [noPassword, setNoPassword] = useState('');
  const currentUserId = useSelector(state => state.auth.id);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    emailDiv = "signupContainer__form-input";
    passwordDiv = "signupContainer__form-input";
    setNoEmail('');
    setNoPassword('');
    setNoInfo('');
    if (email && password) {
      dispatch(signup(username, email.toLocaleLowerCase(), password));
    } else if (!email && password) {
      emailDiv = "signupContainer__form-bad-input";
      setNoEmail("Oi! We're gonna need that email of yours!")
    } else if (email && !password) {
      passwordDiv = "signupContainer__form-bad-input";
      setNoPassword("What's the password?");
    } else {
      emailDiv = "signupContainer__form-bad-input";
      passwordDiv = "signupContainer__form-bad-input";
      setNoInfo("You can't get in if you're not a member!")
    }
  }
  if (currentUserId) return <Redirect to='/' />
  return (
    <>
      <div className='signupWrapper'>
        <div className="signupContainer">
          <form className='signupContainer__form' onSubmit={handleSubmit}>
            <div className='signupContainer__form-label'>
              Sign up
            </div>
            <div>
              <input type='text' className={emailDiv} name='username' value={username} placeholder="Username" onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
              <span style={{ color: 'red' }}>{noInfo}</span>
              <input type='email' className={emailDiv} name='email' value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <span style={{ color: 'red' }}>{noInfo}</span>
              <input type='email' className={emailDiv} name='email' value={email} placeholder="Re-enter Email" onChange={e => setEmail(e.target.value)} />
            </div>
            <span style={{ color: 'red' }}>{noEmail}</span>
            <div>
              <input type='password' className={passwordDiv} name='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
            </div>
            <span style={{ color: 'red' }}>{noPassword}</span>
            <div>
              <input type='password' className={passwordDiv} name='password' value={password} placeholder='Re-Enter Password' onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
              <button type='submit' className='signupContainer__form-button'>Create account</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Signup;
