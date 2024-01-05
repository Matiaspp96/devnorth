import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useRouteChanged = (fn: () => void) => {
  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     fn()
  //     console.log('App is changing to: ', url)
  //   }



  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events, fn])
}

export default useRouteChanged
