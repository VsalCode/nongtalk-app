import React from 'react'
import ProfileSection from "../components/common/ProfileSection"
import toast, { Toaster } from 'react-hot-toast'
import { http } from '../utils/api/axios'
import { useAuth } from '../hooks/useAuth'
import loadGif from "../assets/loading.gif"

interface ProfileType {
  id: number
  userCode: string
  email: string
  username: string
  password: string
  createdAt: string
}

const ProfilePage = () => {
  const [profile, setProfile] = React.useState<ProfileType | null>(null)
  const [loading, setLoading] = React.useState(true)
  const { token } = useAuth()

  React.useEffect(() => {
    async function fetchData() {
      if (!token) {
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        const res = await http(token as string).get("/profile")
        setProfile(res.data.results)
      } catch (err) {
        const errMsg = err instanceof Error ? err.message : "Failed to get profile, please refresh!"
        toast.error(errMsg)
        console.error('Profile fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [token])

  const handleCopyUserCode = async () => {
    if (!profile?.userCode) {
      toast.error("No user code available to copy")
      return
    }

    try {
      await navigator.clipboard.writeText(profile.userCode)
      toast.success("User code copied to clipboard!")
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : "Failed to copy to clipboard"
      toast.error(errMsg)
      console.error('Copy error:', err)
    }
  }

  if (loading) {
    return (
      <section className="bg-black flex flex-col justify-center items-center flex-1 gap-5 w-full max-w-sm">
        <img src={loadGif} alt="loading-gif" className="w-60" />
      </section>
    )
  }

  if (!profile) {
    return (
      <section className="flex flex-col justify-center items-center flex-1 gap-5 w-full max-w-sm">
        <div className="text-lg text-red-500">Failed to load profile data</div>
      </section>
    )
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center flex-1 gap-5 w-full max-w-sm">
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <h1 className="font-semibold text-xl font-poppins">Account Information</h1>

        <div className="p-8 bg-[#004030] text-white text-4xl font-bold rounded-full">
          {profile.username?.slice(0, 2).toUpperCase() || 'VS'}
        </div>

        <ProfileSection
          label="Username"
          value={profile.username}
        />

        <ProfileSection
          label="User Code"
          value={profile.userCode}
          showCopyButton={true}
          onCopy={handleCopyUserCode}
        />

        <ProfileSection
          label="Email"
          value={profile.email}
        />
      </section>
    </>
  )
}

export default ProfilePage