import Navbar from '@/app/components/Navbar';
import React from 'react'
import Footer from '../components/Footer';

export default function layout({
    children,
}:
    {
        children: React.ReactNode;

    }) {
    return (
        <>
        <Navbar />
        <main className='mt-28'>{children}</main>
        <Footer />
        </>
    )
}
