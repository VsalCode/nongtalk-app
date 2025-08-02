import ProfileSection from "../components/common/ProfileSection"

const ProfilePage = () => {
  const handleCopyUserCode = async () => {
    try {
      await navigator.clipboard.writeText("USR278403")
      alert("User code copied to clipboard!")
    } catch (err) {
      alert(err)
    }
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center flex-1 gap-5 w-full max-w-sm" >
        <h1 className="font-semibold text-xl font-poppins" >Account Information</h1>
        <div className="p-8 bg-[#004030] text-white text-4xl font-bold rounded-full" >VS</div>
        <ProfileSection
        label="Username"
        value="vsalcode"
        />
        <ProfileSection
        label="User Code"
        value="USR278403"
        showCopyButton={true}
        onCopy={handleCopyUserCode}
        />
        <ProfileSection
        label="Email"
        value="vsalcode@mail.co"
        />
      </section>
    </>
  )
}

export default ProfilePage