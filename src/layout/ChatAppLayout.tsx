import { Outlet } from 'react-router'
import TabBar from "../components/common/TabBar"
import HeaderBar from "../components/common/HeaderBar"

const ChatAppLayout = () => {
  return (
    <main
      className='flex items-center justify-center max-h-[100svh] w-full'
      style={{
        background: "radial-gradient(circle, rgba(88,76,214,1) 0%, rgba(20,20,20,1) 50%)",
      }}
    >
      <section className='text-white bg-black w-full max-w-md flex flex-col items-center px-5 relative min-h-[100svh] max-h-[100svh] rounded-lg my-4' >
        <HeaderBar />
        <div className="flex-1 flex flex-col w-full pt-16 pb-20 overflow-hidden">
          <Outlet />
        </div>
        <TabBar />
      </section>
    </main>
  )
}

export default ChatAppLayout
