'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

function Samples() {
  const router = useRouter()

  const samples = [
    { id: 1, name: 'Modern Living Room', imageUrl:'/modern.avif' },
    { id: 2, name: 'Cozy Bedroom', imageUrl: '/bed.jpg' },
    { id: 3, name: 'Minimalist Kitchen', imageUrl: '/kitchen.avif' },
    { id: 4, name: 'Luxury Bathroom', imageUrl: '/bath.jpeg' },
    { id: 5, name: 'Outdoor Patio', imageUrl: '/out.jpeg' },
    { id: 6, name: 'Elegant Dining Room', imageUrl: '/dine.jpg' },
    { id: 7, name: 'Home Office', imageUrl: '/office.jpeg' },
    { id: 8, name: 'Kids Room', imageUrl: '/kids.jpeg' },
  ]

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-center mb-6">AI Interior Design Samples</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {samples.map((sample) => (
          <div
            key={sample.id}
            className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <Image 
              src={sample.imageUrl} 
              alt={sample.name} 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{sample.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <Button 
        variant="secondary" 
          className="mx-auto block bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
        onClick={() => router.back()}
      >
        Back
      </Button>
    </div>
  )
}

export default Samples
