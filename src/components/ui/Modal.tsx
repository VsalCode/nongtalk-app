import React from "react"
import { MdClose } from "react-icons/md"
import Button from "./Button"
import InputText from "./InputText"
import { FaUser } from "react-icons/fa"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (username: string) => void
  isLoading?: boolean
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, isLoading = false }) => {
  const [username, setUsername] = React.useState("")
  const [error, setError] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim()) {
      setError("Username is required")
      return
    }
    if (username.length < 3) {
      setError("Username must be at least 3 characters")
      return
    }
    onSubmit(username.trim())
  }

  const handleClose = () => {
    if (!isLoading) {
      setUsername("")
      setError("")
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray rounded-2xl p-6 w-full max-w-md relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
          disabled={isLoading}
        >
          <MdClose className="text-xl" />
        </button>
        
        <h3 className="text-xl font-bold text-white mb-4">Choose Your Username</h3>
        <p className="text-sm text-gray-300 mb-6">
          Please enter a unique username for your account
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputText
            label="Username"
            id="username-modal"
            type="text"
            placeholder="Enter your username..."
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
              setError("")
            }}
            childrenLeft={<FaUser className="text-lg opacity-70" />}
            disabled={isLoading}
          />
          
          {error && <p className="text-red-700 italic text-sm">{error}</p>}
          
          <div className="flex gap-3 mt-6">
            <Button
              type="button"
              text="Cancel"
              onClick={handleClose}
              customStyle="flex-1 py-2 bg-gray-600 hover:bg-gray-700"
              disabled={isLoading}
            />
            <Button
              type="submit"
              text={isLoading ? "Creating Account..." : "Create Account"}
              customStyle="flex-1 py-2"
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
