'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80')`
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/60 to-orange-600/70"></div>
                </div>
            </div>

            {/* Back Arrow */}
            <motion.div
                className="absolute top-6 left-6 z-10"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <Link href="/auth/beforelogin">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>
                </Link>
            </motion.div>

            {/* Header Logo and Text */}
            <motion.div
                className="absolute top-8 md:top-12 left-1/2 transform -translate-x-1/2 text-center z-10"
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
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
                <h1 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">URBANOFFICE</h1>
                <p className="text-white/90 text-xs md:text-sm px-4 leading-tight">
                    VIRTUAL OFFICE + MEETING ROOM = SOLUSI BISNIS<br />
                    LENGKAP
                </p>
            </motion.div>

            {/* Register Form */}
            <motion.div
                className="relative z-20 min-h-screen flex items-center justify-center px-4 pt-32 md:pt-40 mb-8"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
            >
                <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl w-full max-w-sm md:max-w-md p-4 md:p-6">
                    <motion.form
                        className="space-y-4 md:space-y-5"
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: {},
                            show: {
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                    >
                        {/* Each input animates */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                        >
                            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Georgius Maria"
                                className="w-full px-4 py-2 md:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-gray-50 text-gray-900 placeholder-gray-400"
                            />
                        </motion.div>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                        >
                            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="georgius.miracel@gmail.com"
                                className="w-full px-4 py-2 md:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-gray-50 text-gray-900 placeholder-gray-400"
                            />
                        </motion.div>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                        >
                            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                                Sandi
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full px-4 pr-10 md:pr-12 py-2 md:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-gray-50 text-gray-900 placeholder-gray-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {showPassword ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                        >
                            <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                                Ulangi Sandi
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full px-4 pr-10 md:pr-12 py-2 md:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-gray-50 text-gray-900 placeholder-gray-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {showConfirmPassword ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </motion.div>

                        <Link href="login" passHref>
                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                            >
                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 text-white py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 transition-all duration-200 shadow-lg mt-6"
                                >
                                    Daftar
                                </button>
                            </motion.div>
                        </Link>

                        <motion.div
                            className="text-center pt-2 md:pt-4"
                            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                        >
                            <p className="text-xs md:text-sm text-gray-600">
                                Sudah punya akun? <Link href="/auth/login" className="text-orange-500 hover:text-orange-600 font-semibold">Masuk di sini</Link>
                            </p>
                        </motion.div>
                    </motion.form>
                </div>
            </motion.div>

            {/* Mobile Responsive Adjustments */}
            <style jsx>{`
        @media (max-width: 768px) {
          .min-h-screen {
            padding-top: 2rem;
          }
        }
        
        @media (max-width: 640px) {
          .bg-white.rounded-xl {
            margin: 1rem;
            padding: 1rem;
          }
        }

        @media (min-width: 769px) {
          .min-h-screen {
            padding-top: 5.5rem;
          }
        }
      `}</style>
        </div>
    );
}
