import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorMessage from '../../components/ErrorMessage';

const Forbidden = () => {
  return (
    <>
      <Header />
      <ErrorMessage
        title='Access denied'
        description="You don't have permission to access requested page"
      />
      <Footer />
    </>
  );
};
export default Forbidden;
