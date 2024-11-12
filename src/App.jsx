import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'

// const RotatingCube = () => {
//   const meshRef = useRef();

//   useFrame(()=>{
//     if(meshRef.current){
//       meshRef.current.rotation.y += 0.001
//        meshRef.current.rotation.x += 0.001;
//     }
//   })
//   return(
//     <mesh ref={meshRef}>
//       <cylinderGeometry args={[1,1,1 ]} /> 
//       <meshLambertMaterial color="#468585" emissive="#468585" />
//       <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} />

//     </mesh>
//   )
// }

function App() {
  return (
    <main className=''>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
    // <Canvas style={{height:"100vh"}} className=' text-black w-screen  flex justify-center items-center'>
    //   <OrbitControls enablePan enableRotate  enableZoom />
    //   <directionalLight position={[1,1,1]} intensity={10} color={0x9cdba6} /> 
    //   <color attach="background" args={['#F0F0F0']} />
    //   <RotatingCube />
    // </Canvas>
  )
}

export default App
