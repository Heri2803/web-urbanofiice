"use client";
import Sidebar from '../../components/sidebar/sidebar';
import Image from "next/image";
import Link from "next/link";
import UserStatus from '../../components/userstatus/userstatus';
import { useState, useEffect } from 'react';


export default function HomePage() {
    const [isVisible, setIsVisible] = useState(false);
    const [heroVisible, setHeroVisible] = useState(false);
    const [servicesVisible, setServicesVisible] = useState(false);
    const [whyChooseVisible, setWhyChooseVisible] = useState(false);
    const [infoVisible, setInfoVisible] = useState(false);
    const [showAll, setShowAll] = useState(false);

    // Tambahkan state ini untuk filter room type
    const [selectedRoomType, setSelectedRoomType] = useState<string | null>(null);

    useEffect(() => {
        setIsVisible(true);

        const timer1 = setTimeout(() => setHeroVisible(true), 200);
        const timer2 = setTimeout(() => setServicesVisible(true), 400);
        const timer3 = setTimeout(() => setWhyChooseVisible(true), 600);
        const timer4 = setTimeout(() => setInfoVisible(true), 800);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, []);

    return (

        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 ml-0 md:ml-50 lg:ml-64 xl:ml-64 p-4 md:p-6 mb-8">
                {/* User Status */}
                <div className={`mb-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}>
                    <UserStatus name="Georgius Mario" status="Virtual Office" />
                </div>

                {/* Hero Section */}
                <div className={`relative rounded-lg mx-2 sm:mx-4 md:mx-6 lg:mx-8 mt-6 overflow-hidden transition-all duration-800 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1590650046871-92c887180603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80')"
                        }}
                    ></div>
                    {/* Orange Gradient Overlay - fading from bottom to middle */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500 via-orange-400/50"></div>
                    {/* Content */}
                    <div className="relative rounded-lg mx-1 sm:mx-4 md:mx-6 lg:mx-8 mt-6 overflow-hidden">
                        {/* Content */}
                        <div className="relative px-4 sm:px-6 md:px-12 py-4 sm:py-6 md:py-8 lg:py-16 xl:py-20">
                            <div className="w-full sm:w-4/5 max-w-6xl">
                                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg">
                                    STARTUP START
                                </h1>
                                <p className="text-sm sm:text-lg md:text-xl text-white mb-3 sm:mb-6 opacity-90 drop-shadow">
                                    Menu Virtual Office FREE PENDIRIAN PT Perorangan
                                </p>

                            </div>
                            <div className="flex justify-end pr-12">
                                <div className="inline-flex items-center justify-center bg-red-500 text-white w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 hover:scale-105">
                                    <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-medium text-center leading-tight px-1">
                                        BEBAS AKSES RUANG MEETING
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className={`px-4 md:px-8 py-8 transition-all duration-800 ease-out ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-1 md:gap-5 
                  max-w-sm sm:max-w-[280px] md:max-w-md lg:max-w-2xl mx-auto">
                        {/* Booking */}
                        <Link href="/dashboard/bookingform" className="block">
                            <div className="bg-white rounded-lg p-1.5 sm:p-1.5 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group md:aspect-square aspect-square flex flex-col items-center justify-center hover:scale-105 md:w-full md:h-full">
                                <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-8 md:h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-1 sm:mb-1 md:mb-2 group-hover:bg-orange-200 transition-colors">
                                    <svg
                                        className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 md:w-4 md:h-4 text-orange-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-[10px] sm:text-[10px] md:text-xs text-gray-900 text-center leading-tight px-0.5">
                                    Booking
                                </h3>
                            </div>
                        </Link>

                        {/* Call */}
                        <Link href="/dashboard/calls" className="block">
                            <div className="bg-white rounded-lg p-1.5 sm:p-1.5 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group md:aspect-square aspect-square flex flex-col items-center justify-center hover:scale-105 md:w-full md:h-full">
                                <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-1 sm:mb-1 md:mb-2 group-hover:bg-blue-200 transition-colors">
                                    <svg className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 md:w-4 md:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-[10px] sm:text-[10px] md:text-xs text-gray-900 text-center leading-tight px-0.5">
                                    Call
                                </h3>
                            </div>
                        </Link>

                        {/* Mails */}
                        <Link href="/dashboard/mails" className="block">
                            <div className="bg-white rounded-lg p-1.5 sm:p-1.5 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group md:aspect-square aspect-square flex flex-col items-center justify-center hover:scale-105 md:w-full md:h-full">
                                <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-8 md:h-8 bg-green-100 rounded-lg flex items-center justify-center mb-1 sm:mb-1 md:mb-2 group-hover:bg-green-200 transition-colors">
                                    <svg className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 md:w-4 md:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-[10px] sm:text-[10px] md:text-xs text-gray-900 text-center leading-tight px-0.5">
                                    Mails
                                </h3>
                            </div>
                        </Link>

                        {/* Invoice */}
                        <Link href="/dashboard/invoice" className="block">
                            <div className="bg-white rounded-lg p-1.5 sm:p-1.5 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group md:aspect-square aspect-square flex flex-col items-center justify-center hover:scale-105 md:w-full md:h-full">
                                <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-8 md:h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-1 sm:mb-1 md:mb-2 group-hover:bg-purple-200 transition-colors">
                                    <svg className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 md:w-4 md:h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-[10px] sm:text-[10px] md:text-xs text-gray-900 text-center leading-tight px-0.5">
                                    Invoice
                                </h3>
                            </div>
                        </Link>

                        {/* Pendirian Badan Usaha */}
                        <Link href="/dashboard/mitra" className="block col-start-2 sm:col-start-2 md:col-start-2 lg:col-start-2">
                            <div className="bg-white rounded-lg p-1.5 sm:p-1.5 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group md:aspect-square aspect-square flex flex-col items-center justify-center hover:scale-105 md:w-full md:h-full">
                                <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-8 md:h-8 bg-indigo-100 rounded-lg flex items-center justify-center mb-1 sm:mb-1 md:mb-2 group-hover:bg-indigo-200 transition-colors">
                                    <svg className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 md:w-4 md:h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-[10px] sm:text-[10px] md:text-xs text-gray-900 text-center leading-tight px-0.5">
                                    Pendirian Badan Usaha
                                </h3>
                            </div>
                        </Link>

                        {/* Reward */}
                        <Link href="/dashboard/reward" className="block col-start-3 sm:col-start-4 md:col-start-3 lg:col-start-3">
                            <div className="bg-white rounded-lg p-1.5 sm:p-1.5 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group md:aspect-square aspect-square flex flex-col items-center justify-center hover:scale-105 md:w-full md:h-full">
                                <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-8 md:h-8 bg-yellow-100 rounded-lg flex items-center justify-center mb-1 sm:mb-1 md:mb-2 group-hover:bg-yellow-200 transition-colors">
                                    <svg className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 md:w-4 md:h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-[10px] sm:text-[10px] md:text-xs text-gray-900 text-center leading-tight px-0.5">
                                    Reward
                                </h3>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Why Choose Urban Office Section */}
                <div className={`px-4 md:px-8 py-8 transition-all duration-800 ease-out ${whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                        Kenapa Pilih Urban Office?
                    </h2>

                    <div className="relative mb-6 md:mb-8">
    {/* Cards Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        {(() => {
            const roomData = [
                {
                    src: "/assets/SEO-URBAN-21-2.jpg",
                    title: "Executive Boardroom",
                    description: "Ruang rapat eksklusif untuk keputusan strategis",
                    roomType: "Meeting Room"
                },
                {
                    src: "/assets/SEO-URBAN-21-2.jpg",
                    title: "Grand Event Hall",
                    description: "Kapasitas besar untuk acara dan seminar",
                    roomType: "Event Space"
                },
                {
                    src: "/assets/SEO-URBAN-21-2.jpg",
                    title: "Premium Private Office",
                    description: "Ruang kerja eksklusif dengan privasi maksimal",
                    roomType: "Private Office"
                },
                {
                    src: "/assets/SEO-URBAN-21-2.jpg",
                    title: "Open Collaborative Space",
                    description: "Lingkungan kerja dinamis dan kolaboratif",
                    roomType: "Coworking Space"
                }
            ];

            return roomData.map((image, index) => (
                <div
                    key={`room-${index}`}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md group hover:scale-[1.02] transition-all duration-300 ease-out"
                    style={{
                        animationDelay: `${index * 50}ms`,
                        opacity: whyChooseVisible ? 1 : 0,
                        transform: whyChooseVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                >
                    {/* Image Section */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                            src={image.src}
                            alt={image.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-2 md:p-3 space-y-1.5">
                        {/* Room Type Badge */}
                        <div className="inline-block bg-orange-500 text-white px-1.5 py-0.5 rounded text-xs font-medium shadow-sm">
                            {image.roomType}
                        </div>

                        <h3 className="font-semibold text-xs md:text-sm text-gray-900 leading-tight line-clamp-2">
                            {image.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                            {image.description}
                        </p>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border border-orange-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>
            ));
        })()}
    </div>
</div>

                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                        Pilih Ruang Kerja Anda
                    </h2>

                    {/* Room Type Buttons */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                        {["Meeting Room", "Event Space", "Private Office", "Coworking Space"].map((roomType, index) => (
                            <button
                                key={roomType}
                                onClick={() => {
                                    if (selectedRoomType === roomType) {
                                        setSelectedRoomType(null); // Show all if same button clicked
                                    } else {
                                        setSelectedRoomType(roomType); // Filter by selected room type
                                    }
                                }}
                                className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 transform ${selectedRoomType === roomType
                                    ? 'bg-orange-600 text-white shadow-lg scale-105'
                                    : 'bg-orange-500 text-white hover:bg-orange-600'
                                    }`}
                                style={{
                                    animationDelay: `${(8 + index) * 100}ms`, // 8 images + button index
                                    opacity: whyChooseVisible ? 1 : 0,
                                    transform: whyChooseVisible ? 'translateY(0)' : 'translateY(20px)'
                                }}
                            >
                                {roomType}
                                {selectedRoomType === roomType && (
                                    <span className="ml-2 inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* See All Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-1 px-2 py-1 sm:gap-2 sm:px-4 sm:py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium text-xs sm:text-sm transition-colors duration-200"
                        >
                            {showAll ? 'Show Less' : 'See All'}
                            <svg
                                className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
                        {(() => {
                            const roomData = [
                                {
                                    type: "Meeting Room",
                                    images: [
                                        {
                                            src: "/assets/SEO-URBAN-21-2.jpg",
                                            title: "Executive Boardroom",
                                            description: "Ruang rapat eksklusif untuk keputusan strategis"
                                        },
                                        {
                                            src: "/assets/SEO-URBAN-21-2.jpg",
                                            title: "Modern Conference Room",
                                            description: "Teknologi terdepan untuk presentasi profesional"
                                        }
                                    ]
                                },
                                {
                                    type: "Event Space",
                                    images: [
                                        {
                                            src: "/assets/SEO-URBAN-21-2.jpg",
                                            title: "Grand Event Hall",
                                            description: "Kapasitas besar untuk acara dan seminar"
                                        },
                                        {
                                            src: "/assets/SEO-URBAN-21-2.jpg",
                                            title: "Flexible Event Area",
                                            description: "Ruang serbaguna dengan setup fleksibel"
                                        }
                                    ]
                                },
                                {
                                    type: "Private Office",
                                    images: [
                                        {
                                            src: "/assets/SEO-URBAN-21-2.jpg",
                                            title: "Premium Private Office",
                                            description: "Ruang kerja eksklusif dengan privasi maksimal"
                                        },
                                        {
                                            src: "/assets/SEO-URBAN-21-2.jpg",
                                            title: "Executive Suite",
                                            description: "Kantor bergengsi untuk kebutusan bisnis premium"
                                        }
                                    ]
                                },
                                {
                                    type: "Coworking Space",
                                    images: [
                                        {
                                            src: "/assets/SEO-URBAN-21-2.jpg",
                                            title: "Open Collaborative Space",
                                            description: "Lingkungan kerja dinamis dan kolaboratif"
                                        },
                                        {
                                            src: "/assets/SEO-URBAN-21-2.jpg",
                                            title: "Creative Work Hub",
                                            description: "Inspirasi dan networking dalam satu tempat"
                                        }
                                    ]
                                }
                            ];

                            const getFilteredImages = () => {
                                if (selectedRoomType) {
                                    const selectedRoom = roomData.find(room => room.type === selectedRoomType);
                                    return selectedRoom ? selectedRoom.images.map(img => ({ ...img, roomType: selectedRoom.type })) : [];
                                }
                                return roomData.flatMap(room =>
                                    room.images.map(img => ({ ...img, roomType: room.type }))
                                );
                            };

                            const filteredImages = getFilteredImages();

                            // Determine how many cards to show based on screen size and showAll state
                            const getDisplayLimit = () => {
                                if (showAll) return filteredImages.length;
                                // Default limits: 2 for mobile, 3 for tablet, 4 for desktop
                                // Since we can't detect screen size in JSX, we'll show limited items and use CSS to hide them appropriately
                                return filteredImages.length;
                            };

                            const displayedImages = filteredImages.slice(0, getDisplayLimit());

                            return displayedImages.map((image, index) => {
                                // Logic untuk menentukan visibility berdasarkan breakpoint dan showAll state
                                let visibilityClasses = '';

                                if (!showAll) {
                                    // Mobile: hide after index 1 (show only 2 cards: index 0, 1)
                                    if (index >= 2) {
                                        visibilityClasses += 'hidden ';
                                    }
                                    // Tablet: show up to index 2 (show 3 cards: index 0, 1, 2)
                                    if (index < 3) {
                                        visibilityClasses += 'md:block ';
                                    }
                                    // Desktop: show up to index 3 (show 4 cards: index 0, 1, 2, 3)
                                    if (index < 4) {
                                        visibilityClasses += 'xl:block ';
                                    }
                                    // Hide cards beyond desktop limit
                                    if (index >= 4) {
                                        visibilityClasses = 'hidden ';
                                    }
                                }

                                return (
                                    <div
                                        key={`${image.roomType}-${index}`}
                                        className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md group hover:scale-[1.02] transition-all duration-300 ease-out ${visibilityClasses}`}
                                        style={{
                                            animationDelay: `${index * 50}ms`,
                                            opacity: whyChooseVisible ? 1 : 0,
                                            transform: whyChooseVisible ? 'translateY(0)' : 'translateY(20px)'
                                        }}
                                    >
                                        {/* Image Section - Reduced aspect ratio */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={image.src}
                                                alt={image.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                        </div>

                                        {/* Content Section - Reduced padding and font sizes */}
                                        <div className="p-2 md:p-3 space-y-1.5">
                                            {/* Room Type Badge - Smaller */}
                                            <div className="inline-block bg-orange-500 text-white px-1.5 py-0.5 rounded text-xs font-medium shadow-sm">
                                                {image.roomType}
                                            </div>

                                            <h3 className="font-semibold text-xs md:text-sm text-gray-900 leading-tight line-clamp-2">
                                                {image.title}
                                            </h3>
                                            <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                                                {image.description}
                                            </p>
                                        </div>

                                        {/* Hover Border Effect */}
                                        <div className="absolute inset-0 border border-orange-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                    </div>
                                )
                            });
                        })()}
                    </div>
                </div>


                {/* Latest Information */}
                <div className={`px-4 md:px-8 py-8 transition-all duration-800 ease-out ${infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                        Informasi Terkait
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                        {/* Executive Meeting Room */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => window.open('https://urbanoffice.co.id/tren-investasi-2025-apa-yang-harus-diperhatikan-pebisnis/', '_blank')}>
                            <div className="aspect-video relative">
                                <Image
                                    src="/assets/SEO-URBAN-21-2.jpg"
                                    alt="Executive Meeting Room"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                            <div className="p-2 md:p-4 lg:p-6">
                                <h3 className="font-semibold text-xs md:text-base lg:text-lg text-gray-900 mb-1 md:mb-2 leading-tight">
                                    Tren Investasi 2025
                                </h3>
                                <p className="text-gray-600 text-xs md:text-sm leading-relaxed hidden md:block">
                                    Investor global semakin memprioritaskan perusahaan yang berkomitmen pada praktik bisnis berkelanjutan.
                                </p>
                                <p className="text-gray-600 text-xs leading-tight md:hidden">
                                    Pasca-pandemi, sektor kesehatan dan bioteknologi menjadi fokus utama.
                                </p>
                            </div>
                        </div>

                        {/* Small Meeting Room */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => window.open('https://urbanoffice.co.id/cash-flow-sehat-kunci-utama-manajemen-keuangan/', '_blank')}>
                            <div className="aspect-video relative">
                                <Image
                                    src="/assets/SEO-URBAN-20.jpg"
                                    alt="Small Meeting Room"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                            <div className="p-2 md:p-4 lg:p-6">
                                <h3 className="font-semibold text-xs md:text-base lg:text-lg text-gray-900 mb-1 md:mb-2 leading-tight">
                                    Cash Flow Sehat Kunci Utama Manajemen Keuangan
                                </h3>
                                <p className="text-gray-600 text-xs md:text-sm leading-relaxed hidden md:block">
                                    Untuk menjaga cash flow sehat, Anda harus selalu memantau angka ini secara rutin,
                                </p>
                                <p className="text-gray-600 text-xs leading-tight md:hidden">
                                    Buat anggaran yang terperinci untuk semua pengeluaran. Kelompokkan biaya berdasarkan prioritas...
                                </p>
                            </div>
                        </div>

                        {/* Boardroom */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => window.open('https://urbanoffice.co.id/tren-bisnis-2025-strategi-bertahan-perubahan-ekonomi-global/', '_blank')}>
                            <div className="aspect-video relative">
                                <Image
                                    src="/assets/SEO-URBAN-19.jpg"
                                    alt="Boardroom"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                            <div className="p-2 md:p-4 lg:p-6">
                                <h3 className="font-semibold text-xs md:text-base lg:text-lg text-gray-900 mb-1 md:mb-2 leading-tight">
                                    Tren Bisnis 2025
                                </h3>
                                <p className="text-gray-600 text-xs md:text-sm leading-relaxed hidden md:block">
                                    Mengikuti tren bisnis 2025 bukan lagi pilihan, melainkan keharusan
                                </p>
                                <p className="text-gray-600 text-xs leading-tight md:hidden">
                                    Ekonomi kreator akan terus berkembang pesat, mengubah cara merek berinteraksi dengan audiens.
                                </p>
                            </div>
                        </div>

                        {/* Casual Meeting Space */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => window.open('https://urbanoffice.co.id/perbandingan-sistem-kerja-remote-vs-hybrid-vs-kantor/', '_blank')}>
                            <div className="aspect-video relative">
                                <Image
                                    src="/assets/SEO-URBAN-18.jpg"
                                    alt="Casual Meeting Space"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                            <div className="p-2 md:p-4 lg:p-6">
                                <h3 className="font-semibold text-xs md:text-base lg:text-lg text-gray-900 mb-1 md:mb-2 leading-tight">
                                    Perbandingan Sistem Kerja Remote vs Hybrid vs Kantor
                                </h3>
                                <p className="text-gray-600 text-xs md:text-sm leading-relaxed hidden md:block">
                                    Kerja Konvensional cocok untuk pekerjaan yang butuh banyak interaksi fisik, seperti manufaktur atau industri ritel.
                                </p>
                                <p className="text-gray-600 text-xs leading-tight md:hidden">
                                    Hemat Waktu dan Biaya: Tidak ada lagi waktu dan biaya untuk komuting. Karyawan bisa menghemat uang dan energi.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => window.open('https://urbanoffice.co.id/sri-mulyani-mundur-dan-ihsg-anjlok-apa-dampaknya/', '_blank')}>
                            <div className="aspect-video relative">
                                <Image
                                    src="/assets/SEO-URBAN-16.jpg"
                                    alt="Casual Meeting Space"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                            <div className="p-2 md:p-4 lg:p-6">
                                <h3 className="font-semibold text-xs md:text-base lg:text-lg text-gray-900 mb-1 md:mb-2 leading-tight">
                                    Sri Mulyani Mundur dan IHSG Anjlok, Apa Dampaknya?
                                </h3>
                                <p className="text-gray-600 text-xs md:text-sm leading-relaxed hidden md:block">
                                    njloknya IHSG setelah pengumuman mundur Sri Mulyani menunjukkan seberapa besar kepercayaan pasar terhadapnya
                                </p>
                                <p className="text-gray-600 text-xs leading-tight md:hidden">
                                    Ketergantungan pada Figur: Ekonomi Indonesia masih memiliki ketergantungan yang kuat pada figur kunci,
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}