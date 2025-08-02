import logo from "../../assets/logo.png"
import { CgMenuRight } from "react-icons/cg";

const HeaderBar = () => {
  return (
    <nav className='bg-secondary absolute w-full flex items-center justify-between left-0 right-0 top-0 py-2 px-5' >
      <img src={logo} alt="logo" className='w-10' />
      <button className='cursor-pointer' >
        <CgMenuRight className="text-white text-2xl" />
      </button>
    </nav>
  )
}

export default HeaderBar
