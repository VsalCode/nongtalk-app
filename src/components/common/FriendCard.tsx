import React from 'react'
import { Link } from 'react-router'
import { IoChatboxEllipsesSharp } from "react-icons/io5"
import { FaTrashAlt } from "react-icons/fa";

const initialBackground = [
  "#004030", "#273F4F", "#BB3E00", "#3D365C", "#690B22"
]

interface FriendCardProps {
  username: string
  usercode: string
}

const FriendCard: React.FC<FriendCardProps> = ({ username = "unknown", usercode }) => {
  const [initial, setInitial] = React.useState("")
  const [bgColor, setBgColor] = React.useState("#004030")

  React.useEffect(() => {
    const initials = username.slice(0, 2).toUpperCase()
    setInitial(initials)

    const colorIndex = username.length % initialBackground.length
    setBgColor(initialBackground[colorIndex])
  }, [username])

  return (
    <div className="flex items-center justify-between  rounded-xl bg-gray px-5 py-4 max-w-md" >
      <div className='flex items-center gap-5' >
        <div
          className="flex items-center justify-center w-12 h-12 text-white rounded-full text-lg font-bold"
          style={{ backgroundColor: bgColor }}
        >
          {initial}
        </div>
        <div className="flex flex-col gap-1 text-white" >
          <h1 className="text-lg font-semibold " >{username}</h1>
          <p className="text-sm " >{usercode}</p>
        </div>
      </div>
      <div className="flex items-center gap-5" >
        <Link to="/friends?">
        <IoChatboxEllipsesSharp className="text-2xl opacity-70" />
      </Link>
      <button className="cursor-pointer" >
        <FaTrashAlt className="text-xl opacity-75 text-red-400" />
      </button>
      </div>
    </div>
  )
}

export default FriendCard