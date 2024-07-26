import { IoClose } from "react-icons/io5";
import {GrGithub} from "react-icons/gr";
import {useState} from "react";
import {BiDownArrow} from "react-icons/bi";
import {useTypewriter} from "react-simple-typewriter";
import Dave2 from './Assets/Images/Dave.png';



export default function MobileModal() {
    const [openModal , SetopenModal] = useState(false)


    const Dave = {
        id: 1,
        Title: "Dave",
        Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, animi assumenda dolores eligendi enim est illo magni maxime mollitia officia officiis quas temporibus? Esse, facere itaque nesciunt officia sapiente vero!",
        Img: {Dave2}
    }

    const [heading] = useTypewriter({
        words: ['My Projects'],
        typeSpeed: 20,
        deleteSpeed: 50,
        loop: 1
    })


    return (
<>
        <div className="flex flex-col m-auto w-full h-[500px] font-mono" id="Projects">
            <div className="w-[560px] h-full flex m-auto text-marsh bg-[#000] opacity-[0.9] flex-col p-4">
                <h1 className="text-5xl p-5 font-bold ">{heading}</h1>
                <a href="#Projects" className="text-4xl border-b-2 p-4 m-3  pb-8 flex items-center gap-2" onClick={() => {SetopenModal(true)}}>Dave <span className="text-2xl mt-2"><BiDownArrow /></span></a>
                <a href="" className="text-4xl border-b-2 p-4 m-3  pb-8 flex items-center gap-2" onClick={() => {SetopenModal(true)}}>Other Project<span className="text-2xl mt-2"><BiDownArrow /></span></a>
                <a href="" className="text-4xl border-b-2 p-4 m-1  pb-8 flex items-center gap-2" onClick={() => {SetopenModal(true)}}>The Other Other Project<span className="text-2xl mt-2"><BiDownArrow /></span></a>
            </div>
        </div>

    <div className={openModal ? "fixed top-[200px]  p-7 justify-around flex flex-col m-auto w-full h-[770px] transition-all font-mono z-50 bg-[#000] text-marsh duration-[0.8s]" : 'fixed top-[-9000px] transition-all p-7 justify-around flex flex-col m-auto w-full h-[770px] font-mono z-50 bg-[#000] text-marsh duration-[0.5s]'}>
        <div className="w-full flex items-center pl-[500px]  h-[40px]">
            <span className="text-4xl cursor-pointer" onClick={() => {SetopenModal(false)}}><IoClose /></span>
        </div>
        <div className="flex items-center  w-full">
            <h1 className="text-5xl font-bold">{Dave.Title}</h1>
            <img src={Dave2} className="w-48 ml-44" alt="Project"/>
        </div>
        <p className="text-xl font-light">{Dave.Desc}</p>
        <a href="#" className="text-4xl"><GrGithub/></a>
    </div>
    </>

    )
}