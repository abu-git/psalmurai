import '@/styles/globals.css'
import Script from 'next/script'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

/* Page Loader settings ----------------------------------*/
function Loading(url){
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  //console.log(router)

  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true) 
    const handleComplete = (url = router.pathname) => (url === router.asPath) && setTimeout(() => {setLoading(false)}, 1000)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return loading && (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='h-[100vh] w-[100vw] flex justify-center items-center fixed top-0 left-0 bg-[#000000] z-[9999]'>
      <div className="jelly-triangle">
      <div className="jelly-triangle__dot"></div>
      <div className="jelly-triangle__traveler"></div>
      </div>
      <svg width="0" height="0" className="jelly-maker">
        <defs>
          <filter id="uib-jelly-triangle-ooze">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7.3" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="ooze"></feColorMatrix>
            <feBlend in="SourceGraphic" in2="ooze"></feBlend>
          </filter>
        </defs>
      </svg>
    </motion.div>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
    
  )
}
