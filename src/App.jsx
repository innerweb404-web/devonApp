import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import Loading from './pages/Loading';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false),5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loading text='For Lady Vivian ' /> : <Layout />}
    </>
  );
};

export default App;
