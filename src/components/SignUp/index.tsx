import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.module.scss';

const SignUp = () => {
  return (
    <>
      <p className={styles.mainTitle}>Create account</p>
      <p className={styles.mainSubtitle}>
        Already have an account? <Link to='/login'>Sign in</Link>
      </p>
      <div className={styles.inputContainer}>
        <input type='text' placeholder='Full name' />
      </div>
      <div className={styles.inputContainer}>
        <input type='email' placeholder='Email' />
      </div>
      <div className={styles.inputContainer}>
        <input type='text' placeholder='Username' />
      </div>
      <div className={styles.inputContainer}>
        <input type='password' placeholder='Password' />
      </div>
      <div className={styles.separator}>
        <input className={styles.checkbox} type='checkbox' />
        <label className={styles.checkBoxLabel}>
          I have read and agree of <Link to='/'>Terms of Service</Link>
        </label>
      </div>
      <div className={styles.separator}>
        <button className={styles.signUpButton}>Sign up</button>
      </div>
    </>
  );
};
export default SignUp;
