"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import MailsBar from "../../components/mails/mailsbar";
import { useRef } from "react";

const MailsPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // buka file manager
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log("File dipilih:", file.name);
            // di sini bisa tambahkan upload logic / preview
        }
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 ml-0 md:ml-64 lg:ml-64 xl:ml-64 flex flex-col">
                {/* Mails Header Bar */}
                <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}>
                    <MailsBar />
                </div>

                {/* Mail Content */}
                <div className="flex-1 p-4 md:p-6">
                    {/* Mail Header */}
                    <div className={`mb-4 md:mb-6 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`} style={{ transitionDelay: '200ms' }}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-0">
                                Kontak Pesan Masuk
                            </h2>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 w-fit">
                                Terjawab
                            </span>
                        </div>
                        <p className="text-sm text-gray-600">549/VO/VII/25</p>
                    </div>

                    {/* Message Card */}
                    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 mb-6 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '300ms' }}>

                        {/* Message Header */}
                        <div className="p-4 md:p-6 border-b border-gray-200">
                            <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <div className="w-5 h-5 bg-white rounded"></div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                                        Dari Customer - Wicak
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-600 mt-1">
                                        No Telp. 081243592921
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Message Content */}
                        <div className="p-4 md:p-6">
                            <div className="space-y-4">
                                {/* Customer Message */}
                                <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                                    <p className="text-gray-700 text-sm md:text-base">
                                        Bisa dibantu siapkan dokumennya
                                    </p>
                                </div>

                                {/* Payment Information */}
                                <div className="border-l-4 border-blue-400 bg-blue-50 pl-4 py-3 rounded-r-lg">
                                    <p className="text-blue-700 text-sm md:text-base font-medium">
                                        Untuk pelunasan berikut nanti 350.000
                                    </p>
                                </div>

                                {/* Payment Instructions */}
                                <div className="border-l-4 border-yellow-400 bg-yellow-50 pl-4 py-3 rounded-r-lg">
                                    <p className="text-yellow-700 text-sm md:text-base">
                                        <span className="font-medium">Instruksi:</span> Jika ingin tf bisa ke rekening BCA 8023666667 a.n. Master Penerjemah Indonesia
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reply Input Section */}
                    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 transition-all duration-500 ease-out mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`} style={{ transitionDelay: '400ms' }}>

                        {/* Input Header */}
                        <div className="p-4 border-b border-gray-200">
                            <h3 className="font-medium text-gray-800 text-sm md:text-base">Balas Pesan</h3>
                        </div>

                        {/* Message Input */}
                        <div className="p-4">
                            <textarea
                                placeholder="Ketik pesan balasan..."
                                className="w-full min-h-[120px] p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-200 transition-all duration-200 text-gray-800 resize-none text-sm md:text-base"
                            />

                            {/* Input Actions */}
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center space-x-3">
                                    {/* File Upload Button */}
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />

                                    <button
                                        onClick={handleClick}
                                        className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                            />
                                        </svg>
                                        <span className="text-sm hidden sm:inline">File</span>
                                    </button>
                                </div>

                                {/* Send Button */}
                                <button className="flex items-center space-x-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    <span className="text-sm">Kirim</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MailsPage;