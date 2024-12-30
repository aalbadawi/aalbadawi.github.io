import './card.css'

import Image from 'next/image'
import React, { useState } from 'react'

interface ICardProps {
  name: string
  brief: string
  profilePic: string
  lastWord: string
}

export default function Card({
  name,
  brief,
  profilePic,
  lastWord,
}: ICardProps) {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <div className="card-body flex justify-center items-center p-4">
      <div
        className="card-container relative w-full max-w-md p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105"
        onTouchCancel={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Profile Image */}
        <div className="card-imgBx flex justify-center items-center mx-auto mt-8 mb-4">
          <Image
            width={250}
            height={250}
            className="rounded-full border-4 border-orange-600"
            src={profilePic}
            alt={name}
            priority
          />
        </div>

        {/* Card Content */}
        <div className="card-contentBx text-center">
          <h2 className="text-xl font-semibold text-orange-600 mb-2">{name}</h2>
          {/* Brief Description */}
          <div className="card-size overflow-auto max-h-36 mb-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm">{brief}</p>
          </div>

          {/* Last Word */}
          <div className="card-color">
            <p className="text-orange-300 text-xs">{lastWord}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
