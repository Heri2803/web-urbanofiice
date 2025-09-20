"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Link from "next/link";

const InvoiceBooking: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState('');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Content */}
            <div className="flex-1 ml-0 md:ml-53 lg:ml-64 xl:ml-64 mb-16">
                {/* Header with Background */}
                <div
                    className="relative h-48 md:h-56 overflow-hidden"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    {/* Orange Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/90 via-orange-500/70 to-orange-400/60"></div>

                    {/* Header Content */}
                    <div className={`relative z-10 p-4 md:p-6 h-full flex flex-col justify-between transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                        {/* Top Section */}
                        <div className="flex items-center justify-between">
                            <Link href="/dashboard/home">
                            <div className="flex items-center space-x-3">
                                <button className="text-white hover:text-orange-200 transition-colors duration-200">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <h1 className="text-white text-xl md:text-2xl font-bold">BOOKING</h1>
                            </div>
                            </Link>

                            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
  <img
    src="/assets/LOGO_URBAN_OFFICE.png"
    alt="Urban Office Logo"
    className="w-18 h-18 object-contain"
  />
</div>

                        </div>

                        {/* Bottom Section */}
                        <div>
                            <p className="text-white/90 text-sm md:text-base">
                                Semua transaksi yang sudah aktif dan menunggu pembayaran
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-4 md:p-6">
                    {/* First Invoice Card */}
                    <div className={`bg-white rounded-xl shadow-lg mb-6 overflow-hidden transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '200ms' }}>
                        {/* Success Header */}
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 flex items-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-green-800">Berhasil</span>
                            </div>
                            <div className="ml-auto">
                                <span className="text-2xl md:text-3xl font-bold text-gray-800">Rp. 5.280.000</span>
                                <p className="text-sm text-gray-600">PT URBAN KREASI BERSAMA</p>
                            </div>
                        </div>

                        {/* Invoice Details */}
                        <div className="p-4 md:p-6">
                            {/* Payment Details */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-800 mb-4">Detail Pembayaran</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Nominal Pesanan</span>
                                        <span className="font-medium text-gray-600 ">Rp. 350.000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Nominal Diskon</span>
                                        <span className="font-medium text-red-500">Rp. -10.000</span>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-gray-800">Nominal Pembayaran</span>
                                        <span className="font-semibold text-gray-600">Rp. 340.000</span>
                                    </div>
                                </div>
                            </div>

                            {/* Booking Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <div className="flex items-center space-x-3 mb-4">
                                        <img
    src="/assets/LOGO_URBAN_OFFICE.png"
    alt="Urban Office Logo"
    className="w-14 h-14 object-contain ml-7"
  />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm text-gray-600">Kode Pemesanan</p>
                                        <p className="font-semibold text-gray-600">549/VO/VIII/25</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-600">Tanggal Transaksi</p>
                                        <p className="font-semibold text-gray-600">25/12/2025</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Jenis Layanan</p>
                                        <p className="font-semibold text-gray-600">Virtual Office</p>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="mt-8">
                                <h3 className="font-semibold text-gray-800 mb-4">Timeline Layanan</h3>
                                <div className="relative">
                                    {/* Timeline Line */}
                                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-200"></div>

                                    {/* Timeline Items */}
                                    <div className="space-y-4">
                                        <div className="relative flex items-start space-x-4">
                                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center relative z-10">
                                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">13:40 25 Juni 2025</p>
                                                <p className="font-medium text-gray-600">Amaris Hotel</p>
                                            </div>
                                        </div>

                                        <div className="relative flex items-start space-x-4">
                                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center relative z-10">
                                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">13:40 24 Juni 2025</p>
                                                <p className="font-medium text-gray-600">Amaris Hotel</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Button */}
                            <div className="mt-6 pt-4 border-t">
                                <button
                                    onClick={() => setShowPaymentModal(true)}
                                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <span className="flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                        Bayar Sekarang
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Second Invoice Card */}
                    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '400ms' }}>
                        {/* Success Header */}
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 flex items-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-green-800">Berhasil</span>
                            </div>
                            <div className="ml-auto">
                                <span className="text-2xl md:text-3xl font-bold text-gray-800">Rp. 8.000.000</span>
                                <p className="text-sm text-gray-600">PT URBAN KREASI BERSAMA</p>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="p-4 md:p-6 pb-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Modal */}
                {showPaymentModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b">
                                <h3 className="text-xl font-bold text-gray-800">Pilih Metode Pembayaran</h3>
                                <button
                                    onClick={() => setShowPaymentModal(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 space-y-6">
                                {/* Bank Transfer Section */}
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-3">Transfer Bank</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { name: 'BCA', color: 'bg-blue-600', logo: '🏦' },
                                            { name: 'BNI', color: 'bg-orange-500', logo: '🏦' },
                                            { name: 'BRI', color: 'bg-blue-800', logo: '🏦' },
                                            { name: 'Mandiri', color: 'bg-yellow-500', logo: '🏦' }
                                        ].map((bank) => (
                                            <button
                                                key={bank.name}
                                                onClick={() => setSelectedPayment(bank.name)}
                                                className={`p-4 border-2 rounded-lg transition-all duration-200 hover:shadow-md ${selectedPayment === bank.name
                                                        ? 'border-orange-500 bg-orange-50'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                            >
                                                <div className="flex flex-col items-center space-y-2">
                                                    <div className={`w-10 h-10 ${bank.color} rounded-lg flex items-center justify-center text-white text-lg`}>
                                                        {bank.logo}
                                                    </div>
                                                    <span className="font-medium text-gray-800">{bank.name}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* E-Wallet Section */}
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-3">E-Wallet</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { name: 'OVO', color: 'bg-purple-600', logo: '💜' },
                                            { name: 'DANA', color: 'bg-blue-500', logo: '💙' },
                                            { name: 'ShopeePay', color: 'bg-orange-500', logo: '🛒' },
                                            { name: 'GoPay', color: 'bg-green-500', logo: '🚗' }
                                        ].map((wallet) => (
                                            <button
                                                key={wallet.name}
                                                onClick={() => setSelectedPayment(wallet.name)}
                                                className={`p-4 border-2 rounded-lg transition-all duration-200 hover:shadow-md ${selectedPayment === wallet.name
                                                        ? 'border-orange-500 bg-orange-50'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                            >
                                                <div className="flex flex-col items-center space-y-2">
                                                    <div className={`w-10 h-10 ${wallet.color} rounded-lg flex items-center justify-center text-white text-lg`}>
                                                        {wallet.logo}
                                                    </div>
                                                    <span className="font-medium text-gray-800">{wallet.name}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* QRIS Section */}
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-3">QRIS</h4>
                                    <button
                                        onClick={() => setSelectedPayment('QRIS')}
                                        className={`w-full p-4 border-2 rounded-lg transition-all duration-200 hover:shadow-md ${selectedPayment === 'QRIS'
                                                ? 'border-orange-500 bg-orange-50'
                                                : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <div className="flex items-center justify-center space-x-3">
                                            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white text-lg">
                                                📱
                                            </div>
                                            <span className="font-medium text-gray-800">QRIS - Scan & Pay</span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 border-t bg-gray-50 rounded-b-xl">
                                <div className="flex space-x-3">
                                    <button
                                        onClick={() => setShowPaymentModal(false)}
                                        className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (selectedPayment) {
                                                alert(`Pembayaran dipilih: ${selectedPayment}`);
                                                setShowPaymentModal(false);
                                                setSelectedPayment('');
                                            }
                                        }}
                                        disabled={!selectedPayment}
                                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${selectedPayment
                                                ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg'
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        Bayar Sekarang
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InvoiceBooking;