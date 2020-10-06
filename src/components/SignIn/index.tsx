import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.module.scss';

const SignIn = () => {
  return (
    <>
      <p className={styles.mainTitle}>Login</p>
      <p className={styles.mainSubtitle}>
        Does not have an account? <Link to='/signup'>Sign up</Link>
      </p>
      <div className={styles.inputContainer}>
        <input type='text' placeholder='Username' />
      </div>
      <div className={styles.inputContainer}>
        <input type='password' placeholder='Password' />
      </div>
      <div className={styles.separator}>
        <button className={styles.signUpButton}>Sign in</button>
      </div>
    </>
  );
};
export default SignIn;
