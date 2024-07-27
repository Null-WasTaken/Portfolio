import {useFrame} from "@react-three/fiber";
import {useRef} from "react";

// @ts-ignore
export default function Cube({color , side , size }) {



    const ref = useRef(null);
    useFrame((_state , delta) => {
        // @ts-ignore
        ref.current.rotation.y += delta *0.4
        // @ts-ignore
        ref.current.rotation.x += delta *0.4
    })
    // @ts-ignore
    return (
        <mesh position={side} ref={ref}>
            <boxGeometry args={size} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}