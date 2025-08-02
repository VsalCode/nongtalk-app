import TabBar from "../components/common/Tabbar"
import HeaderBar from "../components/common/HeaderBar"
import InputText from "../components/ui/InputText"
import Button from "../components/ui/Button"
import friends from "../assets/friends.png"

const AddFriendPage = () => {
  return (
    <main className='bg-black flex items-center justify-center' >
      <section className='text-white bg-gray min-w-[320px] min-h-[100svh] flex flex-col items-center px-5 py-7 relative'>
        <HeaderBar/>
        <form className="mt-17 flex flex-col justify-center items-center max-h-full gap-5 flex-wrap" >
          <h1 className='font-poppins font-semibold text-xl'>Add New Friend</h1>
          <p className="font-inter font-medium italic text-[10px]">Please add your friend usercode for add to your friend list</p>
            <InputText
            id="userCode"
            type="text"
            placeholder="Input your friend user code..."
            />
            <Button
            text="add to friends list"
            customStyle="py-2 font-semibold"
            type="submit"
            />
            <img src={friends} alt="friends-2d-illustrations" className="w-70" />
        </form>
        <TabBar />
      </section>
    </main>
  )
}

export default AddFriendPage
