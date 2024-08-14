/* eslint-disable style/arrow-parens */
'use client'
import React, { useEffect, useState } from 'react'
import { Card, Form, Modal } from '../Components'

interface Snip {
   id: string
   name: string
   snip: string
}

const Home: React.FC = () => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
   const [snipData, setSnipData] = useState<Snip[]>([])
   const [selectedSnipId, setSelectedSnipId] = useState<string>('')
   const [isDataFetched, setDataFetched] = useState<boolean>(false)

   /* Get snip list */
   useEffect(() => {
      const getSnip = async () => {
         try {
            const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
            const apiKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
            if (!baseUrl || !apiKey) {
               throw new Error('Missing Supabase URL or API key')
            }
            const res = await fetch(`${baseUrl}/rest/v1/snip`, {
               headers: {
                  apiKey,
               },
            })
            if (!res.ok) {
               throw new Error('Failed to fetch data')
            }
            const data = await res.json()
            setSnipData(data)
            /* Reload */
            setDataFetched(false)
         }
         catch (error) {
            console.error('Error fetching snip data:', error)
         }
      }
      getSnip()
   }, [isDataFetched])

   /* Handle seleted card */
   const handleCardClick = (snipId: string) => {
      const selectedSnip = snipData.find(snip => snip.id === snipId)
      if (selectedSnip) {
         setSelectedSnipId(selectedSnip.id)
         setIsModalOpen(true)
      }
   }
   /* Modal close */
   const handleCloseModal = () => {
      setIsModalOpen(false)
      setSelectedSnipId('')
   }

   return (
      <div className="flex h-screen flex-col md:flex-row">
         {/* Container for the cards */}
         <div className="w-full overflow-y-auto p-4 md:w-3/4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
               {snipData.map((snipContent) => (
                  <div key={snipContent?.id} className="w-full">
                     <Card
                        onClick={() => handleCardClick(snipContent.id)}
                        title={snipContent?.name}
                        description={snipContent?.snip}
                     />
                  </div>
               ))}
            </div>
         </div>
         {/* Form container */}
         <div className="w-full p-4 shadow-lg md:w-1/4">
            <Form setDataFetched={setDataFetched} />
         </div>
         {/* Modal */}
         <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            snipId={selectedSnipId}
         />
      </div>
   )
}

export default Home
