"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import InvoiceBar from "../../components/invoice/invoicebar";
import Link from "next/link";

const InvoicePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const invoiceDocuments = [
    {
      id: 1,
      title: "549. Invoice Virtual Office Merr - PT. LI...",
      size: "290 KB",
      type: "Microsoft Edge PDF Document",
      category: "invoice virtual office"
    },
    {
      id: 2,
      title: "549. Invoice Virtual Office Merr - PT. LI...",
      size: "290 KB",
      type: "Microsoft Edge PDF Document",
      category: "Surat Perjanjian Kontrak"
    }
  ];

  const handleOpen = (docId: number) => {
    console.log(`Opening document ${docId}`);
    // Handle open document logic here
  };

  const handleSaveAs = (docId: number) => {
    console.log(`Saving document ${docId}`);
    // Handle save as document logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64 lg:ml-64 xl:ml-64 flex flex-col">
        {/* Invoice Header Bar */}
        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
          <InvoiceBar />
        </div>

        {/* Invoice Content */}
        <div className="flex-1 p-4 md:p-6">
          {/* Page Header with Back Button */}
          <div className={`mb-6 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center space-x-3 mb-4">
              <Link href="/dashboard/home" className="block">
              <button className="flex items-center text-gray-700 hover:text-orange-500 transition-colors duration-200 group">
                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-medium text-sm md:text-base">INVOICE</span>
              </button>
              </Link>
            </div>
          </div>

          {/* Documents Section */}
          <div className="space-y-4">
            {invoiceDocuments.map((doc, index) => (
              <div key={doc.id}>
                {/* Category Header */}
                <div className={`mb-3 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                  <h3 className="text-sm md:text-base font-medium text-gray-700 mb-2">
                    {doc.category}
                  </h3>
                </div>

                {/* Document Card */}
                <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 transition-all duration-500 ease-out hover:shadow-md ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`} style={{ transitionDelay: `${400 + index * 100}ms` }}>

                  {/* Document Header */}
                  <div className="flex items-start space-x-3 mb-4">
                    {/* PDF Icon */}
                    <div className="w-10 h-10 bg-red-500 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">PDF</span>
                    </div>

                    {/* Document Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-800 text-sm md:text-base mb-1 truncate">
                        {doc.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500">
                        {doc.size}, {doc.type}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleOpen(doc.id)}
                      className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="text-sm md:text-base">Open</span>
                    </button>

                    <button
                      onClick={() => handleSaveAs(doc.id)}
                      className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm md:text-base">Save as...</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;