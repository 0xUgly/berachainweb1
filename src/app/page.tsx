import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'

function page() {
  return (
    
      <div className="min-h-screen w-full flex flex-col items-center" style={{ backgroundImage: 'url("/gameimg/Bg_Img.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Header />
        {/* Add your content here */}
      </div>
    
  )
}

export default page
