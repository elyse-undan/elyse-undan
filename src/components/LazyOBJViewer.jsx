import { useState, useRef, useEffect } from 'react'

export const LazyOBJViewer = ({ objUrl, ...props }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [shouldLoad, setShouldLoad] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Add a small delay before loading the 3D model
                    setTimeout(() => setShouldLoad(true), 300)
                    observer.disconnect()
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} style={{ width: '100%', height: '350px' }}>
            {shouldLoad ? (
                // Dynamically import the 3D viewer only when needed
                <LazyLoadedOBJViewer objUrl={objUrl} {...props} />
            ) : (
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            border: '3px solid #f3f3f3',
                            borderTop: '3px solid #3498db',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                            margin: '0 auto 8px'
                        }} />
                        <p style={{ color: '#666', fontSize: '12px', margin: 0 }}>
                            {isVisible ? 'Loading 3D Model...' : 'Scroll to load 3D model'}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

const LazyLoadedOBJViewer = ({ objUrl, ...props }) => {
    // Dynamically import the SimpleOBJViewer
    const [ViewerComponent, setViewerComponent] = useState(null)

    useEffect(() => {
        import('./SimpleOBJViewer').then(module => {
            setViewerComponent(() => module.SimpleOBJViewer)
        })
    }, [])

    if (!ViewerComponent) {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        border: '3px solid #f3f3f3',
                        borderTop: '3px solid #3498db',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                        margin: '0 auto 8px'
                    }} />
                    <p style={{ color: '#666', fontSize: '12px', margin: 0 }}>Loading viewer...</p>
                </div>
            </div>
        )
    }

    return <ViewerComponent objUrl={objUrl} {...props} />
}