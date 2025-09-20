"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import UserStatus from "../../components/userstatus/userstatus";
import RoomCard from "../../components/roomcard/roomcard"; // Import component RoomCard
import Link from "next/link";

const BookingForm: React.FC = () => {
    const [formData, setFormData] = useState({
        city: "Surabaya",
        ruang: "Virtual Office",
        jumlahOrang: "",
        tanggal: "",
        pkp: "Non PKP",
        nama: "Georgius Mario",
        nomor: "082123456789",
        email: "Georgius.miracel@gmail.com",
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Content */}
            <div className="flex-1 ml-0 md:ml-50 lg:ml-64 xl:ml-64 p-4 md:p-6 mb-12">
                {/* User Status */}
                <div className={`mb-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}>
                    <UserStatus name="Georgius Mario" status="Virtual Office" />
                </div>

                {/* Main Content Container */}
                <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
                    {/* Room Card - Mobile/Tablet: Above form, Desktop: Left side */}
                    <div className={`lg:w-1/3 order-1 lg:order-1 transition-all duration-700 ease-out ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`} style={{ transitionDelay: '300ms' }}>
                        <RoomCard roomType={formData.ruang} />
                    </div>

                    {/* Booking Form - Mobile/Tablet: Below card, Desktop: Right side */}
                    <div className={`lg:w-2/3 order-2 lg:order-2 transition-all duration-700 ease-out ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`} style={{ transitionDelay: '200ms' }}>
                        <div className="bg-white shadow-lg hover:shadow-xl rounded-xl p-4 md:p-6">
                            {/* Header */}
                            <div className={`mb-6 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                }`} style={{ transitionDelay: '400ms' }}>
                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Form Booking</h2>
                                <p className="text-gray-600">Isi form di bawah untuk melakukan pemesanan ruang kerja</p>
                            </div>

                            {/* Pilihan Kota dan Ruang */}
                            <div className={`flex flex-col md:flex-row md:space-x-4 mb-6 space-y-2 md:space-y-0 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                                }`} style={{ transitionDelay: '500ms' }}>
                                <div className="flex-1 w-full">
                                    <label className="block text-sm font-semibold text-gray-800 mb-2">Pilih Kota</label>
                                    <select
                                        className="border-2 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 rounded-lg p-3 w-full text-gray-800 font-medium transition-all duration-200 hover:border-gray-400"
                                        value={formData.city}
                                        onChange={(e) =>
                                            setFormData({ ...formData, city: e.target.value })
                                        }
                                    >
                                        <option>Surabaya</option>
                                        <option>Jakarta</option>
                                        <option>Bandung</option>
                                    </select>
                                </div>

                                <div className="flex-1 w-full">
                                    <label className="block text-sm font-semibold text-gray-800 mb-2">Jenis Ruang</label>
                                    <input
                                        type="text"
                                        className="border-2 border-gray-300 bg-gray-50 rounded-lg p-3 w-full text-gray-800 font-medium"
                                        value={`${formData.ruang}`}
                                        readOnly
                                    />
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className={`mb-6 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`} style={{ transitionDelay: '600ms' }}>
                                <label className="block text-sm font-semibold text-gray-800 mb-3">Pilih Jenis Ruang</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 md:gap-3">
                                    {["Virtual Office", "Event Space", "Coworking Space", "Meeting Room"].map(
                                        (tab, index) => (
                                            <button
                                                key={tab}
                                                className={`px-3 md:px-4 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${formData.ruang === tab
                                                        ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
                                                        : "bg-gray-100 hover:bg-gray-200 text-gray-800 hover:shadow-md"
                                                    }`}
                                                onClick={() => setFormData({ ...formData, ruang: tab })}
                                                style={{ transitionDelay: `${700 + index * 100}ms` }}
                                            >
                                                {tab}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Form Fields Row 1 */}
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`} style={{ transitionDelay: '800ms' }}>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-2">Jumlah Orang</label>
                                    <input
                                        type="number"
                                        placeholder="Masukkan jumlah orang"
                                        className="border-2 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 rounded-lg p-3 w-full text-gray-800 font-medium placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                                        value={formData.jumlahOrang}
                                        onChange={(e) =>
                                            setFormData({ ...formData, jumlahOrang: e.target.value })
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-2">Tanggal Booking</label>
                                    <input
                                        type="date"
                                        className="border-2 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 rounded-lg p-3 w-full text-gray-800 font-medium transition-all duration-200 hover:border-gray-400"
                                        value={formData.tanggal}
                                        onChange={(e) =>
                                            setFormData({ ...formData, tanggal: e.target.value })
                                        }
                                    />
                                </div>
                            </div>

                            {/* Form Fields Row 2 */}
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`} style={{ transitionDelay: '900ms' }}>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-2">Status PKP</label>
                                    <select
                                        className="border-2 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 rounded-lg p-3 w-full text-gray-800 font-medium transition-all duration-200 hover:border-gray-400"
                                        value={formData.pkp}
                                        onChange={(e) => setFormData({ ...formData, pkp: e.target.value })}
                                    >
                                        <option>Non PKP</option>
                                        <option>PKP</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-2">Nomor Telepon</label>
                                    <input
                                        type="text"
                                        placeholder="Nomor Telepon"
                                        className="border-2 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 rounded-lg p-3 w-full text-gray-800 font-medium placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                                        value={formData.nomor}
                                        onChange={(e) =>
                                            setFormData({ ...formData, nomor: e.target.value })
                                        }
                                    />
                                </div>
                            </div>

                            {/* Form Fields Row 3 */}
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`} style={{ transitionDelay: '1000ms' }}>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-2">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        placeholder="Nama Lengkap"
                                        className="border-2 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 rounded-lg p-3 w-full text-gray-800 font-medium placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                                        value={formData.nama}
                                        onChange={(e) =>
                                            setFormData({ ...formData, nama: e.target.value })
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="border-2 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 rounded-lg p-3 w-full text-gray-800 font-medium placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                    />
                                </div>
                            </div>

                            {/* Button */}
                            <div className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`} style={{ transitionDelay: '1100ms' }}>
                                <Link href="/dashboard/bookinginvoice">
                                    <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                                        <span className="flex items-center justify-center">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            Mulai Sewa
                                        </span>
                                    </button>
                                </Link>
                            </div>

                            <div className={`text-center mt-4 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`} style={{ transitionDelay: '1200ms' }}>
                                <p className="text-gray-600 text-sm px-2 leading-relaxed">
                                    Anda bisa memesan ruang ini untuk penggunaan per jam, hari, maupun
                                    jangka waktu yang panjang
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;