import Avatar from 'boring-avatars'
import StyledName from '~/components/StyledName'
import { cn, getClassBySubname, getImageUrl } from '~/lib/utils'

const RealAvatar = typeof Avatar.default !== 'undefined' ? Avatar.default : Avatar

export default function Card({
  avatar,
  fullname,
  subname
}: { fullname: string; subname: string; avatar: string | undefined }) {
  return (
    <div
      className={cn(
        'flex h-56 flex-col justify-between overflow-hidden rounded-2xl p-6 text-white shadow-xl',
        getClassBySubname(subname),
        getClassBySubname(subname, 'shadow')
      )}
    >
      {avatar ? (
        <img
          src={getImageUrl(avatar)}
          className="h-20 w-20 rounded-full border-2 border-white/20"
          alt={`${fullname}'s avatar`}
        />
      ) : (
        <RealAvatar
          variant="beam"
          name={fullname ?? ''}
          size={80}
          className="rounded-full border-2 border-white/20"
        />
      )}
      <h1 className="px-1 font-bold text-2xl">
        <StyledName fullname={fullname} />
      </h1>
    </div>
  )
}
