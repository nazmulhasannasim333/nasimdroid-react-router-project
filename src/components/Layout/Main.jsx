import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Main = () => {
    const navigation = useNavigation()
    if(navigation.state === 'loading'){
       return <LoadingSpinner />
    }
    return (
        <div className='bg-[#2e3353] min-h-fit text-white'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;