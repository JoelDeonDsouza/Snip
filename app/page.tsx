import { ShineBorder } from '~/components/ui/shine-border'

export default async function Page() {
   return (
      <div className="flex min-h-screen items-center justify-center">
         <ShineBorder
            className="text-center text-2xl font-bold capitalize"
            color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
         >
            Coding Challenge
         </ShineBorder>
      </div>
   )
}
