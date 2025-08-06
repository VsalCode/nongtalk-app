import React from "react"
import Button from "../components/ui/Button"
import InputText from "../components/ui/InputText"
import Modal from "../components/ui/Modal"
import { MdOutlineMail } from "react-icons/md"
import { TbLockPassword } from "react-icons/tb"
import { FaEye } from "react-icons/fa"
import { LuEyeClosed } from "react-icons/lu"
import logo from "../assets/logo.png"
import banner from "../assets/banner.png"
import { useForm } from "react-hook-form"
import { Link } from "react-router"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterSchema } from "../utils/validation/authValidation"
import toast, { Toaster } from "react-hot-toast"
import { http } from "../utils/api/axios"

interface RegisterData {
  email: string
  password: string
  confirmPassword: string
}

const RegisterPage = () => {
  const [showPassword, setShowPassword] = React.useState(true)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [formData, setFormData] = React.useState<RegisterData | null>(null)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterData>({
    resolver: yupResolver(RegisterSchema)
  })

  const handleInitialSubmit = (data: RegisterData) => {
    setFormData(data)
    setIsModalOpen(true)
  }

  const handleFinalRegistration = async (username: string) => {
    if (!formData) return

    try {
      setIsLoading(true)
      const res = await http().post("/auth/register", {
        email: formData.email,
        username: username,
        password: formData.password
      })
      
      console.log(res)
      toast.success("Account created successfully!")
      
      reset()
      setFormData(null)
      setIsModalOpen(false)
      
    } catch (err) {
      const errMessage = err instanceof Error ? err.message : "Registration failed"
      toast.error(errMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setFormData(null)
  }

  return (
    <main className="flex flex-col lg:flex-row min-h-screen bg-black text-white font-poppins">
      <Toaster
        position="top-center"
        reverseOrder={false}
        />
      
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
          onSubmit={handleSubmit(handleInitialSubmit)}
          className="bg-gray h-fit py-8 lg:py-11 w-full max-w-md lg:w-[80%] lg:max-w-lg rounded-2xl flex flex-col gap-4 lg:gap-5 justify-center px-6 lg:px-7"
        >
          <InputText
            label="Email"
            id="email-regist"
            type="email"
            placeholder="Enter Your Email..."
            {...register("email")}
            childrenLeft={<MdOutlineMail className="text-lg lg:text-xl opacity-70" />}
          />
          {errors.email && <p className="text-red-700 italic text-sm">{errors.email.message}</p>}

          <InputText
            label="Password"
            id="password-regist"
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
          {errors.password && <p className="text-red-700 italic text-sm">{errors.password.message}</p>}

          <InputText
            label="Confirm Password"
            id="confirm-pw-regist"
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
          {errors.confirmPassword && <p className="text-red-700 italic text-sm">{errors.confirmPassword.message}</p>}

          <Button 
            type="submit" 
            text="Continue" 
            customStyle="py-3 mt-3 md:mt-4" 
            disabled={isLoading}
          />
          <Link className="text-blue-600 text-[12px] sm:text-sm underline text-center" to="/login">
            Already Have an Account?
          </Link>
        </form>
      </section>

      {/* Username Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleFinalRegistration}
        isLoading={isLoading}
      />
    </main>
  )
}

export default RegisterPage
