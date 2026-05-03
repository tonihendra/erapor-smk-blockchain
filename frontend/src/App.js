import React, { useState } from 'react';

function App() {
  const [nisn, setNisn] = useState('');
  const [status, setStatus] = useState('Siap melakukan verifikasi');
  const [walletAddress, setWalletAddress] = useState('');

  // Fungsi untuk menghubungkan ke MetaMask
  async function hubungkanDompet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        setStatus("Dompet terhubung! Anda bisa melakukan verifikasi.");
      } catch (err) {
        setStatus("Gagal menghubungkan dompet.");
      }
    } else {
      alert("Silakan install MetaMask di browser Anda!");
    }
  }

  // Simulasi Verifikasi
  const handleVerifikasi = () => {
    if (!nisn) {
      setStatus("Silakan masukkan NISN terlebih dahulu!");
      return;
    }
    setStatus(`Mencari data hash di Blockchain untuk NISN: ${nisn}...`);
    
    setTimeout(() => {
      setStatus("Hasil: Rapor Ditemukan & Terverifikasi Asli ✅");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-indigo-900">
      {/* Container Utama (Card) */}
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-indigo-600 p-8 text-white text-center">
          {/* Logo dengan Ukuran yang Dipaksa (Anti-Raksasa) */}
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/20 rounded-2xl">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                style={{ width: '40px', height: '40px', display: 'block' }} // PAKSA UKURAN DI SINI
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04kM12 21.48l.342-1.369A11.958 11.958 0 0112 2.944a11.958 11.958 0 01-1.492 20.155l.342 1.369z" />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">E-Rapor SMK</h1>
          <p className="text-indigo-100 mt-1 text-[10px] uppercase tracking-[0.2em] font-semibold">Blockchain Security System</p>
        </div>

        {/* Content Section */}
        <div className="p-8">
          
          {/* Tombol Wallet */}
          {!walletAddress ? (
            <button 
              onClick={hubungkanDompet}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-md flex items-center justify-center"
            >
              Hubungkan MetaMask
            </button>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-6 flex items-center">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <div className="overflow-hidden">
                <p className="text-green-800 text-[10px] font-bold uppercase">Dompet Aktif</p>
                <p className="text-green-600 text-[9px] truncate font-mono">{walletAddress}</p>
              </div>
            </div>
          )}

          {/* Form Input */}
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-500 text-[10px] font-black uppercase tracking-widest mb-2 ml-1">Nomor Induk Siswa (NISN)</label>
              <input 
                type="text"
                placeholder="Masukkan 10 digit NISN"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:outline-none text-gray-800 text-sm transition duration-300"
                onChange={(e) => setNisn(e.target.value)}
              />
            </div>
            
            <button 
              onClick={handleVerifikasi}
              className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 px-4 rounded-xl transition duration-300 shadow-lg active:scale-95"
            >
              Verifikasi Keaslian Rapor
            </button>
          </div>

          {/* Status System */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Log Sistem</span>
            </div>
            <div className={`p-3 rounded-lg text-[12px] font-medium ${status.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-indigo-50 text-indigo-600'}`}>
              {status}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center">
          <p className="text-gray-400 text-[9px] uppercase tracking-widest font-bold">
            Powered by Polygon Blockchain
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;