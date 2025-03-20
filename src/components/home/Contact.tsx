import { Button, Button2 } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactDetails = [
    {
      icon: <Mail className='h-6 w-6' />,
      title: 'Email',
      value: 'atticacorporation@gmail.com',
      link: 'mailto:atticacorporation@gmail.com',
    },
    {
      icon: <Phone className='h-6 w-6' />,
      title: 'Phone',
      value: '+91 95190 66002',
      link: 'tel:+919519066002',
    },
    {
      icon: <MapPin className='h-6 w-6' />,
      title: 'Location',
      value: 'New Delhi, India',
      link: 'https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5272527,77.0441743,11z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139298!4d77.2088282!16zL20vMGRsdjA?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D',
    },
  ]

  return (
    <section id='contact' className='py-24 md:py-20 relative overflow-hidden'>
      <div className='absolute right-0 bottom-0 bg-blue-100 rounded-full w-64 h-64 blur-3xl -z-10 opacity-50'></div>

      <div className='container max-w-7xl mx-auto px-6 md:px-10'>
        <div className='grid md:grid-cols-2 gap-12 md:gap-20 items-center'>
          <div>
            <span className='inline-block text-sm font-medium tracking-widest px-3 py-1 bg-primary2/10 text-primary2 rounded-full mb-4'>
              CONTACT US
            </span>

            <h2 className='font-display text-3xl md:text-4xl font-bold mb-6'>
              Let's Start Your Next Project
            </h2>

            <p className='text-muted-foreground mb-8 max-w-md'>
              Ready to transform your idea into reality? Get in touch with our
              team to discuss how we can help your business thrive.
            </p>

            <div className='space-y-6 mb-8'>
              {contactDetails.map((detail, index) => (
                <a
                  key={index}
                  href={detail.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-4 group hover:text-primary2 transition-colors'
                >
                  <div className='bg-primary2/10 p-3 rounded-lg text-primary2 group-hover:bg-primary2 group-hover:text-white transition-colors'>
                    {detail.icon}
                  </div>
                  <div>
                    <h3 className='font-medium'>{detail.title}</h3>
                    <p className='text-muted-foreground group-hover:text-primary2 transition-colors'>
                      {detail.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className='glass rounded-2xl p-8 md:p-10 shadow-lg'>
            {isSubmitted ? (
              <div className='flex flex-col items-center justify-center text-center py-8'>
                <div className='bg-green-100 text-green-600 rounded-full p-4 mb-6'>
                  <CheckCircle2 className='h-12 w-12' />
                </div>
                <h3 className='font-display text-2xl font-bold mb-2'>
                  Message Sent!
                </h3>
                <p className='text-muted-foreground mb-6'>
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <Button
                  variant='outline'
                  className='rounded-full'
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                <h3 className='font-display text-xl font-medium mb-1'>
                  Send us a message
                </h3>
                <p className='text-muted-foreground mb-6'>
                  Share your project details and we'll get back to you within 24
                  hours.
                </p>

                <div className='grid md:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <label htmlFor='name' className='text-sm font-medium'>
                      Name
                    </label>
                    <Input
                      id='name'
                      placeholder='Your name'
                      required
                      className='rounded-lg'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label htmlFor='email' className='text-sm font-medium'>
                      Email
                    </label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='Your email'
                      required
                      className='rounded-lg'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label htmlFor='subject' className='text-sm font-medium'>
                    Subject
                  </label>
                  <Input
                    id='subject'
                    placeholder='How can we help you?'
                    required
                    className='rounded-lg'
                  />
                </div>

                <div className='space-y-2'>
                  <label htmlFor='message' className='text-sm font-medium'>
                    Message
                  </label>
                  <Textarea
                    id='message'
                    placeholder='Project details, questions, etc.'
                    rows={5}
                    required
                    className='rounded-lg resize-none'
                  />
                </div>

                <Button
                  type='submit'
                  className='w-full rounded-full'
                  size='lg'
                >
                  Send Message <ArrowRight className='h-4 w-4 ml-2' />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
