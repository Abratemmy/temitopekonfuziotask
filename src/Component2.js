import React, { useState } from 'react'
import redacted from './files/RedactedPdf.pdf'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function Component2() {
    // const [pdfFile, setPdfFile] = useState(null)
    // const [viewPdf, setViewPdf] = useState(null)

    const newplugin = defaultLayoutPlugin()
    return (
        <div className='container'>
            <div className='pdf-container'>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                    <Viewer fileUrl='./files/RedactedPdf.pdf' plugins={[newplugin]} />;
                </Worker>
            </div>
        </div>

    )
}

export default Component2