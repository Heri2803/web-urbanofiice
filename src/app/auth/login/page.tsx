'use client';

import { useState, useEffect } from 'react';
import Link from "next/link"
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const router = useRouter();

    // Default credentials
    const defaultCredentials = {
        email: 'admin@urbanoffice.com',
        password: 'admin123'
    };

    useEffect(() => {
        const isLoggedIn = Cookies.get("isLoggedIn");
        if (isLoggedIn === "true") {
            router.push("/dashboard/home");
        }
    }, [router]);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !password) {
            setNotificationMessage('Harap masukkan email dan sandi yang benar');
            setShowNotification(true);
            return;
        }

        if (email === defaultCredentials.email && password === defaultCredentials.password) {
            // ✅ Set cookies, bukan localStorage
            Cookies.set('isLoggedIn', 'true', { expires: 1 }); // berlaku 1 hari
            Cookies.set('userEmail', email, { expires: 1 });
            Cookies.set('loginTime', new Date().toISOString(), { expires: 1 });

            // Redirect ke dashboard
            router.push('/dashboard/home');
        } else {
            setNotificationMessage('Harap masukkan email dan sandi yang benar');
            setShowNotification(true);
        }
    };

    const closeNotification = () => {
        setShowNotification(false);
        setNotificationMessage('');
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Notification Popup */}
            {showNotification && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={closeNotification}
                >
                    <motion.div
                        className="bg-white rounded-xl shadow-2xl p-6 m-4 w-full max-w-sm"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">Peringatan</h3>
                            <button
                                onClick={closeNotification}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <p className="text-gray-700 text-sm">{notificationMessage}</p>
                        </div>
                        <div className="text-center">
                            <button
                                onClick={closeNotification}
                                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                            >
                                OK
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Background Image with Overlay */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80')`
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/40 to-orange-600/50"></div>
                </div>
            </motion.div>

            {/* Back Arrow */}
            <div className="absolute top-6 left-6 z-50">
      <button
        onClick={() => {
          router.push("/auth/beforelogin");
        }}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
    </div>
            {/* Header Logo and Text */}
            <motion.div
                className="absolute top-8 md:top-12 left-1/2 transform -translate-x-1/2 text-center z-10"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
            >
                <div className="mb-3">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 bg-white rounded-lg flex items-center justify-center shadow-lg">
                        <img
                            src="/assets/LOGO_URBAN_OFFICE.png"
                            alt="Urban Office Logo"
                            className="w-18 h-18 object-contain"
                        />
                    </div>
                </div>
                <p className="text-white/90 text-xs md:text-sm px-4 leading-tight font-Healvatica">
                    VIRTUAL OFFICE + MEETING ROOM = SOLUSI BISNIS<br />
                    LENGKAP
                </p>
            </motion.div>

            {/* Login Form */}
            <motion.div
                className="relative z-20 min-h-screen flex items-center justify-center px-4 pt-32 md:pt-40"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl w-full max-w-sm md:max-w-md p-4 md:p-6">
                    <div className="text-center mb-4 md:mb-6">
                        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Masuk ke Akun</h2>
                        <p className="text-sm text-gray-600">Kelola bisnis Anda dengan mudah</p>
                    </div>

                    <form className="space-y-4 md:space-y-5" onSubmit={handleLogin}>
                        {/* Email Field */}
                        <motion.div
                            initial={{ x: -40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                                Email:
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="nama@email.com"
                                    className="w-full pl-9 md:pl-10 pr-4 py-2 md:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-gray-50 text-gray-900 placeholder-gray-400"
                                />
                            </div>
                        </motion.div>

                        {/* Password Field */}
                        <motion.div
                            initial={{ x: 40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                                Sandi:
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Masukkan sandi Anda"
                                    className="w-full pl-9 md:pl-10 pr-10 md:pr-12 py-2 md:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-gray-50 text-gray-900 placeholder-gray-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-900 placeholder-gray-400"
                                >
                                    👁
                                </button>
                            </div>
                        </motion.div>

                        {/* Forgot Password Link */}
                        <motion.div
                            className="text-right"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        >
                            <a href="#" className="text-xs md:text-sm text-orange-500 hover:text-orange-600 font-medium">
                                Lupa Sandi? <span className="underline">Reset here</span>
                            </a>
                        </motion.div>

                        {/* Login Button */}
                        <motion.button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 transition-all duration-200 shadow-lg"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                        >
                            Masuk
                        </motion.button>

                        {/* Register Link */}
                        <Link href="/auth/register">
                            <motion.button
                                type="button"
                                className="text-center pt-2 md:pt-4 text-xs md:text-sm text-gray-600 hover:text-gray-800 transition-colors w-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.6, duration: 0.6 }}
                            >
                                Belum punya akun? <span className="text-orange-500 hover:text-orange-600 font-semibold">Daftar sekarang</span>
                            </motion.button>
                        </Link>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}