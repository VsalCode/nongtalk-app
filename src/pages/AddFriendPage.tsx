import InputText from "../components/ui/InputText"
import Button from "../components/ui/Button"
import friends from "../assets/friends.png"
import React from "react"
import toast, { Toaster } from "react-hot-toast"
import loadGIF from "../assets/loading.gif"
import { useForm } from "react-hook-form"
import { http } from "../utils/api/axios"
import { useAuth } from "../hooks/useAuth"

interface AddFriendParams {
  usercode: string
}

const AddFriendPage = () => { 
  const [isLoading, setIsLoading] = React.useState(false)
  const { register, handleSubmit } = useForm<AddFriendParams>()
  const { token } = useAuth()

  async function addFriend(data: AddFriendParams){
    if(!token) return
    
    try {
      setIsLoading(true)
      const { usercode } = data
      const res = await http(token as string).post("/friends", {
        friendCode: usercode
      })

      toast.success(res.data.message)
      
    } catch(err){
      const errMsg = err instanceof Error ? err.message : "unknown error"
      toast.error(errMsg)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <main className="flex bg-black justify-center items-center min-h-screen">
        <img src={loadGIF} alt="loading-gif" className="w-50" />
      </main>
    )
  }

  return (
    < >      
      <form 
      onSubmit={handleSubmit(addFriend)}
      className="mt-17 flex flex-col justify-center items-center flex-1 gap-5 w-full max-w-sm" >
        <Toaster
                position="top-center"
                reverseOrder={false}
              />
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className='font-poppins font-semibold text-xl'>Add New Friend</h1>
          <p className="font-inter font-medium italic text-[10px] px-4">
            Please add your friend usercode for add to your friend list
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <InputText
            id="userCode"
            type="text"
            placeholder="Input your friend user code..."
            {...register("usercode")}
          />
          <Button
            text="add to friends list"
            customStyle="py-2 font-semibold w-full"
            type="submit"
          />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <img
            src={friends}
            alt="friends-2d-illustrations"
            className="w-70 max-w-full h-auto"
          />
        </div>
      </form>
    </>
  )
}

export default AddFriendPage