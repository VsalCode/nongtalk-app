import InputText from "../components/ui/InputText"
import { IoSearch } from "react-icons/io5";
import FriendCard from "../components/common/FriendCard";
import React from "react";
import { http } from "../utils/api/axios";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";
import loadGIF from "../assets/loading.gif"

interface FriendLists {
  id: number
  userCode: string
  email: string
  username: string
  password: string
  createdAt: string
}

const FriendsListPage = () => {
  const [friends, setFriends] = React.useState<FriendLists[]>([])
  const { token } = useAuth()
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    async function fetchData() {
      if (!token) return
      try {
        setIsLoading(true)
        const res = await http(token as string).get("/friends")
        setFriends(res.data.results)
      } catch (err) {
        const errMsg = err instanceof Error ? err.message : "unknown error"
        toast.error(errMsg)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [token])

  if (isLoading) {
    return (
      <main className="flex bg-black justify-center items-center min-h-screen">
        <img src={loadGIF} alt="loading-gif" className="w-50" />
      </main>
    )
  }

  return (
    <>
      <section className="mt-5 w-full flex flex-col gap-5 flex-1 overflow-hidden" >
        <h1 className="text-xl font-semibold font-poppins" >List Friends</h1>
        <form className="flex items-center flex-shrink-0" >
          <InputText
            id="search"
            type="text"
            placeholder="search friend name.."
          />
          <button type="submit" className="bg-primary p-4.5 rounded-xl ms-4" >
            <IoSearch className="text-xl" />
          </button>
        </form>
        <div className="flex flex-col gap-5 overflow-y-scroll flex-1 
                [-ms-overflow-style:none] [scrollbar-width:none] 
                [&::-webkit-scrollbar]:hidden pt-2 pb-5" >
          {friends?.map((e, index) => (
            <FriendCard
              key={index}
              username={e.username}
              usercode={e.userCode}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default FriendsListPage
