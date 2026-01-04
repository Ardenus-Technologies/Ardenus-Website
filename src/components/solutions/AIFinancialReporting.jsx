'use client'

import React, { useState, useEffect } from 'react';
import { CheckCircle, Table } from 'lucide-react';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692249ddf6f07690db746311/a887c1cae_BF_LogoWhiteCirclesOfficialTrans.png";

export default function AIFinancialReporting() {
  const [currentDocument, setCurrentDocument] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [allScanned, setAllScanned] = useState(false);
  const [spreadsheetGenerated, setSpreadsheetGenerated] = useState(false);

  const documents = [
    { 
      id: 1, 
      type: 'Invoice',
      content: (
        <div className="space-y-3">
          <div className="text-center border-b border-gray-300 pb-3">
            <div className="text-lg font-bold text-gray-900">INVOICE</div>
            <div className="text-sm text-gray-600">#INV-2024-1234</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">From:</span>
              <span className="font-semibold text-gray-900">Acme Corporation</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Date:</span>
              <span className="text-gray-900">October 15, 2024</span>
            </div>
          </div>
          <div className="border-t border-b border-gray-300 py-2 my-2">
            <div className="text-xs font-semibold text-gray-700 mb-2">Items:</div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-700">Consulting Services</span>
                <span className="text-gray-900">$2,000.00</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-700">Project Management</span>
                <span className="text-gray-900">$450.00</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-base font-bold">
            <span className="text-gray-900">Total:</span>
            <span className="text-green-600">$2,450.00</span>
          </div>
        </div>
      )
    },
    { 
      id: 2, 
      type: 'Receipt',
      content: (
        <div className="space-y-3">
          <div className="text-center border-b border-gray-300 pb-3">
            <div className="text-lg font-bold text-gray-900">RECEIPT</div>
            <div className="text-xs text-gray-600">Office Supplies Co.</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Date:</span>
              <span className="text-gray-900">October 18, 2024</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Transaction:</span>
              <span className="text-gray-900">#458392</span>
            </div>
          </div>
          <div className="border-t border-b border-gray-300 py-2 my-2">
            <div className="text-xs font-semibold text-gray-700 mb-2">Purchases:</div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-700">Printer Paper (5 Reams)</span>
                <span className="text-gray-900">$89.99</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-700">Desk Organizers (3)</span>
                <span className="text-gray-900">$45.00</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-700">Sticky Notes Set</span>
                <span className="text-gray-900">$22.00</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-base font-bold">
            <span className="text-gray-900">Total:</span>
            <span className="text-red-600">$156.99</span>
          </div>
        </div>
      )
    },
    { 
      id: 3, 
      type: 'Bank Statement',
      content: (
        <div className="space-y-3">
          <div className="text-center border-b border-gray-300 pb-3">
            <div className="text-lg font-bold text-gray-900">BANK STATEMENT</div>
            <div className="text-xs text-gray-600">First National Bank</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Account:</span>
              <span className="text-gray-900">****8392</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Period:</span>
              <span className="text-gray-900">October 2024</span>
            </div>
          </div>
          <div className="border-t border-b border-gray-300 py-2 my-2">
            <div className="text-xs font-semibold text-gray-700 mb-2">Transactions:</div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-700">10/05 - Wire Transfer In</span>
                <span className="text-green-700">+$5,000.00</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-700">10/12 - Check Deposit</span>
                <span className="text-green-700">+$2,450.00</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-700">10/22 - ACH Transfer In</span>
                <span className="text-green-700">+$784.50</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-base font-bold">
            <span className="text-gray-900">Balance:</span>
            <span className="text-green-600">$8,234.50</span>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const sequence = async () => {
      setCurrentDocument(null);
      setIsScanning(false);
      setAllScanned(false);
      setSpreadsheetGenerated(false);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      for (let i = 0; i < documents.length; i++) {
        setCurrentDocument(documents[i]);
        await new Promise(resolve => setTimeout(resolve, 600));
        
        setIsScanning(true);
        await new Promise(resolve => setTimeout(resolve, 1800));
        
        setIsScanning(false);
        await new Promise(resolve => setTimeout(resolve, 400));
        
        setCurrentDocument(null);
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      
      setAllScanned(true);
      await new Promise(resolve => setTimeout(resolve, 600));
      
      setSpreadsheetGenerated(true);
      await new Promise(resolve => setTimeout(resolve, 4000));
    };

    sequence();
    const interval = setInterval(sequence, 16000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        
        .animate-scan {
          animation: scan 1.8s ease-in-out;
        }
      `}</style>
      
      <div className="relative flex items-center justify-center scale-[0.38] lg:scale-[0.48]" style={{ transformOrigin: 'center center' }}>
        <div className="relative w-[600px] h-[600px] flex items-center justify-center">
          
          {/* Top Center - AI Processor */}
          <div className="absolute" style={{ top: '70px', left: '50%', transform: 'translateX(-50%)', zIndex: 30 }}>
            <div className={`relative transition-all duration-700 ${isScanning ? 'scale-110' : 'scale-100'}`}>
              <div className="w-28 h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-xl flex items-center justify-center relative">
                <img 
                  src={LOGO_URL}
                  alt="AI"
                  className={`w-16 h-16 object-contain ${isScanning ? 'animate-spin' : ''}`}
                />
                
                {isScanning && (
                  <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-pulse"></div>
                )}
              </div>
              
              {isScanning && (
                <>
                  <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-ping"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </>
              )}
              
              {allScanned && !isScanning && (
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          </div>

          {/* Blue line from AI to document */}
          {isScanning && currentDocument && (
            <div 
              className="absolute bg-blue-400" 
              style={{ 
                top: '190px', 
                left: '50%', 
                transform: 'translateX(-50%)',
                width: '3px', 
                height: '35px',
                zIndex: 5
              }}
            ></div>
          )}

          {/* Middle Center - Document Display Area */}
          <div 
            className="absolute transition-all duration-500" 
            style={{ 
              top: '225px',
              left: '50%',
              transform: currentDocument 
                ? 'translateX(-50%) scale(1)' 
                : 'translateX(-50%) scale(0.95)',
              opacity: currentDocument ? 1 : 0,
              zIndex: 20
            }}
          >
            {currentDocument && (
              <div 
                className={`bg-white rounded-xl shadow-xl p-6 w-96 border-2 transition-all duration-500 relative overflow-hidden ${
                  isScanning ? 'border-blue-400 shadow-blue-200' : 'border-gray-200'
                }`}
              >
                <div className="absolute top-2 right-2 bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-600 z-20">
                  {currentDocument.type}
                </div>
                
                {isScanning && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-scan z-10"></div>
                    <div className="absolute top-2 left-2 flex items-center gap-1 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium z-20">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                      Scanning...
                    </div>
                  </>
                )}
                
                <div className="relative z-0">
                  {currentDocument.content}
                </div>
              </div>
            )}
          </div>

          {/* Green line from document area to spreadsheet */}
          {spreadsheetGenerated && !currentDocument && (
            <div 
              className="absolute bg-green-500" 
              style={{ 
                top: '190px', 
                left: '50%', 
                transform: 'translateX(-50%)',
                width: '3px', 
                height: '35px',
                zIndex: 5
              }}
            ></div>
          )}

          {/* Bottom Section - Generated Spreadsheet */}
          <div 
            className="absolute transition-all duration-700"
            style={{
              top: '225px',
              left: '50%',
              transform: spreadsheetGenerated 
                ? 'translateX(-50%) translateY(0)' 
                : 'translateX(-50%) translateY(30px)',
              opacity: spreadsheetGenerated ? 1 : 0,
              zIndex: 20
            }}
          >
            <div className="bg-white rounded-xl shadow-xl border-2 border-green-400" style={{ width: '420px' }}>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2.5 rounded-t-xl flex items-center gap-2">
                <Table className="w-4 h-4" />
                <span className="font-semibold text-xs">Financial Summary - Oct 2024</span>
                <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded">Generated</span>
              </div>
              
              <div className="px-4 py-3">
                <div className="grid grid-cols-12 gap-1 mb-2 pb-2 border-b-2 border-gray-300">
                  <div className="col-span-2 text-xs font-bold text-gray-700">Date</div>
                  <div className="col-span-3 text-xs font-bold text-gray-700">Description</div>
                  <div className="col-span-2 text-xs font-bold text-gray-700">Type</div>
                  <div className="col-span-3 text-xs font-bold text-gray-700 text-right">Amount</div>
                  <div className="col-span-2 text-xs font-bold text-gray-700 text-right">Category</div>
                </div>
                
                <div className="space-y-1">
                  <div className="grid grid-cols-12 gap-1 py-1.5 bg-blue-50 rounded px-2">
                    <div className="col-span-2 text-xs text-gray-900">10/15</div>
                    <div className="col-span-3 text-xs text-gray-900 truncate">Acme Corp</div>
                    <div className="col-span-2 text-xs text-green-600 font-medium">Income</div>
                    <div className="col-span-3 text-xs text-gray-900 text-right font-semibold">$2,450</div>
                    <div className="col-span-2 text-xs text-gray-600 text-right truncate">Consulting</div>
                  </div>
                  
                  <div className="grid grid-cols-12 gap-1 py-1.5 bg-red-50 rounded px-2">
                    <div className="col-span-2 text-xs text-gray-900">10/18</div>
                    <div className="col-span-3 text-xs text-gray-900 truncate">Office Supp</div>
                    <div className="col-span-2 text-xs text-red-600 font-medium">Expense</div>
                    <div className="col-span-3 text-xs text-gray-900 text-right font-semibold">-$157</div>
                    <div className="col-span-2 text-xs text-gray-600 text-right truncate">Supplies</div>
                  </div>
                  
                  <div className="grid grid-cols-12 gap-1 py-1.5 bg-green-50 rounded px-2">
                    <div className="col-span-2 text-xs text-gray-900">10/05</div>
                    <div className="col-span-3 text-xs text-gray-900 truncate">Wire Trans</div>
                    <div className="col-span-2 text-xs text-green-600 font-medium">Income</div>
                    <div className="col-span-3 text-xs text-gray-900 text-right font-semibold">$5,000</div>
                    <div className="col-span-2 text-xs text-gray-600 text-right truncate">Deposits</div>
                  </div>
                  
                  <div className="grid grid-cols-12 gap-1 py-1.5 bg-green-50 rounded px-2">
                    <div className="col-span-2 text-xs text-gray-900">10/12</div>
                    <div className="col-span-3 text-xs text-gray-900 truncate">Check Dep</div>
                    <div className="col-span-2 text-xs text-green-600 font-medium">Income</div>
                    <div className="col-span-3 text-xs text-gray-900 text-right font-semibold">$2,450</div>
                    <div className="col-span-2 text-xs text-gray-600 text-right truncate">Deposits</div>
                  </div>
                  
                  <div className="grid grid-cols-12 gap-1 py-1.5 bg-green-50 rounded px-2">
                    <div className="col-span-2 text-xs text-gray-900">10/22</div>
                    <div className="col-span-3 text-xs text-gray-900 truncate">ACH Trans</div>
                    <div className="col-span-2 text-xs text-green-600 font-medium">Income</div>
                    <div className="col-span-3 text-xs text-gray-900 text-right font-semibold">$785</div>
                    <div className="col-span-2 text-xs text-gray-600 text-right truncate">Deposits</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-12 gap-1 mt-2.5 pt-2.5 border-t-2 border-gray-300">
                  <div className="col-span-7 text-sm font-bold text-gray-900">Net Total:</div>
                  <div className="col-span-3 text-sm font-bold text-green-600 text-right">$10,527.51</div>
                  <div className="col-span-2 text-xs text-gray-500 text-right">Oct '24</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}