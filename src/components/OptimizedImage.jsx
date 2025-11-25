import { memo, useRef, useState, useEffect } from 'react'

// Optimized image component with lazy loading and WebP support
export const OptimizedImage = memo(({ 
    src, 
    alt, 
    className = '', 
    width, 
    height,
    priority = false,
    ...props 
}) => {
    const imgRef = useRef()
    const [loaded, setLoaded] = useState(false)
    const [inView, setInView] = useState(priority)

    useEffect(() => {
        if (priority) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { rootMargin: '100px' }
        )

        if (imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => observer.disconnect()
    }, [priority])

    // Generate WebP fallback
    const webpSrc = src?.replace(/\.(jpg|jpeg|png)$/i, '.webp')
    
    return (
        <div 
            ref={imgRef}
            className={`relative ${className}`}
            style={{ width, height }}
            {...props}
        >
            {inView && (
                <picture>
                    {/* WebP version for modern browsers */}
                    {webpSrc && webpSrc !== src && (
                        <source srcSet={webpSrc} type="image/webp" />
                    )}
                    <img
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        loading={priority ? "eager" : "lazy"}
                        decoding="async"
                        className={`transition-opacity duration-300 ${
                            loaded ? 'opacity-100' : 'opacity-0'
                        } ${className}`}
                        onLoad={() => setLoaded(true)}
                        onError={() => setLoaded(true)}
                    />
                </picture>
            )}
            
            {/* Loading placeholder */}
            {!loaded && inView && (
                <div 
                    className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
                    style={{ width, height }}
                >
                    <div className="text-gray-400 text-sm">Loading...</div>
                </div>
            )}
        </div>
    )
})

OptimizedImage.displayName = 'OptimizedImage'