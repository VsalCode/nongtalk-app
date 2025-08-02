import { Link } from 'react-router'
import { HiUserGroup } from "react-icons/hi2";
import { IoMdPerson } from "react-icons/io";
import { IoChatbubbles } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

const TabBar = () => {
  return (
    <nav className='bg-secondary text-2xl absolute bottom-0 flex w-full items-center justify-evenly py-5 rounded-t-4xl' >
      <Link to="/add-friend" className='text-white hover:text-primary ' >
        <HiUserGroup/>
      </Link>
      <Link to="/friends" className='text-white hover:text-primary ' >
        <IoChatbubbles/>
      </Link>
      <Link to="/profile" className='text-white hover:text-primary ' >
        <IoMdPerson/>
      </Link>
      <Link to="/login" className='text-red-500 hover:opacity-75 ' >
        <LuLogOut/>
      </Link>
    </nav>
  )
}

export default TabBar
