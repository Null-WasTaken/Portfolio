import {useState} from "react";
import MobileModal from "./Components/MobileModal/MobileModal.tsx";
import {BiRightArrow} from "react-icons/bi";
import {useTypewriter} from "react-simple-typewriter";
import ProjectSlide from "./Components/ProjectSlide/ProjectSlide.tsx";


export default  function Projects() {

    const [project , OpenProject] = useState(false);

    const [heading] = useTypewriter({
        words: ['My Projects'],
        typeSpeed: 20,
        deleteSpeed: 50,
        loop: 1
    });


    return (
      <>
            <div className="md:hidden flex items-center w-full">
              <MobileModal/>
            </div>

            <div className= "hidden md:flex md:w-[79%] md:overflow-hidden md:h-[700px] md:items-start md:justify-around md:m-auto " id="projects">
                <div className="flex flex-col font-mono h-full">
                    <div className="w-[560px] z-[30] h-full flex m-auto text-marsh bg-[#000] flex-col p-4">
                        <h1 className="text-5xl p-5 font-bold ">{heading}</h1>  
                        <a className="text-4xl border-b-2 p-4 m-3  pb-8 flex items-center gap-2 cursor-pointer" onClick={() => {OpenProject(!project)}}>Dave <span className="text-2xl mt-2"><BiRightArrow /></span></a>
                        <a className="text-4xl border-b-2 p-4 m-3  pb-8 flex items-center gap-2 cursor-pointer" onClick={() => {OpenProject(!project)}}>Other Project<span className="text-2xl mt-2"><BiRightArrow /></span></a>
                        <a className="text-4xl border-b-2 p-4 m-1  pb-8 flex items-center gap-2 cursor-pointer" onClick={() => {OpenProject(!project)}}>The Other Other Project<span className="text-2xl mt-2"><BiRightArrow /></span></a>
                    </div>
                </div>

                <div className={project ? " z-[2] flex transition-all left-0 relative duration-[1s] w-[50%] gap-14 flex-col font-mono h-[500px] text-marsh " : "flex w-[50%] flex-col gap-14 font-mono duration-[1s] -left-[99rem] relative z-[2] transition-all opacity-[0.000001] " }>
                    <ProjectSlide />
                </div>
             </div>
      </>

    );

}