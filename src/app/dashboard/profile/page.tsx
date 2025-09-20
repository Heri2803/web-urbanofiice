'use client';

import { useState } from 'react';
import Sidebar from '../../components/sidebar/sidebar';

const ProfilePage = () => {
  const [openDropdown, setOpenDropdown] = useState<string | number | null>(null);
  const [showUserPopup, setShowUserPopup] = useState(false);

  const faqItems = [
    {
      id: 1,
      icon: '🔒',
      title: 'Keamanan Akun',
      content: 'Informasi mengenai keamanan akun Anda termasuk pengaturan password, two-factor authentication, dan riwayat login terbaru.'
    },
    {
      id: 2,
      icon: '❓',
      title: 'Hubungi Bantuan',
      content: 'Tim support kami siap membantu Anda 24/7. Hubungi kami melalui email support@urbanoffice.com atau telepon 021-1234-5678.'
    },
    {
      id: 3,
      icon: '❓',
      title: 'FAQ',
      content: 'Pertanyaan yang sering diajukan mengenai layanan Urban Office, pembayaran, booking ruangan, dan fitur-fitur lainnya.'
    },
    {
      id: 4,
      icon: '📋',
      title: 'Syarat dan Ketentuan',
      content: 'Syarat dan ketentuan penggunaan layanan Urban Office yang berlaku untuk semua pengguna platform kami.'
    },
    {
      id: 5,
      icon: '🔐',
      title: 'Kebijakan Privasi',
      content: 'Kebijakan privasi mengenai bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.'
    }
  ];

  const toggleDropdown = (id: string | number) => {
  setOpenDropdown(openDropdown === id ? null : id);
};


  const toggleUserPopup = () => {
    setShowUserPopup(!showUserPopup);
  };

  const userInfo = {
    name: "Georgius Mario",
    email: "georgius.mario@example.com",
    phone: "08212345678",
    address: "Jakarta, Indonesia",
    joinDate: "January 2023",
    package: "Virtual Office Premium",
    status: "Active"
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-52 lg:ml-64 xl:ml-64 transition-all duration-500 ease-in-out">
        {/* Header Section */}
        <div 
          className="relative h-48 sm:h-56 lg:h-64 bg-cover bg-center animate-fade-in"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop)'
          }}
        >
          {/* Orange Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/90 via-orange-400/70 to-transparent"></div>
          
          {/* Header Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4 w-full">
              {/* Profile Image */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg animate-slide-in-left cursor-pointer"
                   onClick={toggleUserPopup}>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Profile Info - Stacked in tablet/mobile */}
              <div className="text-white flex-1 animate-slide-in-up">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Selamat Datang Georgius Mario
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-2">
                  <span className="inline-flex items-center bg-green-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full font-medium w-fit">
                    Virtual Office
                  </span>
                  <span className="text-sm sm:text-base opacity-90 break-all sm:break-normal">
                    08212345678 / Georgius.mirac...
                  </span>
                </div>
              </div>
            </div>
            
            {/* Detail Button - Always on the right */}
            <button 
              onClick={toggleUserPopup}
              className="bg-white text-orange-500 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg animate-slide-in-right hover:scale-105 absolute top-4 right-4 sm:relative sm:top-auto sm:right-auto">
              Detail
            </button>
          </div>
        </div>

        {/* User Info Popup */}
        {showUserPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in" onClick={toggleUserPopup}>
            <div 
              className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 m-4 w-full max-w-sm sm:max-w-md lg:max-w-lg animate-slide-in-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Popup Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Detail Pengguna</h3>
                <button 
                  onClick={toggleUserPopup}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Profile Image and Name */}
              <div className="flex flex-col items-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-full overflow-hidden border-4 border-orange-200 mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">{userInfo.name}</h4>
                <span className="inline-flex items-center bg-green-100 text-green-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium mt-2">
                  {userInfo.status}
                </span>
              </div>
              
              {/* User Details */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 text-sm sm:text-base">📧</span>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Email</p>
                    <p className="text-sm sm:text-base text-gray-800 break-all">{userInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 text-sm sm:text-base">📱</span>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Telepon</p>
                    <p className="text-sm sm:text-base text-gray-800">{userInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 text-sm sm:text-base">📍</span>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Alamat</p>
                    <p className="text-sm sm:text-base text-gray-800">{userInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 text-sm sm:text-base">📦</span>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Paket</p>
                    <p className="text-sm sm:text-base text-gray-800">{userInfo.package}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 text-sm sm:text-base">📅</span>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Bergabung Sejak</p>
                    <p className="text-sm sm:text-base text-gray-800">{userInfo.joinDate}</p>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6">
                <button className="flex-1 bg-orange-500 text-white px-4 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-sm sm:text-base">
                  Edit Profile
                </button>
                <button 
                  onClick={toggleUserPopup}
                  className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm sm:text-base">
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="p-4 sm:p-6 lg:p-8 animate-fade-in-up">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 animate-slide-in-left">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={item.id} className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 animate-fade-in-card`} style={{ animationDelay: `${index * 100}ms` }}>
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <span className="text-xl sm:text-2xl animate-bounce-light">{item.icon}</span>
                      <span className="text-base sm:text-lg font-medium text-gray-800">
                        {item.title}
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        openDropdown === item.id ? 'transform rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Content */}
                  <div className={`transition-all duration-500 ease-in-out ${
                    openDropdown === item.id 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed pt-4 text-sm sm:text-base animate-fade-in">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-6 sm:py-8 text-gray-500 text-sm animate-fade-in">
          My Office by Urban Office
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

// Add custom CSS animations
const styles = `
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slide-in-left {
    from { transform: translateX(-20px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slide-in-right {
    from { transform: translateX(20px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slide-in-up {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes fade-in-up {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes fade-in-card {
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes bounce-light {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
  }
  
  .animate-fade-in {
    animation: fade-in 0.8s ease-out;
  }
  
  .animate-slide-in-left {
    animation: slide-in-left 0.6s ease-out;
  }
  
  .animate-slide-in-right {
    animation: slide-in-right 0.6s ease-out;
  }
  
  .animate-slide-in-up {
    animation: slide-in-up 0.7s ease-out;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.9s ease-out;
  }
  
  .animate-fade-in-card {
    animation: fade-in-card 0.5s ease-out forwards;
    opacity: 0;
  }
  
  .animate-bounce-light {
    animation: bounce-light 2s infinite;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}