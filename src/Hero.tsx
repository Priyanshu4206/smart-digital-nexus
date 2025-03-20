import { Button } from '@/components/ui/button'
import HeroImage from '../assest/hero/hero-image.jpg'
const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-0'>
      {/* Background elements */}
      <div className='absolute inset-0 -z-10 opacity-50'>
        <div className='absolute -top-64 -right-64 bg-blue-100 rounded-full w-96 h-96 blur-3xl'></div>
        <div className='absolute bottom-20 -left-40 bg-blue-100 rounded-full w-80 h-80 blur-3xl'></div>
      </div>

      <div className='container max-w-7xl mx-auto px-6 md:px-10'>
        <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
          <div className='order-2 md:order-1'>
            <span className='inline-block text-sm font-medium tracking-widest px-3 py-1 bg-primary/10 text-primary rounded-full mb-6 opacity-0 animate-fade-in'>
              INNOVATIVE FREELANCE SOLUTIONS
            </span>

            <h1 className='font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance leading-tight mb-6 opacity-0 animate-fade-in-delay-1'>
              Transforming Ideas into
              <br />
              <span className='text-primary'>Digital Excellence</span>
            </h1>

            <p className='text-lg md:text-xl leading-relaxed text-muted-foreground mb-8 max-w-md opacity-0 animate-fade-in-delay-2'>
              Attica is a premium freelancing agency specializing in crafting
              exceptional software and web applications for businesses
              worldwide.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay-3'>
              <Button variant='default' className='rounded-full text-base px-8 py-6' size='lg'>
                Get Started
              </Button>
              <Button
                variant='outline'
                className='rounded-full text-base px-8 py-6'
                size='lg'
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className='relative order-1 md:order-2 opacity-0 animate-fade-in-delay-2'>
            <div className='glass rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-white/80 relative z-10'>
              <img
                src={HeroImage}
                alt='Professional working on software development'
                className='w-full h-full object-cover'
                loading='lazy'
              />
              <div className='absolute inset-0 bg-gradient-to-b from-transparent to-white/10 '></div>
            </div>

            {/* Decorative elements */}
            <div className='absolute -top-3 -left-3 w-20 h-20 border-2 border-primary rounded-lg -z-10 animate-float'></div>
            <div
              className='absolute -bottom-3 -right-3 w-20 h-20 border-2 border-primary rounded-lg -z-10 animate-float'
              style={{ animationDelay: '2s' }}
            ></div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-delay-4">
          <span className="text-sm font-medium text-muted-foreground">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
        </div> */}
      </div>
    </section>
  )
}

export default Hero
