import TabBar from "../components/common/Tabbar"
import HeaderBar from "../components/common/HeaderBar"
import InputText from "../components/ui/InputText"
import Button from "../components/ui/Button"
import friends from "../assets/friends.png"

const AddFriendPage = () => {
  return (
    <main className='bg-black flex items-center justify-center min-h-screen w-full' >
      <section className='text-white bg-gray w-full max-w-md min-h-screen flex flex-col items-center px-5 py-7 relative sm:min-h-[100vh] sm:max-h-screen sm:rounded-lg sm:my-4'>
        <HeaderBar/>
        <form className="mt-17 flex flex-col justify-center items-center flex-1 gap-5 w-full max-w-sm" >
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
        <TabBar />
      </section>
    </main>
  )
}

export default AddFriendPage