import type { MetaFunction } from '@remix-run/cloudflare'
import HomePage from '~/components/pages/Home'

export const meta: MetaFunction = () => [
  { title: '0xCARD - Onchain profile' },
  { name: 'description', content: 'Onchain profile card for ENS, base.eth, uni.eth' }
]

export default function Index() {
  return <HomePage />
}
