
export const parseUrl = (url: string) => {
  if (!url) return {}

  const searchUrl: string = url.indexOf('?') ? url.match(/.+\?(.+)/)![1] : url
  const searchParams = searchUrl.split('&')

  const result: Record<string, string | string[]> = {}

  searchParams.forEach(item => {
    const [key, value] = item.split('=') as [string, string]

    if (item.indexOf('=') === -1) {
      result[key] = ''
    } else {
      const decodedValue = decodeURIComponent(value)
      result[key] = result[key] === undefined ? decodedValue : [...result[key], decodedValue]
    }
  })

  return result
}