import React from "react"
import Button from "../components/ui/Button"
import InputText from "../components/ui/InputText"
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import logo from "../assets/logo.png"
import nongbot from "../assets/nongtalk-mascot.png"
import { useForm } from "react-hook-form"

interface LoginData {
  email: string
  password: string
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(true)
  const { register, handleSubmit } = useForm<LoginData>()

  function handleLogin(data: LoginData) {
    console.log(data);
  }

  return (
    <main className="flex flex-col lg:flex-row min-h-screen bg-black text-white font-poppins">
      {/* Left Section - Welcome Content */}
      <section
        className="bg-purple-primary-dark flex-1 flex flex-col justify-center items-center px-4 py-8 lg:py-0"
        style={{
          background: "radial-gradient(circle, rgba(88,76,214,1) 0%, rgba(20,20,20,1) 50%)",
        }}
      >
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-md lg:max-w-none">
          <img src={logo} alt="logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-4" />
          <img
            src={nongbot}
            alt="banner-image"
            className="w-50 h-auto md:w-80 lg:w-80 xl:w-[350px] mb-6"
          />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 lg:mb-5">
            Welcome Back!
          </h1>
          <h2 className="text-sm md:text-base lg:text-md font-medium font-inter italic opacity-90">
            Let’s get talking – Login to NongTalk
          </h2>
        </div>
      </section>

      {/* Right Section - Login Form */}
      <section className="flex-1 flex flex-col justify-center items-center px-4 py-8 lg:py-0">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="bg-gray h-fit py-8 lg:py-11 w-full max-w-md lg:w-[80%] lg:max-w-lg rounded-2xl flex flex-col gap-4 lg:gap-5 justify-center px-6 lg:px-7"
        >
          <InputText
            label="Email Account"
            id="email"
            type="email"
            placeholder="Enter Your Email..."
            {...register("email")}
            childrenLeft={<MdOutlineMail className="text-lg lg:text-xl opacity-70" />}
          />

          <InputText
            label="Password Account"
            id="password"
            type={showPassword ? "password" : "text"}
            placeholder="Enter Your password..."
            childrenLeft={<TbLockPassword className="text-lg lg:text-xl opacity-70" />}
            {...register("password")}
            childrenRight={
              <button
                className="cursor-pointer hover:scale-125 hover:text-primary transition-transform"
                onClick={() => { setShowPassword(!showPassword) }}
                type="button"
              >
                {showPassword ? <FaEye className="text-lg lg:text-xl" /> : <LuEyeClosed className="text-lg lg:text-xl" />}
              </button>
            }
          />
          <Button text="Login" customStyle="py-3 mt-3 lg:mt-5" />
        </form>
      </section>
    </main>
  )
}

export default LoginPage