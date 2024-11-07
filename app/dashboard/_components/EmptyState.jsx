import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function EmptyState() {
  return (
    <div className="flex items-center justify-center mt-10 flex-col space-y-5">
    <div className="rounded-lg shadow-lg overflow-hidden">
      <Image src={'/placeholder.jpg'} width={350} height={350} alt="Room Design Placeholder" />
    </div>
    
    <h2 className="font-semibold text-xl text-gray-600 text-center">
      Create a New AI Interior Design for Your Room
    </h2>
    <Link href={'/dashboard/create-new'}>
    <Button className="mt-3 bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-lg mb-5 shadow-md">
      + Redesign Room
    </Button>
    </Link>
  </div>
  
  )
}

export default EmptyState