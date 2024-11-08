import { GithubLogo, GlobeSimple, MapPin, TelegramLogo, XLogo } from '@phosphor-icons/react'
import FarcasterLogo from '~/components/icons/Farcaster'

export default function Records({ data }) {
  return (
    <div className="px-1.5 py-6">
      {data?.records?.description && <p className="mb-6 text-sm">{data?.records?.description}</p>}
      <ul className="record-list w-full overflow-auto">
        {data?.records?.location && (
          <li className="nolink">
            <MapPin size={22} className="mr-2" /> {data?.records?.location}
          </li>
        )}
        {data?.records['com.twitter'] && (
          <li>
            <a
              href={`https://x.com/${data?.records['com.twitter']}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:opacity-90"
            >
              <XLogo size={22} className="mr-2" /> {data?.records['com.twitter']}
            </a>
          </li>
        )}
        {data?.records['com.github'] && (
          <li>
            <a
              href={`https://github.com/${data?.records['com.github']}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:opacity-90"
            >
              <GithubLogo size={22} className="mr-2" /> {data?.records['com.github']}
            </a>
          </li>
        )}
        {data?.records['xyz.farcaster'] && (
          <li>
            <a
              href={`https://warpcast.com/${data?.records['xyz.farcaster']}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:opacity-90"
            >
              <FarcasterLogo /> {data?.records['xyz.farcaster']}
            </a>
          </li>
        )}
        {data?.records['org.telegram'] && (
          <li>
            <a
              href={`https://t.me/${data?.records['org.telegram']}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:opacity-90"
            >
              <TelegramLogo size={22} className="mr-2" /> {data?.records['org.telegram']}
            </a>
          </li>
        )}
        {data?.records?.url && (
          <li>
            <a
              href={data?.records?.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:opacity-90"
            >
              <GlobeSimple size={22} className="mr-2" />
              {data?.records?.url.replace(/^https?:\/\//, '')}
            </a>
          </li>
        )}
        {data?.records?.url2 && (
          <li>
            <a
              href={data?.records?.url2}
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:opacity-90"
            >
              <GlobeSimple size={22} className="mr-2" />
              {data?.records?.url2.replace(/^https?:\/\//, '')}
            </a>
          </li>
        )}
        {data?.records?.url3 && (
          <li>
            <a
              href={data?.records?.url3}
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:opacity-90"
            >
              <GlobeSimple size={22} className="mr-2" />
              {data?.records?.url3.replace(/^https?:\/\//, '')}
            </a>
          </li>
        )}
      </ul>
      {data?.records?.keywords && (
        <ul className="pt-6">
          {data?.records?.keywords.split(',').map((keyword: string) => (
            <li
              key={keyword.toLowerCase()}
              className="my-1 mr-2 inline-flex items-center justify-center rounded-xl border-2 border-slate-400 px-3 py-1 text-sm"
            >
              {keyword}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
