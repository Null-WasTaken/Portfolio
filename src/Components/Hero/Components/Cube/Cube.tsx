import {useFrame} from "@react-three/fiber";
import {useRef} from "react";

export default function Cube({color , side , size}) {

    
    const ref = useRef();
    useFrame((state , delta) => {
        ref.current.rotation.y += delta *0.5
        // ref.current.rotation.x += delta
    })
    return (
        <mesh position={side} ref={ref}>
            <boxGeometry args={size} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}