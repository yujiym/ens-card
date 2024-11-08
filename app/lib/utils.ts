import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const getClassBySubname = (subname: string, prefix = 'bg') => {
  if (subname === 'base') {
    return `${prefix}-basename${prefix === 'shadow' ? '/20' : ''}`
  }
  if (subname === 'uni') {
    return `${prefix}-uni${prefix === 'shadow' ? '/20' : ''}`
  }
  return `${prefix}-ens${prefix === 'shadow' ? '/20' : ''}`
}

export const getImageUrl = (url: string | undefined) => {
  if (!url) return ''
  return url.startsWith('ipfs://') ? url.replace('ipfs://', 'https://ipfs.io/ipfs/') : url
}
