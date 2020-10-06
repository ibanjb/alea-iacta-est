import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as styles from './styles.module.scss';

const Splash = () => {
  return (
    <>
      <Header />

      <div className={styles.root}>
        <section id='header'>
          <video autoPlay muted loop width='100%' height='425'>
            <source src='assets/logo-alea-anim.mp4' type='video/mp4' />
          </video>
        </section>
      </div>
      <section id='description' className={styles.bottom}>
        <div>
          <p>Exercise done with React, Redux, Typescript, SCSS and Webpack</p>
        </div>
        <div id='slider' className={styles.animation}>
          <img src='assets/job-deco.png' alt='ok' />
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Splash;
