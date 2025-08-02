import { Outlet } from 'react-router'
import TabBar from "../components/common/TabBar"
import HeaderBar from "../components/common/HeaderBar"

const ChatAppLayout = () => {
  return (
    <main className='bg-black flex items-center justify-center min-h-screen w-full'  >
      <section className='text-white bg-gray w-full max-w-md min-h-screen flex flex-col items-center px-5 py-7 relative sm:min-h-[100vh] sm:max-h-screen sm:rounded-lg sm:my-4' >
          <HeaderBar />
          <Outlet/>
          <TabBar/>
      </section>
    </main>
  )
}

export default ChatAppLayout
