import { Copy, Share } from '@phosphor-icons/react'
import { useLocation } from '@remix-run/react'
import QRCode from 'react-qr-code'
import StyledName from '~/components/StyledName'
import { Drawer, DrawerContent, DrawerTrigger } from '~/components/ui/drawer'
import { cn, getClassBySubname } from '~/lib/utils'

export default function ShareButton({
  url,
  fullname,
  subname
}: { url: string; fullname: string; subname: string }) {
  const location = useLocation()

  console.log('location', location)

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          type="button"
          className="fixed bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-slate-400 shadow-xl"
        >
          <Share size={24} />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-6 text-center">
          <h2 className={cn('font-bold text-2xl', getClassBySubname(subname, 'text'))}>
            <StyledName fullname={fullname} />
          </h2>
          <div className="mt-8 mb-12 flex items-center justify-center">
            <QRCode size={180} value={url ?? ''} />
          </div>
          <button
            type="button"
            className="inline-flex items-center bg-slate-400 px-6 py-1.5"
            onClick={async () => await navigator.clipboard.writeText(url)}
          >
            <Copy size={26} className="mr-2" />
            Copy clipboard
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
