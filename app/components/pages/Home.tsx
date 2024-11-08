export default function Home() {
  return (
    <div className="container max-w-screen-md p-6 text-center">
      <p className="mt-12 text-[140px]">🪪</p>
      <h1 className="text-center font-black text-5xl leading-snug">
        Onelink style profile card viewer for{' '}
        <a href="https://ens.domains/" target="_blank" rel="noreferrer" className="text-ens">
          ENS
        </a>
        ,{' '}
        <a href="https://www.base.org/names" target="_blank" rel="noreferrer" className="text-basename">
          base.eth
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
    </div>
  )
}
