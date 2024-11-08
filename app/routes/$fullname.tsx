import { type LoaderFunction, type MetaFunction, json } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import Providers from '~/components/Providers'
import ProfilePage from '~/components/pages/Profile'
import { type Basename, getBasenameTextRecord, getBasenameTextRecords } from '~/lib/basename'
import { parseName } from '~/lib/ens'

export const meta: MetaFunction = ({ params }) => [
  { title: params?.fullname ? `${params.fullname} on 0xCARD` : 'Profile on 0xCARD' }
]

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url)
  const { id, subname } = parseName(params?.fullname)

  let records = {}

  if (subname === 'base') {
    const basename = params.fullname as Basename
    const location = await getBasenameTextRecord(basename, 'location')
    const url2 = await getBasenameTextRecord(basename, 'url2')
    const url3 = await getBasenameTextRecord(basename, 'url3')
    const textRecords = await getBasenameTextRecords(basename)
    records = {
      ...textRecords,
      location,
      url2,
      url3
    }
  }

  return json({ url, fullname: params?.fullname, id, subname, records })
}

export default function Profile() {
  const data = useLoaderData()
  console.log('----data', data)

  return (
    <Providers>
      <ProfilePage data={data} />
    </Providers>
  )
}
