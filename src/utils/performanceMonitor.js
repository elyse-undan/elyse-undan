// Performance monitoring utility for tracking optimization improvements
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            loadTime: 0,
            renderTime: 0,
            memoryUsage: 0,
            componentMounts: 0,
            rerenders: 0
        }
        this.startTime = performance.now()
        this.observers = []
        
        this.init()
    }

    init() {
        // Track page load performance
        if (typeof window !== 'undefined') {
            window.addEventListener('load', () => {
                this.trackLoadTime()
                this.trackMemoryUsage()
            })

            // Track Core Web Vitals
            this.trackCoreWebVitals()
            
            // Setup Intersection Observer for lazy loading monitoring
            this.setupLazyLoadingMonitor()
        }
    }

    trackLoadTime() {
        this.metrics.loadTime = performance.now() - this.startTime
        console.log(`🚀 Page loaded in: ${this.metrics.loadTime.toFixed(2)}ms`)
    }

    trackMemoryUsage() {
        if (performance.memory) {
            this.metrics.memoryUsage = performance.memory.usedJSHeapSize / 1024 / 1024
            console.log(`💾 Memory usage: ${this.metrics.memoryUsage.toFixed(2)}MB`)
        }
    }

    trackCoreWebVitals() {
        // First Contentful Paint (FCP)
        new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.name === 'first-contentful-paint') {
                    console.log(`🎨 First Contentful Paint: ${entry.startTime.toFixed(2)}ms`)
                }
            }
        }).observe({ entryTypes: ['paint'] })

        // Largest Contentful Paint (LCP)
        new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lastEntry = entries[entries.length - 1]
            console.log(`📏 Largest Contentful Paint: ${lastEntry.startTime.toFixed(2)}ms`)
        }).observe({ entryTypes: ['largest-contentful-paint'] })

        // Cumulative Layout Shift (CLS)
        new PerformanceObserver((list) => {
            let clsValue = 0
            for (const entry of list.getEntries()) {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value
                }
            }
            if (clsValue > 0) {
                console.log(`📐 Cumulative Layout Shift: ${clsValue.toFixed(4)}`)
            }
        }).observe({ entryTypes: ['layout-shift'] })
    }

    setupLazyLoadingMonitor() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]')
        
        if (lazyImages.length > 0) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        console.log(`🖼️ Lazy image loaded: ${entry.target.src || entry.target.alt}`)
                    }
                })
            })

            lazyImages.forEach(img => imageObserver.observe(img))
            this.observers.push(imageObserver)
        }
    }

    trackComponentMount(componentName) {
        this.metrics.componentMounts++
        console.log(`🔧 Component mounted: ${componentName} (Total: ${this.metrics.componentMounts})`)
    }

    trackRerender(componentName, reason = 'unknown') {
        this.metrics.rerenders++
        console.log(`🔄 Component re-rendered: ${componentName}, Reason: ${reason} (Total: ${this.metrics.rerenders})`)
    }

    trackUserInteraction(action, element) {
        const timestamp = performance.now()
        console.log(`👆 User interaction: ${action} on ${element} at ${timestamp.toFixed(2)}ms`)
    }

    getMetrics() {
        return {
            ...this.metrics,
            currentMemory: performance.memory ? (performance.memory.usedJSHeapSize / 1024 / 1024).toFixed(2) + 'MB' : 'N/A',
            uptime: (performance.now() - this.startTime).toFixed(2) + 'ms'
        }
    }

    logPerformanceReport() {
        const metrics = this.getMetrics()
        console.group('📊 Performance Report')
        console.table(metrics)
        console.groupEnd()
        
        return metrics
    }

    cleanup() {
        this.observers.forEach(observer => observer.disconnect())
        this.observers = []
    }
}

// Create global instance
const performanceMonitor = new PerformanceMonitor()

// React Hook for component performance tracking
export const usePerformanceMonitor = (componentName) => {
    const [renderCount, setRenderCount] = React.useState(0)
    
    React.useEffect(() => {
        performanceMonitor.trackComponentMount(componentName)
        
        return () => {
            console.log(`🗑️ Component unmounted: ${componentName}`)
        }
    }, [componentName])
    
    React.useEffect(() => {
        if (renderCount > 0) {
            performanceMonitor.trackRerender(componentName, `render #${renderCount}`)
        }
        setRenderCount(prev => prev + 1)
    })
    
    return {
        trackInteraction: (action, element) => 
            performanceMonitor.trackUserInteraction(action, element),
        getMetrics: () => performanceMonitor.getMetrics(),
        logReport: () => performanceMonitor.logPerformanceReport()
    }
}

// HOC for automatic performance tracking
export const withPerformanceTracking = (WrappedComponent, componentName) => {
    return React.memo((props) => {
        usePerformanceMonitor(componentName || WrappedComponent.name)
        return React.createElement(WrappedComponent, props)
    })
}

// Bundle size analyzer
export const analyzeBundleSize = () => {
    if (typeof window !== 'undefined') {
        const scripts = Array.from(document.querySelectorAll('script[src]'))
        const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
        
        console.group('📦 Bundle Analysis')
        console.log('📄 Scripts:', scripts.map(s => s.src))
        console.log('🎨 Stylesheets:', styles.map(s => s.href))
        console.log('📊 Total scripts:', scripts.length)
        console.log('📊 Total stylesheets:', styles.length)
        console.groupEnd()
    }
}

export default performanceMonitor