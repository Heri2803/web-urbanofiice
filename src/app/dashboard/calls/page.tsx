"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import CallsBar from "../../components/calls/calls";
import Link from "next/link";

const CallsPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const callHistory = [
        {
            id: 1,
            date: "01/02/2026",
            title: "Telephone Masuk",
            code: "549/VO/VII/25",
            status: "Terjawab",
            customer: "Dari Customer - Angga",
            phone: "No Telp. 081243599921",
            location: "Amaris Hotel Surabaya"
        },
        {
            id: 2,
            date: "01/02/2026",
            title: "Telephone Masuk",
            code: "549/VO/VII/25",
            status: "Terjawab",
            customer: "Dari Customer - Kevin",
            phone: "No Telp. 082190742678",
            location: "Amaris Hotel Surabaya"
        }
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 ml-0 md:ml-64 lg:ml-64 xl:ml-64 flex flex-col mb-14">
                {/* Calls Header Bar */}
                <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}>
                    <CallsBar />
                </div>

                {/* Calls Content */}
                <div className="flex-1 p-4 md:p-6">
                    {/* Page Header with Back Button */}
                    <div className={`mb-6 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`} style={{ transitionDelay: '200ms' }}>
                        <Link href="/dashboard/home" className="block">
                        <div className="flex items-center space-x-3 mb-4">
                            <button className="flex items-center text-gray-700 hover:text-orange-500 transition-colors duration-200 group">
                                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                                <span className="font-medium text-sm md:text-base">CALLS</span>
                            </button>
                        </div>
                        </Link>
                    </div>

                    {/* Call History */}
                    <div className="space-y-4">
                        {callHistory.map((call, index) => (
                            <div key={call.id} className="space-y-4">
                                {/* Date Header */}
                                <div className={`bg-orange-500 text-white px-4 py-2 rounded-t-lg transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                    }`} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                                    <span className="font-medium text-sm md:text-base">{call.date}</span>
                                </div>

                                {/* Call Card */}
                                <div className={`bg-white rounded-b-lg shadow-sm border border-gray-200 transition-all duration-500 ease-out hover:shadow-md ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`} style={{ transitionDelay: `${400 + index * 100}ms` }}>

                                    {/* Call Header */}
                                    <div className="p-4 md:p-6 border-b border-gray-200">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                            <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-2 sm:mb-0">
                                                {call.title}
                                            </h3>
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 w-fit">
                                                {call.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600">{call.code}</p>
                                    </div>

                                    {/* Customer Info */}
                                    <div className="p-4 md:p-6">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                                                    {call.customer}
                                                </h4>
                                                <p className="text-xs md:text-sm text-gray-600 mb-1">
                                                    {call.phone}
                                                </p>
                                                <p className="text-xs md:text-sm text-gray-600">
                                                    {call.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Quick Actions - Mobile Style */}
                    <div className={`mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`} style={{ transitionDelay: '700ms' }}>
                        <button className="flex items-center justify-center space-x-3 p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="font-medium">Panggil Sekarang</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallsPage;