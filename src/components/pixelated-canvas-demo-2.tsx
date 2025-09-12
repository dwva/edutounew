"use client"
import { PixelatedCanvas } from "./pixelated-canvas"
import logo from "./download.png" // ✅ import the logo from components folder

export default function PixelatedCanvasDemo() {
  return (
   
      <div className="flex-shrink-0">
        <PixelatedCanvas
          src={logo} // ✅ use the imported logo
          width={290}
          height={290}
          cellSize={4}
          dotScale={0.5}
          shape="circle"
          backgroundColor="#ffffffff"
          dropoutStrength={0.1}
          interactive
          distortionStrength={0.1}
          distortionRadius={120}
          distortionMode="repel"
          followSpeed={0.4}
          jitterStrength={4}
          jitterSpeed={2}
          sampleAverage
          className="rounded-full shadow-lg brightness-130 saturate-120"
          style={{ transform: "rotate(15deg)" }}
        />
      
    </div>
  )
}
