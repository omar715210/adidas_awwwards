import * as THREE from 'three'
import { Mask } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { RefObject } from "react"


const Masking = ({ref}: {ref: RefObject<THREE.Mesh | null>}) => {
  const {width, height} = useThree((state) => state.viewport)
  return (
    <Mask id={1} position={[0, 0.7, 0]} ref={ref}>
        <planeGeometry  args={[width*2, height]}/>
        <meshBasicMaterial />
    </Mask>
  )
}

export default Masking