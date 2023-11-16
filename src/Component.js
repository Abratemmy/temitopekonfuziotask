import React, { useEffect, useRef, useState } from 'react';

function Component({ urlCarrier }) {
    const viewer = useRef(null);
    const [instance, setInstance] = useState(null);

    useEffect(() => {
        // if (instance) return;
        // console.log('Creating WebViewer instance with urlCarrier:', urlCarrier);
        import('@pdftron/webviewer')
            .then(({ default: WebViewer }) => {
                WebViewer(
                    {
                        path: 'lib',
                        initialDoc: urlCarrier,
                        licenseKey: "License key"
                    },
                    viewer.current
                )
                    .then((i) => {
                        console.log('webviewer instance created:', i);
                        setInstance(i);
                        const { docViewer, annotationManager, Annotations } = i
                        docViewer.addEventListener('documentLoaded', () => {
                            const rectangleAnnot = new Annotations.RectangleAnnotation({
                                PageNumber: 1,
                                // values are in page coordinates with (0, 0) in the top left
                                X: 0,
                                Y: 0,
                                Width: 600,
                                Height: 500,
                                Author: annotationManager.getCurrentUser()
                            });

                            annotationManager.addAnnotation(rectangleAnnot);
                            // need to draw the annotation otherwise it won't show up until the page is refreshed
                            annotationManager.redrawAnnotation(rectangleAnnot);

                        });
                    })
            })
    }, [urlCarrier])

    useEffect(() => {
        console.log('urlCarrier changed:', urlCarrier);
        if (instance) {
            console.log('Loading new document:', urlCarrier);
            instance.UI.loadDocument(urlCarrier);
        }
    }, [urlCarrier, instance]);


    return (
        <div className=''>
            <div className='webviewer' ref={viewer} style={{ height: '100vh' }}>
                <div style={{ height: '95vh', background: 'blue' }}>{urlCarrier}

                </div>

            </div>

        </div>
    )
}

export default Component