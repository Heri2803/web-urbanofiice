"use client";
import React, { useState, useEffect } from "react";

interface RoomCardProps {
  roomType: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ roomType }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setCurrentImageIndex(0);
  }, [roomType]);

  const getRoomData = (type: string) => {
    const roomData: { [key: string]: { images: string[]; benefits: string[] } } = {
      "Virtual Office": {
        images: [
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop"
        ],
        benefits: [
          "Alamat bisnis prestisius untuk perusahaan Anda",
          "Layanan penerima telepon dan mail handling profesional",
          "Akses meeting room ketika dibutuhkan dengan fleksibilitas tinggi"
        ]
      },
      "Event Space": {
        images: [
          "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop"
        ],
        benefits: [
          "Ruang luas dengan kapasitas hingga 200 orang untuk event besar",
          "Fasilitas audio visual lengkap dan sistem pencahayaan profesional",
          "Catering service dan dekorasi dapat disesuaikan dengan tema acara"
        ]
      },
      "Coworking Space": {
        images: [
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600&h=400&fit=crop"
        ],
        benefits: [
          "Lingkungan kerja kolaboratif dengan networking opportunities",
          "Internet super cepat dan fasilitas kerja modern lengkap",
          "Komunitas profesional dan akses 24/7 untuk produktivitas maksimal"
        ]
      },
      "Meeting Room": {
        images: [
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=600&h=400&fit=crop"
        ],
        benefits: [
          "Ruang meeting private dengan teknologi presentasi terdepan",
          "Kapasitas fleksibel dari 2-20 orang sesuai kebutuhan tim",
          "Whiteboard interaktif dan video conference system terintegrasi"
        ]
      }
    };

    return roomData[type] || roomData["Virtual Office"];
  };

  const currentRoom = getRoomData(roomType);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === currentRoom.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentRoom.images.length - 1 : prev - 1
    );
  };

  return (
    <div className={`bg-white shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all duration-700 ease-out ${
      isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
    }`}>
      {/* Image Slider */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {currentRoom.images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={image}
                alt={`${roomType} ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/600x400/f3f4f6/9ca3af?text=${encodeURIComponent(roomType)}`;
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {currentRoom.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentImageIndex 
                  ? 'bg-orange-500 scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-3">
          {roomType}
        </h3>
        
        <div className="space-y-3">
          {currentRoom.benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`flex items-start space-x-3 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-6 p-3 bg-orange-50 rounded-lg transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '600ms' }}>
          <p className="text-orange-800 text-sm font-medium">
            ✨ Fasilitas premium dengan standar internasional
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;