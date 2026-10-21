import { useEffect, useState } from 'react'

export function useIsMobile(query = '(max-width: 760px)') {
  const [mobile, setMobile] = useState(() => matchMedia(query).matches)
  useEffect(() => {
    const mq = matchMedia(query)
    const on = () => setMobile(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [query])
  return mobile
}
