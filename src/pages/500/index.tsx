import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorMessage from '../../components/ErrorMessage';

const ServerError = () => {
  return (
    <>
      <Header />
      <ErrorMessage
        title='Sorry, unexpected error'
        description='We are working on fixing the problem. Be back soon'
      />
      <Footer />
    </>
  );
};
export default ServerError;
