import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className='py-24'>
      <div className='container mx-auto px-6 max-sm:px-4'>
        <div className='relative overflow-hidden rounded-3xl bg-primary p-12 lg:p-20 max-sm:px-6'>
          {/* Background Elements */}
          <div className='absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl -translate-y-1/2 translate-x-1/2'></div>
          <div className='absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl translate-y-1/2 -translate-x-1/2'></div>

          <div className='relative z-10 text-center max-w-3xl mx-auto'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
              Ready to Transform Your Digital Presence?
            </h2>
            <p className='text-lg text-primary-foreground/80 mb-10 text-balance'>
              Let's discuss how Attica Corporation can help you achieve your
              goals. Whether you need a new website, mobile app, or AI solution,
              we're here to help.
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              <Button
                size='lg'
                className='bg-white text-primary hover:bg-white/90'
              >
                <Link to='/contact'>Get Started Today</Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='border-white/30 text-black hover:bg-black/10'
              >
                <Link to='/portfolio'>View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
