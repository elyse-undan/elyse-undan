# 3D Models Directory

This directory is for storing your 3D model files.

## Supported Formats
- **.glb** (recommended - binary GLTF, smaller file size)
- **.gltf** (text-based GLTF with separate texture files)

## File Structure
```
public/models/
├── sculpture.glb
├── artwork.gltf
├── textures/
│   ├── texture1.jpg
│   └── texture2.png
└── README.md (this file)
```

## Converting OBJ Files

### Online Converters
1. [Aspose 3D Converter](https://products.aspose.app/3d/conversion/obj-to-gltf) - Free online converter
2. [Khronos Group Converter](https://www.khronos.org/gltf/) - Official GLTF tools

### Using Blender (Free)
1. Open Blender
2. File > Import > Wavefront (.obj)
3. File > Export > glTF 2.0 (.glb/.gltf)
4. Choose GLB for single file or GLTF for multiple files

### Using Three.js Tools
```bash
# Install gltf-pipeline globally
npm install -g gltf-pipeline

# Convert OBJ to GLTF (requires intermediate step)
# First convert OBJ to GLTF using Blender, then optimize:
gltf-pipeline -i model.gltf -o model.glb --draco.compressionLevel 7
```

## Usage in Code
```jsx
import { ThreeDViewer } from '../components/ThreeDViewer'

<ThreeDViewer
    modelUrl="/elyse-undan/models/your-model.glb"
    height="400px"
    autoRotate={true}
/>
```

## Tips for Best Performance
- Keep models under 10MB when possible
- Use compressed textures (JPG for photos, PNG for graphics with transparency)
- Consider using Draco compression for GLB files
- Test your models on mobile devices