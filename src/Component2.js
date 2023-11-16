import React, { useRef, useEffect } from 'react'
import WebViewer from '@pdftron/webviewer';
import redacted from './files/RedactedPdf.pdf'

function Component2() {
    const viewerDiv = useRef();

    useEffect(() => {
        WebViewer({
            path: 'lib',
            initialDoc: redacted
            // licenseKey: 'demo:1700108189437:7cdaeb2003000000003a17f465409ed7f97196ebccc9ce201c6052c965'  // sign up to get a free trial key at https://dev.apryse.com
        }, viewerDiv.current).then(instance => {

        })
    }, [])
    return (
        <div className='webviewer' ref={viewerDiv} style={{ height: '100vh' }}></div>
    )
}

export default Component2