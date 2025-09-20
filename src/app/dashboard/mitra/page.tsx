"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Link from "next/link";

const MitraPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex-1 ml-0 md:ml-52 lg:ml-64 xl:ml-64 mb-14">
        {/* Header with Background */}
        <div
  className="relative h-40 md:h-48 lg:h-56 overflow-hidden"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  {/* Orange Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/90 via-orange-500/70 to-orange-400/50"></div>

  {/* Header Content */}
  <div className={`relative z-10 p-3 md:p-4 lg:p-5 h-full flex flex-col justify-center items-center text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
      Mulai Jadi Mitra Sekarang!
    </h1>
    <p className="text-sm md:text-base text-white/90 max-w-xl leading-relaxed">
      Pemilik properti yang ingin menyewakan ruang kosong dan mendapat
      penghasilan tambahan Office
    </p>
  </div>
</div>

        {/* Main Content */}
        <div className="p-4 md:p-6 lg:p-8">
          {/* Section Title */}
          <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '200ms' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              PROGRAM SUKSES BERSAMA
            </h2>
          </div>

          {/* Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-12">
            {/* Card 1 */}
            <div
              className={`bg-white rounded-xl md:rounded-2xl border-2 border-orange-200 hover:border-orange-400 
    p-3 sm:p-5 md:p-8 text-center shadow-md md:shadow-lg hover:shadow-xl 
    transition-all duration-500 ease-out transform hover:scale-105 
    w-full max-w-xs h-full min-h-[120px] mx-auto flex flex-col justify-between
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div>
                <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 md:mb-6">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-3">
                  Mulai Jadi Mitra Sekarang!
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  mulai langsung jalan
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`bg-white rounded-xl md:rounded-2xl border-2 border-orange-200 hover:border-orange-400 
    p-3 sm:p-5 md:p-8 text-center shadow-md md:shadow-lg hover:shadow-xl 
    transition-all duration-500 ease-out transform hover:scale-105 
    w-full max-w-xs h-full min-h-[120px] mx-auto flex flex-col justify-between
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <div>
                <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 md:mb-6">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-3">
                  Dukungan Khusus Penuh
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  Dapat dukungan khusus untuk dapat penjualan
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className={`bg-white rounded-xl md:rounded-2xl border-2 border-orange-200 hover:border-orange-400 
    p-3 sm:p-5 md:p-8 text-center shadow-md md:shadow-lg hover:shadow-xl 
    transition-all duration-500 ease-out transform hover:scale-105 md:col-span-2 lg:col-span-1 
    w-full max-w-xs h-full min-h-[120px] mx-auto flex flex-col justify-between
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <div>
                <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 md:mb-6">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-3">
                  Mulai Jadi Mitra Sekarang!
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  Perluas jangkauan anda secara luas kepada calon customer
                </p>
              </div>
            </div>
          </div>



          {/* CTA Button */}
          <div className={`text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`} style={{ transitionDelay: '600ms' }}>
            <Link href="/dashboard/prosesmitra">
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 md:px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Masuk sebagai Mitra
                </span>
              </button>
            </Link>
          </div>

          {/* Additional Features Section */}
          <div className={`mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '700ms' }}>
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Keuntungan Maksimal</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Dapatkan revenue sharing yang menguntungkan dari setiap transaksi booking yang berhasil
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Proses Mudah</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Registrasi simpel dan cepat, langsung bisa mulai menerima booking dari customer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MitraPage;