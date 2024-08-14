import type { FormEvent } from 'react'
import React, { useState } from 'react'
import { Button } from '~/components/ui/button'
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

interface FormData {
   name: string
   snip: string
}

interface FormProps {
   setDataFetched: (fetched: boolean) => void
}

const Form: React.FC<FormProps> = ({ setDataFetched }) => {
   const [formData, setFormData] = useState<FormData>({ name: '', snip: '' })
   const [error, setError] = useState<string>('')

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = event.target
      setFormData(prevState => ({
         ...prevState,
         [id]: value,
      }))
   }
   /* Handle upload */
   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (!formData.name || !formData.snip) {
         setError('Both name and snip fields are required.')
         return
      }
      setError('')
      try {
         const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
         const apiKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
         if (!baseUrl || !apiKey) {
            throw new Error('Missing Supabase URL or API key')
         }
         const res = await fetch(`${baseUrl}/rest/v1/snip`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'apiKey': apiKey,
            },
            body: JSON.stringify(formData),
         })

         if (!res.ok) {
            throw new Error('Failed to submit data')
         }
         setFormData({ name: '', snip: '' })
         /*  Reload */
         setDataFetched(true)
      }
      catch (error) {
         console.error('Error submitting data:', error)
      }
   }

   return (
      <div className="flex w-full justify-center">
         <Card className="w-full max-w-[350px]">
            <CardHeader>
               <CardTitle>Create a Snip</CardTitle>
            </CardHeader>
            <CardContent>
               <form onSubmit={handleSubmit}>
                  <div className="grid w-full items-center gap-4">
                     <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input
                           id="name"
                           placeholder="Enter your name"
                           value={formData.name}
                           onChange={handleChange}
                        />
                     </div>
                  </div>
                  <div className="mt-5 grid w-full items-center gap-4">
                     <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="snip">Snip</Label>
                        <Input
                           id="snip"
                           placeholder="Enter your snip"
                           value={formData.snip}
                           onChange={handleChange}
                        />
                     </div>
                  </div>
                  {error && <p className="mt-2 text-red-500">{error}</p>}
                  <CardFooter className="mt-5 flex flex-col gap-4 sm:flex-row sm:justify-center">
                     <Button type="submit">Create</Button>
                  </CardFooter>
               </form>
            </CardContent>
         </Card>
      </div>
   )
}

export default Form
