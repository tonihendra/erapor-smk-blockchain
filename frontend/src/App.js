import React, { useState } from 'react';
import { ethers } from 'ethers';

function App() {
  const [nisn, setNisn] = useState('');
  const [status, setStatus] = useState('');

  async function hubungkanDompet() {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      alert("Dompet Terhubung!");
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>E-Rapor SMK Blockchain</h1>
      <button onClick={hubungkanDompet}>Hubungkan MetaMask</button>
      <br/><br/>
      <input placeholder="Masukkan NISN" onChange={(e) => setNisn(e.target.value)} />
      <button onClick={() => setStatus('Mencari di Blockchain...')}>Verifikasi Rapor</button>
      <p>Status: {status}</p>
    </div>
  );
}
export default App;