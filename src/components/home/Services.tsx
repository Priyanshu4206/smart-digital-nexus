import {
  ArrowRight,
  Brain,
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Card, { CardContent, CardFooter, CardHeader } from '../ui/card'

const services = [
  {
    icon: <Code size={40} className='text-primary2' />,
    title: 'Software Development',
    description:
      'Custom software solutions built with cutting-edge technologies to solve complex business challenges.',
    delay: 'animate-fade-in-delay-1',
    link: '/services#software',
  },
  {
    icon: <Globe size={40} className='text-primary2' />,
    title: 'Web Development',
    description:
      'Modern, responsive websites and web applications built with the latest technologies. From simple landing pages to complex enterprise platforms.',
    link: '/services#web',
  },
  {
    icon: <Brain size={40} className='text-primary2' />,
    title: 'AI-based Projects',
    description:
      'Leverage the power of artificial intelligence for your business. We develop custom AI solutions that provide real value and insights.',
    link: '/services#ai',
  },
  {
    icon: <Smartphone size={40} className='text-primary2' />,
    title: 'Android Development',
    description:
      'Native and cross-platform mobile applications designed for performance and user experience. We build apps that users love to engage with.',
    link: '/services#android',
  },
  {
    icon: <Server size={40} className='text-primary2' />,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and serverless applications for optimal performance.',
    delay: 'animate-fade-in-delay-2',
    link: '/services#cloud',
  },
  {
    icon: <Database size={40} className='text-primary2' />,
    title: 'Database Design',
    description:
      'Optimized database architectures for efficient data storage, retrieval, and management.',
    delay: 'animate-fade-in-delay-1',
    link: '/services#database',
  },
]

const Services = () => {
  return (
    <section className='py-24'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16 max-w-2xl mx-auto'>
          <span className='inline-block px-3 py-1 rounded-full bg-primary2/10 text-primary2 text-sm font-medium mb-4'>
            OUR SERVICES
          </span>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>What We Offer</h2>
          <p className='text-foreground/80 text-balance'>
            We provide a range of specialized services to help businesses thrive
            in the digital landscape. Our expertise spans across web, mobile,
            and artificial intelligence.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='opacity-0 animate-fade-up group'
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card hoverable className='h-full flex flex-col'>
                <CardHeader>
                  <div className='mb-4'>{service.icon}</div>
                  <h3 className='text-xl font-semibold mb-2'>
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-foreground/80'>{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    to={service.link}
                    className='group inline-flex items-center text-accent font-medium'
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className='ml-1 transition-transform duration-200 group-hover:translate-x-1'
                    />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Link
            to='/services'
            className='inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors'
          >
            View All Services
            <ArrowRight size={16} className='ml-1' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
