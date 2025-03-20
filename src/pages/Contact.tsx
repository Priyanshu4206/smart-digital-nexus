import { useToast } from '@/hooks/use-toast'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useEffect, useState } from 'react'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import { Button } from '../components/ui/button'
import Card, { CardContent } from '../components/ui/card'

const contactInfo = [
  {
    icon: <Mail className='h-6 w-6' />,
    title: 'Email',
    details: 'atticacorporation@gmail.com',
    link: 'mailto:atticacorporation@gmail.com',
  },
  {
    icon: <Phone className='h-6 w-6' />,
    title: 'Phone',
    details: '+91 95190 66002',
    link: 'tel:+919519066002',
  },
  {
    icon: <MapPin className='h-6 w-6' />,
    title: 'Location',
    details: 'New Delhi, India',
    link: 'https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5272527,77.0441743,11z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139298!4d77.2088282!16zL20vMGRsdjA?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D',
  },
]

const projectTypes = [
  'Web Development',
  'Android Development',
  'AI Project',
  'UI/UX Design',
  'Consulting',
  'Other',
]

const Contact = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact Us - Attica Corporation'
  }, [])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent',
        description: "Thank you for contacting us. We'll get back to you soon!",
        duration: 5000,
      })

      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: '',
      })

      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <>
      <Navbar />
      <main className='pt-20'>
        {/* Hero Section */}
        <section className='py-20 bg-secondary/30'>
          <div className='container mx-auto px-6'>
            <div className='max-w-3xl mx-auto text-center'>
              <span className='inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4'>
                Get In Touch
              </span>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                Contact Us
              </h1>
              <p className='text-lg text-foreground/80 mb-8'>
                Have a project in mind or want to learn more about our services?
                We'd love to hear from you. Reach out and let's start a
                conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className='py-12'>
          <div className='container mx-auto px-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='opacity-0 animate-fade-up'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card hoverable className='h-full'>
                    <CardContent className='p-6 flex flex-col items-center text-center'>
                      <div className='w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4'>
                        {item.icon}
                      </div>
                      <h3 className='text-lg font-semibold mb-1'>
                        {item.title}
                      </h3>
                      <p className='text-foreground/80'>{item.details}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className='py-12'>
          <div className='container mx-auto px-6'>
            <div className='max-w-3xl mx-auto'>
              <div className='bg-white rounded-2xl shadow-lg border border-border overflow-hidden'>
                <div className='p-8'>
                  <h2 className='text-2xl font-semibold mb-6'>
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                      <div>
                        <label
                          htmlFor='name'
                          className='block text-sm font-medium text-foreground/70 mb-2'
                        >
                          Your Name
                        </label>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          value={formData.name}
                          onChange={handleChange}
                          className='w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent/50'
                          placeholder='John Smith'
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-foreground/70 mb-2'
                        >
                          Email Address
                        </label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          className='w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent/50'
                          placeholder='john@example.com'
                          required
                        />
                      </div>
                    </div>

                    <div className='mb-6'>
                      <label
                        htmlFor='projectType'
                        className='block text-sm font-medium text-foreground/70 mb-2'
                      >
                        Project Type
                      </label>
                      <select
                        id='projectType'
                        name='projectType'
                        value={formData.projectType}
                        onChange={handleChange}
                        className='w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent/50'
                        required
                      >
                        <option value='' disabled>
                          Select a project type
                        </option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className='mb-6'>
                      <label
                        htmlFor='message'
                        className='block text-sm font-medium text-foreground/70 mb-2'
                      >
                        Message
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className='w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent/50'
                        placeholder='Tell us about your project or inquiry...'
                        required
                      ></textarea>
                    </div>

                    <Button
                      type='submit'
                      variant='default'
                      className='w-full md:w-auto px-8'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className='animate-pulse'>Sending...</span>
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} className='ml-1' />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className='py-20'>
          <div className='container mx-auto px-6'>
            <div className='rounded-2xl overflow-hidden border border-border shadow-lg'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224132.70098768524!2d77.04417429999999!3d28.6139298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1710924308572!5m2!1sen!2sin'
                width='100%'
                height='450'
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy='no-referrer-when-downgrade'
                title='Office Location'
                onLoad={() => {
                  if (!('loading' in HTMLIFrameElement.prototype)) {
                    const iframe = document.querySelector('iframe')
                    if (iframe) {
                      iframe.src = iframe.dataset.src || iframe.src
                    }
                  }
                }}
                data-src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224132.70098768524!2d77.04417429999999!3d28.6139298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1710924308572!5m2!1sen!2sin'
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-20 bg-secondary/30'>
          <div className='container mx-auto px-6'>
            <div className='max-w-3xl mx-auto text-center mb-16'>
              <span className='inline-block px-3 py-1 rounded-full bg-primary2/10 text-primary2 text-sm font-medium mb-4'>
                FAQ
              </span>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Frequently Asked Questions
              </h2>
              <p className='text-lg text-foreground/80'>
                Have questions? We've got answers. If you don't see what you're
                looking for, feel free to reach out.
              </p>
            </div>

            <div className='max-w-3xl mx-auto space-y-6'>
              <Card>
                <CardContent className='p-6'>
                  <h3 className='text-lg font-semibold mb-2'>
                    What is your typical project timeline?
                  </h3>
                  <p className='text-foreground/80'>
                    Project timelines vary based on complexity and scope. A
                    simple website might take 2-4 weeks, while a complex
                    application could take 2-6 months. We'll provide a detailed
                    timeline during our initial consultation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h3 className='text-lg font-semibold mb-2'>
                    How much does a typical project cost?
                  </h3>
                  <p className='text-foreground/80'>
                    Each project is unique, and pricing depends on requirements,
                    complexity, and timeline. We offer competitive rates and
                    flexible pricing models including fixed-price, hourly, and
                    retainer options. Contact us for a custom quote.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h3 className='text-lg font-semibold mb-2'>
                    Do you provide ongoing support after project completion?
                  </h3>
                  <p className='text-foreground/80'>
                    Yes, we offer various maintenance and support packages to
                    keep your digital solutions running smoothly. Our support
                    includes bug fixes, security updates, performance
                    optimization, and feature enhancements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h3 className='text-lg font-semibold mb-2'>
                    What is your development process?
                  </h3>
                  <p className='text-foreground/80'>
                    We follow an agile development methodology with regular
                    client check-ins. Our process typically includes discovery,
                    planning, design, development, testing, deployment, and
                    post-launch support phases.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Contact
