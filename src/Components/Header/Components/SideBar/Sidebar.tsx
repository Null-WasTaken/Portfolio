import { FaGithub , FaInstagram , FaLinkedin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {useState} from "react";
import {FaCube} from "react-icons/fa6";
import {IoIosArrowRoundForward} from "react-icons/io";


// eslint-disable-next-line react-refresh/only-export-components
export default function Sidebar() {

    const [sidebar , setSidebar] = useState(false);


    return (

        <div className="flex justify-around h-full items-center gap-4 z-50">
            <span className="text-4xl text-marsh"><FaCube /></span>
            <div className="flex">
                <a href="#" className="text-marsh uppercase tracking-widest " onClick={() => {
                    setSidebar(!sidebar)
                }}>Menu</a>
                <span className="text-marsh uppercase tracking-widest text-2xl cursor-pointer" onClick={() => {
                    setSidebar(!sidebar)
                }}><IoIosArrowRoundForward /></span>
            </div>

            <div className={sidebar ? "fixed flex flex-col items-start text-marsh top-0 bg-[#000] left-0 min-h-[100vh] w-[400px] transition-all duration-[1.3s] z-[1910]" : "fixed flex flex-col items-start text-marsh top-0 bg-[#000] -left-[25rem] min-h-[100vh] w-[400px] transition-all duration-[1.3s] z-[1910]"}>

                <div className="flex items-center justify-between w-full">
                    <a href="#" className="text-4xl pl-7 p-4 transition-all hover:underline"></a>
                    <span className="mr-7 text-4xl mt-3 cursor-pointer" onClick={() => {
                        setSidebar(!sidebar )
                    }}><IoClose /></span>
                </div>
                <a href="#" className="text-4xl pl-7 p-4 transition-all hover:pl-10">Home</a>
                <a href="#" className="text-4xl pl-7 p-4 transition-all hover:pl-10">About</a>
                <a href="#" className="text-4xl pl-7 p-4 transition-all hover:pl-10">Projects</a>
                <a href="#" className="text-4xl pl-7 p-4 transition-all hover:pl-10">FAQ</a>

                <div className="flex flex-row">
                    <span className="text-4xl pl-7 p-4 transition-all hover:text-5xl cursor-pointer"><FaGithub /></span>
                    <span className="text-4xl pl-7 p-4 transition-all hover:text-5xl cursor-pointer"><FaInstagram /></span>
                    <span className="text-4xl pl-7 p-4 transition-all hover:text-5xl cursor-pointer"><FaLinkedin /></span>

                </div>
            </div>

        </div>

    );
}