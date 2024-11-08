import Card from '~/components/Card'
// import NotFound from '~/components/NotFound'
import Providers from '~/components/Providers'
import Records from '~/components/Records'
import ShareButton from '~/components/ShareButton'

export default function Profile({ data }) {
  return (
    <Providers>
      <div className="container max-w-[420px] p-6">
        <Card fullname={data?.fullname} subname={data?.subname} avatar={data?.records?.avatar} />
        <Records data={data} />
        <ShareButton url={data?.url} fullname={data?.fullname} subname={data?.subname} />
      </div>
    </Providers>
  )
}
