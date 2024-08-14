import React from 'react'

/* Card properties */
interface CardProps {
   onClick: () => void
   title: string
   description: string
}

const Card: React.FC<CardProps> = ({ onClick, title, description }) => {
   return (
      <div
         className="mx-auto max-w-sm cursor-pointer overflow-hidden rounded-lg border border-gray-500 bg-black shadow-lg"
         onClick={onClick}
      >
         <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-300">{title}</h2>
            <p className="mt-2 text-gray-500">
               {description}
            </p>
         </div>
      </div>
   )
}

export default Card
