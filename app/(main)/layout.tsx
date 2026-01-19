import Navbar from '@/app/components/Navbar';
import React from 'react'

export default function layout({
    children,
}:
    {
        children: React.ReactNode;

    }) {
    return (
        <>
        <Navbar />
        <main>{children}</main>
        </>
    )
}
