"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function BeforeLogin() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden"
        >
            {/* Background */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <div className="absolute right-0 top-0 w-full h-full md:w-1/2 bg-gradient-to-l from-black/20 to-transparent">
                    <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80"
                        alt="Professional Woman"
                        className="w-full h-full object-cover object-center opacity-30 md:opacity-60"
                    />
                </div>
                <div className="absolute inset-0 bg-orange-500/40"></div>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 flex min-h-screen flex-col md:flex-row">
                {/* Left Section */}
                <div className="flex flex-1 flex-col justify-center items-start p-6 md:p-16 text-left max-w-2xl">
                    {/* Logo */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <motion.div
                            initial={{ rotate: -180 }}
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-18 h-18 bg-white rounded-lg flex items-center justify-center"
                        >
                            <img
                                src="/assets/LOGO_URBAN_OFFICE.png"
                                alt="Urban Office Logo"
                                className="w-18 h-18 object-contain"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-white max-w-lg drop-shadow-lg"
                    >
                        Bekerja dari mana saja, seperti anda berada di kantor
                    </motion.h1>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-lg"
                    >
                        <Link href="/auth/login" className="flex-1">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="w-full bg-white text-orange-600 font-semibold px-8 py-4 rounded-xl shadow-xl hover:bg-gray-50 hover:shadow-2xl transition-all duration-200"
                            >
                                Masuk untuk memuat halaman!
                            </motion.button>
                        </Link>

                        <Link href="/auth/register" className="flex-1">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="w-full bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:bg-black hover:shadow-2xl transition-all duration-200"
                            >
                                Masuk untuk daftar buat akun baru!
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-wrap gap-6 text-sm mb-8"
                    >
                        <motion.a
                            whileHover={{ y: -2 }}
                            href="#"
                            className="text-white/90 hover:text-white underline underline-offset-4 hover:underline-offset-8 transition-all duration-200"
                        >
                            Lupa Password?
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -2 }}
                            href="#"
                            className="text-white/90 hover:text-white underline underline-offset-4 hover:underline-offset-8 transition-all duration-200"
                        >
                            Mode tamu!
                        </motion.a>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="flex items-center gap-4 w-full max-w-lg mb-8"
                    >
                        <div className="flex-grow h-px bg-white/30"></div>
                        <span className="text-white/90 font-medium">atau</span>
                        <div className="flex-grow h-px bg-white/30"></div>
                    </motion.div>

                    {/* Modern Google Button */}
                    <motion.button
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsOpen(true)}
                        className="group flex items-center justify-center gap-3 bg-white/95 backdrop-blur-sm text-gray-800 font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 w-full max-w-lg border border-white/50"
                    >
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-6 h-6 bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center"
                        >
                            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                        </motion.div>
                        <span className="group-hover:text-gray-900 transition-colors duration-200">
                            Continue with Google
                        </span>
                    </motion.button>

                    {/* Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="mt-12 text-sm text-white/80 max-w-lg"
                    >
                        <p>© 2024 WorkSpace. All rights reserved.</p>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <motion.a
                                whileHover={{ y: -1 }}
                                href="#"
                                className="hover:text-white underline underline-offset-4 transition-colors duration-200"
                            >
                                Privacy Policy
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -1 }}
                                href="#"
                                className="hover:text-white underline underline-offset-4 transition-colors duration-200"
                            >
                                Terms of Service
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Right Section */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.0, delay: 0.6 }}
                    className="hidden md:flex flex-1 justify-center items-center p-8 relative"
                >
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full blur-xl"
                    ></motion.div>
                    <motion.div
                        animate={{
                            y: [0, 15, 0],
                            opacity: [0.05, 0.15, 0.05]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute bottom-20 right-32 w-32 h-32 bg-white/5 rounded-full blur-2xl"
                    ></motion.div>
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="absolute bottom-16 right-16 bg-white/20 backdrop-blur-md rounded-full p-4 shadow-xl"
                    >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.3 }}
                            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white p-6 border-b border-gray-100"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <motion.div
                                        initial={{ rotate: -90 }}
                                        animate={{ rotate: 0 }}
                                        transition={{ delay: 0.2, type: "spring" }}
                                        className="w-6 h-6"
                                    >
                                        <svg viewBox="0 0 24 24" className="w-full h-full">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                    </motion.div>
                                    <h2 className="text-xl font-normal text-gray-800">Login dengan Google</h2>
                                </div>
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.15 }}
                                className="p-6"
                            >
                                <h3 className="text-2xl font-light text-gray-900 mb-6">Pilih akun</h3>
                                <p className="text-sm text-gray-600 mb-8">Lanjutkan ke Anthropic</p>

                                {/* Account Selection */}
                                <div className="space-y-3 mb-8">
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer border border-transparent hover:border-gray-200 transition-all"
                                    >
                                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-medium">
                                            M
                                        </div>
                                        <div className="flex-1 text-left">
                                            <div className="font-medium text-gray-900">Muhammad Heriyanto</div>
                                            <div className="text-sm text-gray-600">muhammadheriyanto28@gmail.com</div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.25 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer border border-transparent hover:border-gray-200 transition-all"
                                    >
                                        <div className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 text-left">
                                            <div className="font-medium text-gray-600">Gunakan akun lain</div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Footer text */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-xs text-gray-500 leading-relaxed"
                                >
                                    Sebelum menggunakan aplikasi ini, Anda dapat meninjau{' '}
                                    <span className="text-blue-600 cursor-pointer">kebijakan privasi</span>{' '}
                                    dan{' '}
                                    <span className="text-blue-600 cursor-pointer">persyaratan layanan</span>{' '}
                                    Anthropic.
                                </motion.div>
                            </motion.div>

                            {/* Bottom section */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.35 }}
                                className="px-6 pb-4"
                            >
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-1">
                                        <span className="text-gray-600">Indonesia</span>
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div className="flex gap-4">
                                        <motion.span whileHover={{ y: -1 }} className="text-blue-600 cursor-pointer">Bantuan</motion.span>
                                        <motion.span whileHover={{ y: -1 }} className="text-blue-600 cursor-pointer">Privasi</motion.span>
                                        <motion.span whileHover={{ y: -1 }} className="text-blue-600 cursor-pointer">Persyaratan</motion.span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Close button */}
                            <motion.button
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.4, type: "spring" }}
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.1)" }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
                                aria-label="Close"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}