import * as React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorMessage from '../../components/ErrorMessage';

const PageNotFound = () => {
  return (
    <>
      <Header />
      <ErrorMessage
        title='Oops!'
        description="We can't seem to find the page you are looking for"
      />
      <Footer />
    </>
  );
};
export default PageNotFound;
