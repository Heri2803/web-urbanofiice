"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import UserStatus from "../../components/userstatus/userstatus";

const FormMitraPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    namaLengkap: "Georgius.miracel@gmail.com",
    alamatEmail: "Georgiusmiracel@gmail.com",
    alamatProperti: "Jl. Soekarno Hatta blok 3 nomor 12",
    nik: "351xxxxxxxxx",
    fotoProperti: null as File | null
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      fotoProperti: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex-1 ml-0 md:ml-52 lg:ml-64 xl:ml-64 p-4 md:p-6 mb-10">
        {/* User Status Header */}
        <div className={`mb-6 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <UserStatus name="Georgius Mario" status="Mitra" />
        </div>

        {/* Form Card */}
        <div className={`bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`} style={{ transitionDelay: '200ms' }}>
          
          {/* Form Header */}
          <div className={`mb-6 md:mb-8 transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`} style={{ transitionDelay: '400ms' }}>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Isi Formulir dibagian bawah ini untuk melengkapi data-data mitra property
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nama Lengkap KTP */}
            <div className={`transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '500ms' }}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nama Lengkap KTP
              </label>
              <input
                type="text"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-200 transition-all duration-200 text-gray-800 font-medium placeholder-gray-500 hover:border-gray-400"
                placeholder="Masukkan nama lengkap sesuai KTP"
              />
            </div>

            {/* Grid Layout for Email and Address */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '600ms' }}>
              
              {/* Alamat Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Alamat email
                </label>
                <input
                  type="email"
                  name="alamatEmail"
                  value={formData.alamatEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-200 transition-all duration-200 text-gray-800 font-medium placeholder-gray-500 hover:border-gray-400"
                  placeholder="contoh@email.com"
                />
              </div>

              {/* Alamat Properti */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Alamat properti
                </label>
                <input
                  type="text"
                  name="alamatProperti"
                  value={formData.alamatProperti}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-200 transition-all duration-200 text-gray-800 font-medium placeholder-gray-500 hover:border-gray-400"
                  placeholder="Alamat lengkap properti"
                />
              </div>
            </div>

            {/* NIK */}
            <div className={`transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '700ms' }}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                NIK
              </label>
              <input
                type="text"
                name="nik"
                value={formData.nik}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-200 transition-all duration-200 text-gray-800 font-medium placeholder-gray-500 hover:border-gray-400"
                placeholder="Nomor Induk Kependudukan"
                maxLength={16}
              />
            </div>

            {/* Upload Foto Properti */}
            <div className={`transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '800ms' }}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Foto property
              </label>
              
              {/* File Upload Area */}
              <div className="relative">
                <input
                  type="file"
                  name="fotoProperti"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 md:p-12 text-center bg-gray-50 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">
                        {formData.fotoProperti ? formData.fotoProperti.name : "Klik atau drag file ke sini"}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Format: JPG, PNG, GIF (Max: 5MB)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className={`pt-4 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`} style={{ transitionDelay: '900ms' }}>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Mulai Sewa
                </span>
              </button>

              <p className="text-center text-gray-600 text-sm mt-4 leading-relaxed">
                Anda bisa memesan ruang ini untuk penggunaan per jam, hari, maupun jangka waktu yang panjang
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormMitraPage;