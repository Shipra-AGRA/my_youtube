import { Outlet } from "react-router"
import MainContainer from "./MainContainer"
import Sidebar from "./Sidebar"

const Body = () => {
    return (
        <div className="flex">
            <Sidebar/>
            <Outlet/>
        </div>
    )
}
export default Body