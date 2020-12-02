import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom';

let emailDiv = "signupContainer__form-input";
let passwordDiv = "signupContainer__form-input";

function Signup() {
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.auth.id);


  const [email, setEmail] = useState('');
  const [emailTwo, setEmailTwo] = useState('');
  const [password, setPassword] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  const [noInfo, setNoInfo] = useState('');
  const [noEmail, setNoEmail] = useState('');
  const [noPassword, setNoPassword] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    emailDiv = "signupContainer__form-input";
    passwordDiv = "signupContainer__form-input";
    setNoEmail('');
    setNoPassword('');
    setNoInfo('');

    if ((email === emailTwo) && (password === passwordTwo) && (email !== "")) {
      dispatch(signup(email.toLocaleLowerCase(), password));
    } else if (email === emailTwo === password === passwordTwo === "") {
      emailDiv = "signupContainer__form-bad-input";
      passwordDiv = "signupContainer__form-bad-input";
      setNoEmail("Please enter a valid email")
      setNoPassword("Please enter a valid password");
    } else if (
      (email === emailTwo) && ((password !== passwordTwo)
      ||
      (!password || !passwordTwo))
      ) {
      passwordDiv = "signupContainer__form-bad-input";
      setNoPassword("Please make sure password fields match.");
    } else if(((email !== emailTwo) || (!email || !emailTwo))&&(password===passwordTwo)) {
      emailDiv = "signupContainer__form-bad-input";
      setNoEmail("Please make sure email fields match.")
    }
  }

  if (currentUserId) return <Redirect to='/' />

  return (
    <>
      <div className='signupWrapper'>
        <div className="signupContainer">
          <form className='signupContainer__form' onSubmit={handleSubmit}>
            <div className='signupContainer__form-label'>
              sign up
            </div>
            <div>
              <span style={{ color: 'red' }}>{noEmail}</span> 
              <span style={{ color: 'red' }}>{noInfo}</span>
              <input type='email' className={emailDiv} name='email' value={email} placeholder="email" onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <input type='email' className={emailDiv} name='email' value={emailTwo} placeholder="re-enter email" onChange={e => setEmailTwo(e.target.value)} />
            </div>
            <div>
              <span style={{ color: 'red' }}>{noInfo}</span>
              <span style={{ color: 'red' }}>{noPassword}</span>
              <input type='password' className={passwordDiv} name='password' 
              value={password} placeholder='password' 
              onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
              <input type='password' className={passwordDiv} name='password' 
              value={passwordTwo} placeholder='re-enter password' 
              onChange={e => setPasswordTwo(e.target.value)} />
            </div>
            <div>
              <button type='submit' className='signupContainer__form-button'>create account</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Signup;
