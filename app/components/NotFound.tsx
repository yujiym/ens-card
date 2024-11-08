import { SmileyMelting } from '@phosphor-icons/react'

export default function NotFound() {
  return (
    <div className="grid min-h-screen w-full place-items-center">
      <div className="flex flex-col items-center justify-center text-center font-black text-4xl text-slate-400">
        <SmileyMelting size={96} className="my-6" />
        Not found
      </div>
    </div>
  )
}
