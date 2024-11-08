import { type Address } from 'viem'
import L2ResolverAbi from '~/abis/L2ResolverAbi'

export const parseName = (ensName: string | undefined): { id: string; subname: string } => {
  if (!ensName) return { id: '', subname: '' }
  const parts = ensName.split('.')
  const id = parts[0]
  const subname = parts.length > 2 ? parts[1] : ''
  return { id, subname }
}

export const getBasename = async (address: Address) => {
  try {
    const addressReverseNode = convertReverseNodeToBytes(address, base.id)
    const basename = await baseClient.readContract({
      abi: L2ResolverAbi,
      address: BASENAME_L2_RESOLVER_ADDRESS,
      functionName: 'name',
      args: [addressReverseNode]
    })
    if (basename) {
      return basename as BaseName
    }
  } catch (error) {
    // Handle the error accordingly
    console.error('Error resolving Basename:', error)
  }
}
