/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import Card from '../Card'
import RepForm from '../RepForm'

interface ModalProps {
   isOpen: boolean
   onClose: () => void
   snipId: string
}
interface Snip {
   id: string
   name: string
   snip_comment: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, snipId }) => {
   const [comments, setComments] = useState<Snip[]>([])
   const [isDataFetched, setDataFetched] = useState<boolean>(false)

   /* Get comments list */
   useEffect(() => {
      const fetchComments = async () => {
         if (!snipId)
            return
         try {
            const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
            const apiKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
            if (!baseUrl || !apiKey) {
               throw new Error('Missing Supabase URL or API key')
            }
            const res = await fetch(`${baseUrl}/rest/v1/snip_comments?snip_id=eq.${snipId}`, {
               headers: {
                  apikey: apiKey,
               },
            })
            if (!res.ok) {
               throw new Error('Failed to fetch comments')
            }
            const data = await res.json()
            setComments(data)
            setDataFetched(false)
         }
         catch (error) {
            console.error('Error fetching comments:', error)
         }
      }
      if (isOpen) {
         fetchComments()
      }
   }, [isOpen, snipId, isDataFetched])

   /* Modal */
   if (!isOpen)
      return null

   return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
         <div className="flex w-full max-w-3xl flex-col gap-4 rounded-lg bg-black p-6 shadow-lg md:flex-row">
            <div className="max-h-[80vh] flex-1 overflow-y-auto">
               <div className="space-y-4">
                  {comments.length === 0
                     ? (
                           <div className="text-center text-gray-300">
                              <p className="text-lg font-semibold">Be the first to answer this!</p>
                           </div>
                        )
                     : (
                           comments.map(comment => (
                              <Card
                                 key={comment.id}
                                 onClick={onClose}
                                 title={comment.name}
                                 description={comment.snip_comment}
                              />
                           ))
                        )}
               </div>
            </div>
            {/* Form Container */}
            <div className="flex-1">
               <RepForm snipId={snipId} setDataFetched={setDataFetched} />
            </div>
            <button
               onClick={onClose}
               className="ml-auto flex size-8 items-center justify-center rounded-full bg-white text-black"
            >
               <MdClose />
            </button>

         </div>
      </div>
   )
}

export default Modal
