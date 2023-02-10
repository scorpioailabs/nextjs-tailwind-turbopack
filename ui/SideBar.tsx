// generate a sidebar component using nextjs with tailwindcss and typescript
'use client'
import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const SideBar = () => {
    const sideBarItems = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About',
            path: '/about',
        },
        {
            name: 'Contact',
            path: '/contact',
        },
    ];
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // style the sidebar
    return (
        <div className="flex flex-col w-64 h-screen bg-gray-800 text-gray-100">
            <div className="flex flex-col items-center justify-center h-20">
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-lg">NextJS</span>
                </div>
            </div>
            <div className="flex flex-col justify-between flex-1">
                <div>
                    {sideBarItems.map((item) => (
                        <div
                            key={item.name}
                            className={`flex items-center h-12 px-4 text-sm font-medium cursor-pointer hover:bg-gray-700 ${
                                pathname === item.path ? 'bg-gray-700' : ''
                            }`}
                        >
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center h-12 px-4 text-sm font-medium cursor-pointer hover:bg-gray-700">
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default SideBar;