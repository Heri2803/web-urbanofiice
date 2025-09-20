"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "../../components/sidebar/sidebar";

const ProsesMitraPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const processSteps = [
        {
            icon: "📄",
            title: "Isi Formulir",
            subtitle: "Pendaftaran",
            description: "Lengkapi formulir pendaftaran dengan data lengkap properti Anda"
        },
        {
            icon: "🔍",
            title: "Verifikasi",
            subtitle: "Screening",
            description: "Tim kami akan melakukan verifikasi data dan lokasi properti"
        },
        {
            icon: "📋",
            title: "Dokumentasi",
            subtitle: "Listing",
            description: "Proses dokumentasi dan pembuatan listing properti Anda"
        },
        {
            icon: "✍️",
            title: "Penandatanganan",
            subtitle: "Kontrak",
            description: "Penandatanganan kontrak kerjasama sebagai mitra resmi"
        },
        {
            icon: "📈",
            title: "Mulai diterima platform",
            subtitle: "Pendampingan",
            description: "Properti Anda mulai dapat dipesan oleh customer"
        },
        {
            icon: "💰",
            title: "Laporan dan Pendampingan",
            subtitle: "Komisi",
            description: "Terima laporan rutin dan komisi dari setiap booking"
        },
        {
            icon: "💼",
            title: "Proses Transaksi",
            subtitle: "Komisi",
            description: "Kelola transaksi booking dan terima komisi secara otomatis"
        }
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Content */}
            <div className="flex-1 ml-0 md:ml-52 lg:ml-64 xl:ml-64">
                {/* Header with Background */}
                <div
                    className="relative h-40 md:h-48 lg:h-56 overflow-hidden"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center top"
                    }}
                >
                    {/* Orange Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/90 via-orange-500/70 to-orange-400/50"></div>

                    {/* Header Content */}
                    <div className={`relative z-10 p-3 md:p-4 lg:p-5 h-full flex flex-col justify-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        {/* Back Button */}
                        <div className="mb-2 md:mb-3">
                            <Link href="/dashboard/mitra" className="inline-flex items-center text-white hover:text-orange-200 transition-colors duration-200 group">
                                <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                                <span className="font-semibold text-xs md:text-sm">PENDIRIAN BADAN USAHA</span>
                            </Link>
                        </div>

                        {/* Title and Description */}
                        <div className="text-center max-w-2xl mx-auto">
                            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 leading-tight">
                                Dapatkan komisi dari setiap penyewaan dengan jadi Mitra Urban Office
                            </h1>
                            <p className="text-xs md:text-sm text-white/90 leading-relaxed">
                                Layanan persewaan workspace online dan offline terpercaya untuk kebutuhan bisnis modern
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-4 md:p-6 lg:p-8 mb-12">
                    {/* Process Flow Section */}
                    <div className={`bg-white rounded-2xl shadow-xl p-3 md:p-4 lg:p-8 mb-4 md:mb-6 lg:mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '200ms' }}>
                        {/* Section Title */}
                        <div className="text-center mb-3 md:mb-4 lg:mb-12">
                            <h2 className="text-sm md:text-base lg:text-3xl font-bold text-gray-800 mb-1 md:mb-2">
                                Proses Alur Kerjasama Urban Office dengan Pemilik
                            </h2>
                        </div>

                        {/* Process Steps Grid - All 7 steps in one row for desktop */}
                        <div className="grid grid-cols-7 gap-1 md:gap-2 lg:gap-8 relative">
                            {processSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`text-center transition-all duration-500 ease-out transform hover:scale-105 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                        }`}
                                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                                >
                                    {/* Icon Circle */}
                                    <div className="w-6 h-6 md:w-8 md:h-8 lg:w-20 lg:h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2 lg:mb-4 shadow-lg">
                                        <span className="text-xs md:text-sm lg:text-3xl">{step.icon}</span>
                                    </div>

                                    {/* Step Title */}
                                    <h3 className="font-bold text-gray-800 mb-0.5 text-[5px] md:text-[8px] lg:text-base leading-tight">
                                        {step.title}
                                    </h3>

                                    {/* Step Subtitle */}
                                    <p className="text-orange-500 font-medium text-[4px] md:text-[6px] lg:text-sm mb-1 md:mb-2 leading-tight">
                                        {step.subtitle}
                                    </p>

                                    {/* Connection Line (horizontal for all steps except last) */}
                                    {index < processSteps.length - 1 && (
                                        <div className="absolute top-3 md:top-4 lg:top-10 left-full w-1 md:w-2 lg:w-8 h-0.5 bg-orange-300"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Partnership Options Section */}
                    <div
                        className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        style={{ transitionDelay: "400ms" }}
                    >
                        {/* Section Title */}
                        <div className="text-center mb-6 md:mb-8">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                                PILIH DAFTAR
                            </h2>
                        </div>

                        {/* Partnership Card */}
                        <div
                            className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: "400ms" }}
                        >
                            {/* Partnership Card */}
                            <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow-md md:shadow-lg lg:shadow-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01] mb-6 md:mb-8 lg:mb-10">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    {/* Image Section */}
                                    <div className="relative h-32 md:h-40 lg:h-64 lg:h-auto">
                                        <img
                                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Modern Office Space"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden"></div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-2 md:p-3 lg:p-8 flex flex-col justify-center">
                                        <div className="mb-2 md:mb-3 lg:mb-6">
                                            <h3 className="text-sm md:text-base lg:text-xl font-bold text-gray-800 mb-2 lg:mb-4">
                                                Mitra Property (Rumah, Ruko, Gedung)
                                            </h3>
                                            <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed mb-2 md:mb-3 lg:mb-6">
                                                Jadikan properti kosong Anda produktif dengan bergabung secara
                                                transparan melalui aplikasi Urban Office. Dapatkan penghasilan pasif
                                                dari properti yang tidak terpakai.
                                            </p>

                                            {/* Benefits List */}
                                            <div className="space-y-1 md:space-y-2 mb-3 md:mb-4 lg:mb-6">
                                                <div className="flex items-center text-gray-700 text-xs md:text-sm lg:text-base">
                                                    <svg
                                                        className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-green-500 mr-1 md:mr-2 lg:mr-3"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 
                                                                01-1.414 0l-4-4a1 1 0 
                                                                011.414-1.414L8 12.586l7.293-7.293a1 1 0 
                                                                011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <span>Komisi hingga 30% dari setiap booking</span>
                                                </div>
                                                <div className="flex items-center text-gray-700 text-xs md:text-sm lg:text-base">
                                                    <svg
                                                        className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-green-500 mr-1 md:mr-2 lg:mr-3"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 
                                                                01-1.414 0l-4-4a1 1 0 
                                                                011.414-1.414L8 12.586l7.293-7.293a1 1 0 
                                                                011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <span>Pengelolaan properti secara profesional</span>
                                                </div>
                                                <div className="flex items-center text-gray-700 text-xs md:text-sm lg:text-base">
                                                    <svg
                                                        className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-green-500 mr-1 md:mr-2 lg:mr-3"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 
                                                                01-1.414 0l-4-4a1 1 0 
                                                                011.414-1.414L8 12.586l7.293-7.293a1 1 0 
                                                                011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <span>Laporan keuangan transparan</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        {/* CTA Button */}
                                        <Link href="/dashboard/mitraform">
                                            <div className="flex justify-end lg:justify-start">
                                                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 md:py-2.5 lg:py-4 px-3 md:px-4 lg:px-6 rounded-md md:rounded-lg shadow-md md:shadow-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-xs md:text-sm lg:text-base">
                                                    <span className="flex items-center justify-center">
                                                        <svg
                                                            className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mr-1 md:mr-2"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 
               01-2-2V5a2 2 0 
               012-2h5.586a1 1 0 
               01.707.293l5.414 5.414a1 1 0 
               01.293.707V19a2 2 0 
               01-2 2z"
                                                            />
                                                        </svg>
                                                        ISI FORM
                                                    </span>
                                                </button>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProsesMitraPage;