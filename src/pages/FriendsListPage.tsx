import InputText from "../components/ui/InputText"
import { IoSearch } from "react-icons/io5";
import FriendCard from "../components/common/FriendCard";

const friends = [
  { username: "Alice Johnson", usercode: "USR72381" },
  { username: "Bob Smith", usercode: "USR72381" },
  { username: "Charlie Brown", usercode: "USR72381" },
  { username: "Diana Prince", usercode: "USR72381" },
  { username: "Eve Wilson", usercode: "USR72381" }
]

const FriendsListPage = () => {
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
              usercode={e.usercode}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default FriendsListPage
