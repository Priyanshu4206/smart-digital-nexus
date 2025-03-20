import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    )
  }, [location.pathname])

  return (
    <div className='relative min-h-screen flex justify-center items-center overflow-hidden pt-24 md:pt-0'>
      <div className='absolute inset-0 -z-10 opacity-50'>
        <div className='absolute -top-64 -right-64 bg-blue-100 rounded-full w-96 h-96 blur-3xl'></div>
        <div className='absolute bottom-20 -left-40 bg-blue-100 rounded-full w-80 h-80 blur-3xl'></div>
      </div>
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>Coming Soon</h1>
        <a href='/' className='text-blue-500 hover:text-blue-700 underline'>
          Return to Home
        </a>
      </div>
    </div>
  )
}

export default NotFound
