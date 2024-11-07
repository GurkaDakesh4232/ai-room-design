"use client"
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation' // Use useRouter from next/navigation

function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext)
  const [showModal, setShowModal] = useState(false) // Modal state
  const [showSuccess, setShowSuccess] = useState(false) // Success message state
  const router = useRouter() // Initialize router for navigation

  // Credit options with prices
  const creditOptions = [
    { credits: 100, price: '$10' },
    { credits: 500, price: '$45' },
    { credits: 1000, price: '$80' },
  ]

  // Handle buy now click
  const handleBuyNow = (credits) => {
    setShowModal(false)
    setShowSuccess(true)
    
    // Mock API call delay
    setTimeout(() => {
      setUserDetail((prev) => ({
        ...prev,
        credits: (prev.credits || 0) + credits,
      }))
      setShowSuccess(false) // Hide success message after some time
    }, 10000) // 10 seconds delay
  }

  return (
    <div className="p-3 sm:p-5 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex gap-2 items-center">
        <Image src={'/logo.svg'} width={40} height={40} alt="Logo" />
        <h2 className="font-bold text-lg">AI Room Design</h2>
      </div>

      {/* Buy More Credits Button */}
      <Button
        variant="ghost"
        className="rounded-full text-purple-600 bg-white hover:bg-slate-200 text-sm sm:text-base"
        onClick={() => setShowModal(true)}
      >
        Buy More Credits
      </Button>

      <div className="flex gap-3 sm:gap-7 items-center">
        <div className="flex gap-2 p-1 items-center bg-slate-200 px-3 rounded-full text-sm sm:text-base">
          <img src="/star.png" width={20} height={20} alt="Credits Icon" />
          <h2>{userDetail?.credits}</h2>
        </div>

        {/* Samples Button */}
        <Button
          variant="ghost"
          className="rounded-full text-purple-600 bg-white hover:bg-slate-200 text-sm sm:text-base"
          onClick={() => router.push('/samples')}
        >
          Samples
        </Button>

        <UserButton />
      </div>

      {/* Buy Credits Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Buy Credits</h3>
            <div className="grid gap-4">
              {creditOptions.map((option) => (
                <div key={option.credits} className="p-4 border rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold">{option.credits} Credits</h4>
                    <p className="text-gray-500 text-sm sm:text-base">{option.price}</p>
                  </div>
                  <Button onClick={() => handleBuyNow(option.credits)} className="text-sm sm:text-base">Buy Now</Button>
                </div>
              ))}
            </div>
            <Button variant="secondary" className="mt-6 w-full text-sm sm:text-base" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-green-600">Successfully Purchased Credits!</h3>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Your credits will be added to your account within 10-20 minutes.</p>
            <Button variant="secondary" className="mt-4 text-sm sm:text-base" onClick={() => setShowSuccess(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
