import React from "react"
import Button from "../components/ui/Button"
import InputText from "../components/ui/InputText"
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import logo from "../assets/logo.png"
import banner from "../assets/banner.png"
import { useForm } from "react-hook-form"

interface RegisterData {
  email: string
  password: string
  confirmPassword: string
}

const RegisterPage = () => {
  const [showPassword, setShowPassword] = React.useState(true)
  const { register, handleSubmit } = useForm<RegisterData>()

  function handleRegister(data: RegisterData) {
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
            src={banner}
            alt="banner-image"
            className="w-64 h-auto md:w-80 lg:w-96 xl:w-[400px] mb-6"
          />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 lg:mb-5">
            Welcome To <span className="text-primary">NongTalk</span>!
          </h1>
          <h2 className="text-sm md:text-base lg:text-md font-medium font-inter italic opacity-90">
            The smarter way to connect and chat with everyone.
          </h2>
        </div>
      </section>

      {/* Right Section - Registration Form */}
      <section className="flex-1 flex flex-col justify-center items-center px-4 py-8 lg:py-0">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="bg-gray h-fit py-8 lg:py-11 w-full max-w-md lg:w-[80%] lg:max-w-lg rounded-2xl flex flex-col gap-4 lg:gap-5 justify-center px-6 lg:px-7"
        >
          <InputText
            label="Email"
            id="email"
            type="email"
            placeholder="Enter Your Email..."
            {...register("email")}
            childrenLeft={<MdOutlineMail className="text-lg lg:text-xl opacity-70" />}
          />

          <InputText
            label="Password"
            id="password"
            type={showPassword ? "password" : "text"}
            placeholder="Create Your password..."
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

          <InputText
            label="Confirm Password"
            id="confirm"
            type={showPassword ? "password" : "text"}
            placeholder="Confirm Your password..."
            {...register("confirmPassword")}
            childrenLeft={<TbLockPassword className="text-lg lg:text-xl opacity-70" />}
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

          <Button text="Join Now" customStyle="py-3 mt-3 lg:mt-5" />
        </form>
      </section>
    </main>
  )
}

export default RegisterPage