import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"
import * as THREE from "three"

// مكون لتحريك الكرة الأرضية
const Globe = () => {
  const sphereRef = useRef()

  // تحميل الخريطة أو أي texture
  const earthTexture = useLoader(TextureLoader, "/images/shape1.webp")

  earthTexture.wrapS = earthTexture.wrapT = THREE.RepeatWrapping // تحديد كيفية التكرار
  earthTexture.repeat.set(15, 15) // لا تكرر النسيج (تغطية الكرة فقط)
  earthTexture.offset.set(5, 5) // تعيين الإزاحة إذا كنت بحاجة لتحريك النسيج
  earthTexture.anisotropy = 3 // تحسين جودة النسيج في المشهد 3D

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.002 // حركة دوران الكرة حول المحور X
      sphereRef.current.rotation.y += 0.002 // حركة دوران الكرة حول المحور Y
    }
  })

  return (
    <Sphere ref={sphereRef} args={[3, 30, 60]} position={[0, 0, 0]}>
      <meshStandardMaterial map={earthTexture} />
    </Sphere>
  )
}

const GlobeCanvas = () => {
  return (
    <Canvas>
      <color />
      {/* التحكم في الكاميرا والتحريك */}
      <OrbitControls />
      {/* الإضاءة */}
      <ambientLight intensity={0.8} /> {/* إضاءة عامة خفيفة */}
      {/* إضاءة Spot */}
      <spotLight
        position={[15, 55, 5]}
        angle={Math.PI / 5} // زاوية الإضاءة
        penumbra={2} // ضبابية الحواف
        intensity={8} // شدة الإضاءة
        castShadow={true} // تفعيل الظلال
      />
      {/* تضمين كرة الأرض في Canvas */}
      <Globe />
    </Canvas>
  )
}

export default GlobeCanvas
