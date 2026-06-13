import React from 'react';
import Header from '../components/Header';
import ShortenForm from '../components/ShortenForm';
import ShortenedList from '../components/ShortenedList';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <Header />
            <ShortenForm />
            <ShortenedList />
        </div>
    );
};

export default Home;