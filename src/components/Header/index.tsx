import * as React from 'react';
import { Link } from 'react-router-dom';
import ShapeUp from '../ShapeUp';
import * as styles from './styles.module.scss';

const Header = () => {
  return (
    <>
      <header role='banner'>
        <nav role='navigation'>
          <div className={styles.container}>
            <div>
              <Link to='/'>
                <img src='assets/logo-alea.svg' alt='logo' />
              </Link>
            </div>
            <div>
              <Link to='/403'>Forbidden</Link>
            </div>
            <div>
              <Link to='/404'>Page not found</Link>
            </div>
            <div>
              <Link to='/500'>Internal server error</Link>
            </div>
            <div>
              <Link to='/signup'>Signup</Link>
            </div>
            <div>
              <Link to='/login'>Login</Link>
            </div>
            <div>
              <Link to='/exercise'>Exercise</Link>
            </div>
          </div>
        </nav>
        <ShapeUp />
      </header>
    </>
  );
};
export default Header;
