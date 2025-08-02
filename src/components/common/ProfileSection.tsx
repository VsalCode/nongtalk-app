import React from 'react'
import { IoIosCopy } from "react-icons/io";

interface ProfileProps {
  label: string
  value: string
  children?: React.ReactNode
  showCopyButton?: boolean
  onCopy?: () => void
}

const ProfileSection: React.FC<ProfileProps> = ({ label, value, children, showCopyButton = false, onCopy }) => {
  return (
    <div className='w-full bg-gray backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg' >
      <div className='flex items-center gap-3 mb-2' >
        {children}
        <h1 className='text-sm font-medium text-white/50 uppercase tracking-wide'>{label}</h1>
      </div>
      <div className='flex items-center justify-between'>
        <h4 className='text-base font-semibold text-white break-all'>{value}</h4>
        {showCopyButton && (
          <button 
            onClick={onCopy}
            className='ml-3 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200 flex-shrink-0 cursor-pointer'
            aria-label={`Copy ${label}`}
          >
            <IoIosCopy size={18} />
          </button>
        )}
      </div>
    </div>
  )
}

export default ProfileSection