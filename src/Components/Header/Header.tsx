
import profile from "./assets/images/Profile.jpg";
import Sidebar from "./Components/SideBar/Sidebar.tsx";
export default function Header() {

    return (
        <div className=" m-auto flex p-6 justify-between items-center font-mono md:w-[1700px]">
            <Sidebar />

            <div className="flex gap-2 items-center justify-around gap-3">
                <img src={profile} className="w-10 rounded-3xl cursor-pointer" alt="MyProfile"/>
                <h4 className="text-marsh font-bold">Amir Hossein Fallah</h4>
            </div>



        </div>
    )
}