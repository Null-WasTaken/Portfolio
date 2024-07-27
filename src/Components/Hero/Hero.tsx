import {Canvas} from '@react-three/fiber'
import Cube from "./Components/Cube/Cube.tsx";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import Profile from "../Header/assets/images/Profile.jpg";
import {useInView} from "react-intersection-observer";

export default  function Hero() {

    const {ref: Image , inView: ImageVisible} = useInView();


    const [typedHeading] = useTypewriter({
        words: ['Programmer' , "Dalghak"],
        loop: 100,
        typeSpeed: 120,
        deleteSpeed: 50
    })

    const [typedPara] = useTypewriter({
        words: ["I Like Cubes And I Dont Know What To Write Here So We Ball Lcique vitae.I Dont Know What To Write Here So We Ball Lcique vitae.I Dont Know What To Write Here So We Ball Lcique vitae.I Dont Know What To Write Here So We Ball Lcique vitae.I Dont Know What To Write Here So We Ball Lcique vitae."],
        typeSpeed: 10
    })

    return (
        <div className="flex h-[900px] overflow-hidden items-center justify-between w-full flex-col m-auto relative font-mono md:w-[1500px] md:flex-row ">

            <div className="flex flex-col items-center justify-around h-[550px] p-5 absolute top-52 z-20 w-[550px] bg-[#000] opacity-[0.9] rounded md:w-[936px] md:items-start md:h-[450px] md:p-9">
                <h3 className="text-5xl text-marsh">Hi Im Amir & I'm A <br/> <span className="text-white">{typedHeading}</span><Cursor cursorColor="white"/></h3>
                <p className="text-xl text-marsh font-light z-40 md:w-[660px] min-h-[168px]">{typedPara}<Cursor cursorColor="white"/></p>
                <div className=" w-full h-full top-[67px] left-80 absolute z-10 hidden md:block">
                    <Canvas>
                        <directionalLight position={[0,0,2]} />
                        <ambientLight/>
                        <Cube color="white" side={[0,0,0]} size={[1.9,1.9,1.9]} />
                    </Canvas>
                </div>

            </div>

            <div className=" w-full h-full top-3 absolute z-10 block md:hidden">
                <Canvas>
                    <directionalLight position={[0,0,2]} />
                    <ambientLight/>

                    <Cube color="white" side={[0,0,0]} size={[2.3,2.3,2.3]}/>
                </Canvas>
            </div>



            <div className="z-20 absolute w-[450px] hidden md:block left-[60rem] top-[208px]">
                <img src={Profile} alt="My Image" className={ImageVisible ? "opacity-[1]" : "opacity-[0]" } ref={Image}/>
            </div>

        </div>
    )
}