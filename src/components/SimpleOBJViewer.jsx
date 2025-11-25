import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

// Lazy load the OBJ loader only when needed
const loadOBJLoader = () => {
    return import('three/examples/jsm/loaders/OBJLoader').then(module => module.OBJLoader)
}

export const SimpleOBJViewer = ({ 
    objUrl, 
    width = "100%", 
    height = "350px",
    autoRotate = true,
    backgroundColor = "#f0f0f0"
}) => {
    const mountRef = useRef(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const sceneRef = useRef(null)
    const rendererRef = useRef(null)
    const animationRef = useRef(null)

    useEffect(() => {
        if (!mountRef.current) return

        // Scene setup
        const scene = new THREE.Scene()
        sceneRef.current = scene

        // Camera setup - super close view
        const camera = new THREE.PerspectiveCamera(
            75,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.01,
            1000
        )
        camera.position.set(0.8, 0.3, 0.8) // Super close to the horse
        camera.lookAt(0, 0, 0)

        // Renderer setup - performance optimized
        const renderer = new THREE.WebGLRenderer({ 
            antialias: false, // Disable antialiasing for better performance
            alpha: true,
            powerPreference: "high-performance"
        })
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
        renderer.setClearColor(0xffffff, 1) // Pure white background
        renderer.shadowMap.enabled = false // Disable shadows for performance
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Limit pixel ratio for performance
        rendererRef.current = renderer

        mountRef.current.appendChild(renderer.domElement)

        // Lighting - optimized for performance
        const ambientLight = new THREE.AmbientLight(0x404040, 0.8) // Increased ambient to reduce need for other lights
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6) // Reduced intensity
        directionalLight.position.set(5, 5, 5)
        // Disabled shadows for performance
        scene.add(directionalLight)

        // Load OBJ model with lazy loading
        loadOBJLoader().then(OBJLoader => {
            const loader = new OBJLoader()
            
            loader.load(
                objUrl,
                (object) => {
                    // Success callback
                    setLoading(false)
                    setError(false)

                    // Create a simple material with performance optimizations
                    const material = new THREE.MeshLambertMaterial({ 
                        color: 0x8B4513, // Brown color for horse
                        side: THREE.DoubleSide
                    })

                    // Apply material to all meshes in the object
                    object.traverse((child) => {
                        if (child.isMesh) {
                            child.material = material
                            child.castShadow = false // Disable shadows for performance
                            child.receiveShadow = false
                            // Optimize geometry
                            if (child.geometry) {
                                child.geometry.computeBoundingBox()
                            }
                        }
                    })

                    // Calculate bounding box and center the model perfectly
                    const box = new THREE.Box3().setFromObject(object)
                    const center = box.getCenter(new THREE.Vector3())
                    const size = box.getSize(new THREE.Vector3())
                    
                    // Scale the model for super close viewing
                    const maxDimension = Math.max(size.x, size.y, size.z)
                    const targetSize = 2.5 // Much bigger for super close view
                    const scale = targetSize / maxDimension
                    object.scale.setScalar(scale)
                    
                    // Center the object perfectly at origin - NO MOVEMENT
                    center.multiplyScalar(scale)
                    object.position.sub(center)
                    // Keep it exactly centered - no vertical adjustment

                    scene.add(object)

                    // Pure Y-axis rotation - horse stays in exact same spot
                    let rotationY = 0
                    const animate = () => {
                        animationRef.current = requestAnimationFrame(animate)
                        
                        if (autoRotate) {
                            rotationY += 0.012 // Smooth rotation speed
                            object.rotation.y = rotationY
                            // NO position changes - pure rotation only
                        }

                        renderer.render(scene, camera)
                    }
                    animate()
                },
                (progress) => {
                    // Progress callback - more detailed progress
                    if (progress.total > 0) {
                        const percent = Math.round((progress.loaded / progress.total) * 100)
                        console.log(`Loading horse model: ${percent}%`)
                    }
                },
                (error) => {
                    // Error callback
                    console.error('Error loading OBJ:', error)
                    setLoading(false)
                    setError(true)
                }
            )
        }).catch(error => {
            console.error('Error loading OBJ loader:', error)
            setLoading(false)
            setError(true)
        })

        // Handle window resize
        const handleResize = () => {
            if (!mountRef.current) return
            
            const width = mountRef.current.clientWidth
            const height = mountRef.current.clientHeight
            
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderer.setSize(width, height)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement)
            }
            if (rendererRef.current) {
                rendererRef.current.dispose()
            }
            if (sceneRef.current) {
                sceneRef.current.clear()
            }
        }
    }, [objUrl, autoRotate, backgroundColor])

    return (
        <div style={{ width, height, position: 'relative', overflow: 'hidden' }}>
            <div ref={mountRef} style={{ width: '100%', height: '100%', border: 'none' }} />
            
            {loading && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.9)',
                    zIndex: 10
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            border: '4px solid #f3f3f3',
                            borderTop: '4px solid #3498db',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                            margin: '0 auto 10px'
                        }} />
                        <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>Loading Horse Model...</p>
                    </div>
                </div>
            )}
            
            {error && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.9)',
                    zIndex: 10
                }}>
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        <div style={{ fontSize: '24px', marginBottom: '10px' }}>🐎</div>
                        <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                            Could not load horse model
                        </p>
                        <p style={{ color: '#999', fontSize: '12px', margin: '5px 0 0' }}>
                            Check file path and format
                        </p>
                    </div>
                </div>
            )}
            
            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    )
}