'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';

type MenuItem = {
  name: string;
  icon: JSX.Element;
  color: string;
  isAction: boolean;
  href?: string;                 // hanya ada kalau bukan action
  action?: () => void;           // hanya ada kalau action (contoh: logout)
};

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState('Beranda');
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
        console.log('🚪 Starting logout process...');

        // Hapus cookies
        Cookies.remove('isLoggedIn', { path: '/' });
        Cookies.remove('userEmail', { path: '/' });
        Cookies.remove('loginTime', { path: '/' });

        console.log('🍪 Cookies removed, remaining:', {
            isLoggedIn: Cookies.get('isLoggedIn'),
            userEmail: Cookies.get('userEmail'),
            loginTime: Cookies.get('loginTime')
        });

        // Hard redirect untuk trigger middleware
        setTimeout(() => {
            window.location.href = '/auth/login';
        }, 100); // Small delay untuk memastikan cookies terhapus
    };
    

    const menuItems = [
        {
            name: 'Beranda',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m0 0V11a1 1 0 011-1h2a1 1 0 011 1v10m3 0V10a1 1 0 00-1-1H9a1 1 0 00-1 1v10a1 1 0 001 1h3m0 0h3a1 1 0 001-1V10M9 21h6"
                    />
                </svg>
            ),
            href: '/dashboard/home',
            color: 'text-orange-600',
            isAction: false,
        },
        {
            name: 'Sewa',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                </svg>
            ),
            href: '/dashboard/bookingform',
            color: 'text-orange-600',
            isAction: false,
        },
        {
            name: 'Mitra',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            ),
            href: '/dashboard/mitra',
            color: 'text-orange-600',
            isAction: false,
        },
        {
            name: 'Akun',
            icon: (
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                </svg>

            ),
            href: '/dashboard/profile',
            color: 'text-orange-600',
            isAction: false,
        },
        {
            name: 'Logout',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                </svg>
            ),
            action: handleLogout,
            color: 'text-orange-600',
            isAction: true,
        },
    ];

    // Effect untuk update activeItem berdasarkan pathname
    useEffect(() => {
        const currentItem = menuItems.find(item => item.href === pathname);
        if (currentItem) {
            setActiveItem(currentItem.name);
        }
    }, [pathname]);

    // Function untuk mengecek apakah item sedang aktif
    const isItemActive = (item: MenuItem) => {
        if (item.isAction) {
            return activeItem === item.name;
        }
        return pathname === item.href;
    };

    // Render function untuk desktop menu
    const renderMenuItem = (item: MenuItem, index: number) => {
        const buttonClass = `w-full flex items-center gap-3 px-3 lg:px-4 py-2.5 lg:py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-50 hover:scale-105 hover:shadow-sm group ${activeItem === item.name
            ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-600'
            : 'text-gray-600 hover:text-gray-800'
            }`;

        const iconClass = `transition-colors duration-200 ${activeItem === item.name
            ? 'text-orange-600'
            : 'text-gray-600 group-hover:text-orange-500'
            }`;

        const textClass = `transition-colors duration-200 ${activeItem === item.name
            ? 'text-orange-600'
            : 'text-gray-600 group-hover:text-gray-800'
            }`;

        const buttonContent = (
            <>
                <span className={iconClass}>
                    {item.icon}
                </span>
                <span className={textClass}>
                    {item.name}
                </span>
            </>
        );

        if (item.isAction) {
            return (
                <button
                    key={item.name}
                    onClick={() => {
                        setActiveItem(item.name);
                        item.action();
                    }}
                    className={buttonClass}
                >
                    {buttonContent}
                </button>
            );
        } else {
            return (
                <Link key={item.name} href={item.href || '#'}>
                    <button
                        onClick={() => setActiveItem(item.name)}
                        className={buttonClass}
                    >
                        {buttonContent}
                    </button>
                </Link>
            );
        }
    };

    // Render function untuk mobile menu
    const renderMobileMenuItem = (item: MenuItem, index: number) => {
        const buttonClass = `flex flex-col items-center gap-2 text-xs font-medium transition-all duration-200 ${activeItem === item.name
            ? 'text-orange-600'
            : 'text-gray-600 hover:text-orange-500'
            }`;

        const buttonContent = (
            <>
                {item.icon}
                <span>{item.name}</span>
            </>
        );

        if (item.isAction) {
            return (
                <button
                    key={item.name}
                    onClick={() => {
                        setActiveItem(item.name);
                        item.action();
                    }}
                    className={buttonClass}
                >
                    {buttonContent}
                </button>
            );
        } else {
            return (
                <Link key={item.name} href={item.href || '#'}>
                    <button
                        onClick={() => setActiveItem(item.name)}
                        className={buttonClass}
                    >
                        {buttonContent}
                    </button>
                </Link>
            );
        }
    };

    return (
        <>
            {/* Desktop & Tablet Sidebar */}
            <div className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 lg:w-64 md:w-52 md:bg-white md:border-r md:border-gray-200 md:shadow-sm">
                {/* Logo */}
                <Link href="/dashboard/home" className="block">
                    <div className="flex items-center justify-center p-4 border-b border-gray-200">
                        <img
                            src="/assets/LOGO_URBAN_OFFICE.png"
                            alt="Urban Office Logo"
                            className="h-24 w-auto"
                        />
                    </div>
                </Link>
                {/* Menu Items */}
                <nav className="flex-1 p-3 lg:p-4 space-y-2">
                    {menuItems.map((item, index) => renderMenuItem(item, index))}
                </nav>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
                <nav className="relative flex justify-between items-center px-4 py-2">
                    {/* Grup kiri (2 item: Sewa, Mitra) */}
                    <div className="flex gap-12 flex-1 justify-start">
                        {menuItems.slice(1, 3).map((item, index) => renderMobileMenuItem(item, index))}
                    </div>

                    {/* Logo di tengah */}
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Link href="/dashboard/home">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-white">
                                <img
                                    src="/assets/LOGO_URBAN_OFFICE.png"
                                    alt="Urban Office Logo"
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Grup kanan (2 item: Akun, Logout) */}
                    <div className="flex gap-12 flex-1 justify-end">
                        {menuItems.slice(3, 5).map((item, index) => renderMobileMenuItem(item, index + 3))}
                    </div>
                </nav>
            </div>
            {/* Mobile bottom padding to prevent content overlap */}
            <div className="md:hidden h-20"></div>
        </>
    );
}