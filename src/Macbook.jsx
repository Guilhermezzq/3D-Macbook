/* eslint-disable react/no-unknown-property */
import { Environment, Html, PresentationControls, useGLTF } from "@react-three/drei";



const Macbook = () => {

  const macbook = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf");



  return (
   <>
   
   
   <Environment 
    
    preset="forest" />


   

   <PresentationControls 
    global
    polar={[-0.4, 0.2]}
    azimuth={[-0.4, 0.2]}
    >
   <primitive 
    object={macbook.scene}
    position-y={-1.2} 
    
    >
    <Html 
    wrapperClass="macbook"
    position={[0, 1.57, -1.5]}
    transform
    distanceFactor={1.16}
    rotation-x={-0.25}
   
    
    >
      <iframe src="https://devguii.vercel.app/" />
    </Html>

   </primitive>
   </PresentationControls>


   </>
  )
}

export default Macbook;
