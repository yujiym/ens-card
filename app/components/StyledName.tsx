import { parseName } from '~/lib/ens'

export default function StyledName({ fullname }: { fullname: string }) {
  const { id, subname } = parseName(fullname)

  return (
    <span>
      {id}
      <span className="opacity-60">{subname && `.${subname}`}.eth</span>
    </span>
  )
}
