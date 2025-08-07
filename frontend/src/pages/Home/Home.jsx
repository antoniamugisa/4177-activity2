import React from 'react';
import Header from '../../components/Header';

const Home = () => {
  return (
    <>
    <section>
        <Header/>
        <div className="container text-center mt-5">
          <h1>Welcome to MyApp</h1>
          <p className="lead">This is the home page of the application.</p>
        </div>
        </section></>
  );
}

export default Home;