import React, { useRef, useEffect } from 'react';
import './App.css';
import redacted from './files/RedactedPdf.pdf'
import Component from './Component';

const App = () => {
  const reader = <iframe src={redacted} width='100%' height='100%' />
  const viewer = useRef(null);
  const downloadPDF = () => {
    console.log("downloaded PDF")
  }


  return (
    <div className="App">
      <a
        href={redacted}
        download="Redacted-PDF-document"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className='downloadBtn' onClick={downloadPDF}>Download PDF</button>
      </a>

      <div className=""><Component urlCarrier={reader} /></div>

    </div>
  );
};

export default App;