
import Sidebar from "./Components/SideBar/Sidebar.tsx";
export default function Header() {

    return (
        <div className=" m-auto flex p-6 fixed justify-between items-center font-mono md:w-[1700px] z-[99999]">
            <Sidebar />

            <div className="flex items-center justify-around gap-3">
            </div>

        </div>
    )
}