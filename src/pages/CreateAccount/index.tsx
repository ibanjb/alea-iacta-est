import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignUp from '../../components/SignUp';
import * as styles from './styles.module.scss';

const CreateAccount = () => {
  return (
    <>
      <Header />
      <div className={styles.root}>
        <section id='signup' className={styles.container}>
          <SignUp />
        </section>
      </div>
      <div id='slider' className={styles.animation}>
        <img src='assets/gonzo-vr.png' alt='ok' />
      </div>
      <Footer />
    </>
  );
};
export default CreateAccount;
