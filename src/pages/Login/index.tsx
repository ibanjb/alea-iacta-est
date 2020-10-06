import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignIn from '../../components/SignIn';
import * as styles from './styles.module.scss';

const Login = () => {
  return (
    <>
      <Header />
      <div className={styles.root}>
        <section id='signup' className={styles.container}>
          <SignIn />
        </section>
      </div>
      <div id='slider' className={styles.animation}>
        <img src='assets/gonzo-play.png' alt='ok' />
      </div>
      <Footer />
    </>
  );
};
export default Login;
