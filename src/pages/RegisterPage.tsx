import React from "react"
import Button from "../components/ui/Button"
import InputText from "../components/ui/InputText"
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import logo from "../assets/logo.png"
import banner from "../assets/banner.png"

const RegisterPage = () => {
  const [showPassword, setShowPassword] = React.useState(true)

  return (
    <main className="flex min-h-screen bg-black text-white font-poppins" >
      <section className="flex-1 flex flex-col justify-center items-center" >
        <div className="flex flex-col" >
          <img src={logo} alt="logo" className="w-15" />
          <img src={banner} alt="banner-image" className="w-100" />
          <h1 className="text-4xl font-bold mb-5">Welcome To <span className="text-primary" >NongTalk</span>!</h1>
          <h1 className="text-md font-medium font-inter italic">The smarter way to connect and chat with everyone.</h1>
        </div>
      </section>
      <section className="flex-1 flex flex-col justify-center items-center " >
        <form className="bg-gray h-fit py-11 w-[80%] rounded-2xl flex flex-col gap-5 justify-center px-7" >
        <InputText 
          label="Email" 
          id="email" 
          type="email" 
          placeholder="Enter Your Email Account..." 
          childrenLeft={ <MdOutlineMail className="text-xl opacity-70" /> }
        />
         <InputText 
          label="Password" 
          id="password" 
          type={showPassword ? "password" : "text"} 
          placeholder="Create Your password Account..." 
          childrenLeft={ <TbLockPassword className="text-xl opacity-70" /> }
          childrenRight={
            <button className="cursor-pointer hover:scale-125 hover:text-primary" onClick={() => {setShowPassword(!showPassword)}} type="button" >
              { showPassword ? <FaEye className="text-xl" /> : <LuEyeClosed className="text-xl" /> }
            </button>
          }
        />
         <InputText 
          label="Confirm Password" 
          id="confirm" 
          type={showPassword ? "password" : "text"}
          placeholder="Confirm Your password Account..." 
          childrenLeft={ <TbLockPassword className="text-xl opacity-70" /> }
          childrenRight={
            <button className="cursor-pointer hover:scale-125 hover:text-primary" onClick={() => {setShowPassword(!showPassword)}} type="button" >
              { showPassword ? <FaEye className="text-xl" /> : <LuEyeClosed className="text-xl" /> }
            </button>
          }
        />
        <Button text="Join Now" customStyle="py-3 mt-5" />
        </form>
      </section>
    </main>
  )
}

export default RegisterPage
