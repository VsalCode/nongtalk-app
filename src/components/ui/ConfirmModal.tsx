import React from 'react'
import Button from './Button'

interface ConfirmModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
  isLoading?: boolean
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  isLoading = false
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray rounded-2xl p-6 w-full max-w-sm relative text-white">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className=" mb-6">{message}</p>
        <div className="flex gap-3 justify-end">
          <Button
            text='cancel'
            onClick={onClose}
            disabled={isLoading}
            className="cursor-pointer px-4 py-2 border border-gray-300 rounded-lg hover:bg-primary disabled:opacity-50"
          />
           
          <Button
            text={isLoading ? "deleting.." : "Delete"}
            onClick={onConfirm}
            disabled={isLoading}
            className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 flex items-center gap-2"
          />
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
