import { Code } from '@phosphor-icons/react'
import ImgExampleDark from '~/assets/example-dark.png'
import ImgExampleLight from '~/assets/example-light.png'

export default function Home() {
  return (
    <div className="container max-h-screen max-w-screen-md overflow-y-hidden p-6 text-center">
      <p className="text-[140px]">🪪</p>
      <h1 className="text-center font-black text-5xl leading-snug">
        Onelink style profile card viewer for{' '}
        <a href="https://ens.domains/" target="_blank" rel="noreferrer" className="text-ens">
          ENS
        </a>
        ,{' '}
        <a href="https://www.base.org/names" target="_blank" rel="noreferrer" className="text-basename">
          Basenames
        </a>
        ,{' '}
        <a
          href="https://blog.uniswap.org/introducing-uni-eth-your-unique-web3-username"
          target="_blank"
          rel="noreferrer"
          className="text-uni"
        >
          uni.eth
        </a>
      </h1>
      <a href="https://0x.cards/yujiym.base.eth">
        <div
          className="mx-auto mt-12 block h-screen w-72 overflow-hidden border border-slate-400/20 bg-contain bg-top bg-no-repeat shadow-2xl dark:hidden"
          style={{
            backgroundImage: `url(${ImgExampleLight})`
          }}
        />
        <div
          className="mx-auto mt-12 hidden h-screen w-72 overflow-hidden border border-slate-400/20 bg-contain bg-top bg-no-repeat shadow-2xl dark:block"
          style={{
            backgroundImage: `url(${ImgExampleDark})`
          }}
        />
        <div className="fixed right-0 bottom-6 left-0 flex items-center justify-center">
          <span />
          <a
            href="/yujiym.base.eth"
            className="flex h-8 items-center justify-center rounded-full bg-slate-400/20 px-4 py-1 text-center text-sm"
          >
            yujiym.base.eth 👉
          </a>
        </div>
        <a
          href="https://github.com/yujiym/ens-card"
          target="_blank"
          rel="noreferrer"
          className="fixed top-4 right-4 flex h-8 items-center justify-center rounded-full bg-slate-400/20 px-4 py-1 text-center text-sm"
        >
          <Code size={22} className="mr-1" /> Src
        </a>
      </a>
    </div>
  )
}
