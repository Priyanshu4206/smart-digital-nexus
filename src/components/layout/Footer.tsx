import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-primary text-primary-foreground'>
      <div className='container mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Company Info */}
          <div className='space-y-4'>
            <Link to='/' className='flex items-center'>
              <h2 className='text-2xl font-semibold'>
                Attica Co<span className='text-accent'>.</span>
              </h2>
            </Link>
            <p className='text-primary-foreground/80 max-w-xs'>
              Building Smart Digital Solutions – Web, Android & AI Services
            </p>
            <div className='flex space-x-4 pt-2'>
              <a
                href='#'
                className='text-primary-foreground/70 hover:text-accent transition-colors'
                aria-label='Facebook'
              >
                <Facebook size={20} />
              </a>
              <a
                href='#'
                className='text-primary-foreground/70 hover:text-accent transition-colors'
                aria-label='Twitter'
              >
                <Twitter size={20} />
              </a>
              <a
                href='#'
                className='text-primary-foreground/70 hover:text-accent transition-colors'
                aria-label='Instagram'
              >
                <Instagram size={20} />
              </a>
              <a
                href='#'
                className='text-primary-foreground/70 hover:text-accent transition-colors'
                aria-label='LinkedIn'
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-medium mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/'
                  className='text-primary-foreground/70 hover:text-accent transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-primary-foreground/70 hover:text-accent transition-colors'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/portfolio'
                  className='text-primary-foreground/70 hover:text-accent transition-colors'
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-primary-foreground/70 hover:text-accent transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-primary-foreground/70 hover:text-accent transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-medium mb-4'>Services</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/services'
                  className='text-primary-foreground/70 hover:text-accent transition-colors'
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-primary-foreground/70 hover:text-accent transition-colors'
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-primary-foreground/70 hover:text-accent transition-colors'
                >
                  AI-based Projects
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-primary-foreground/70 hover:text-accent transition-colors'
                >
                  Android Development
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-primary-foreground/70 hover:text-accent transition-colors'
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-primary-foreground/70 hover:text-accent transition-colors'
                >
                  Database Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-lg font-medium mb-4'>Contact Us</h3>
            <ul className='space-y-3'>
              <li className='flex items-center'>
                <Mail size={18} className='mr-2 text-accent' />
                <a
                  href='mailto:atticacorporation@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary-foreground/70 hover:text-accent transition-colors'
                >
                  atticacorporation@gmail.com
                </a>
              </li>
              <li className='flex items-center'>
                <Phone size={18} className='mr-2 text-accent' />
                <a
                  href='tel:+919519066002'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary-foreground/70 hover:text-accent transition-colors'
                >
                  +91 95190 66002
                </a>
              </li>
              <li className='flex items-center'>
                <MapPin size={18} className='mr-2 text-accent' />
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5272527,77.0441743,11z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139298!4d77.2088282!16zL20vMGRsdjA?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D'
                  className='text-primary-foreground/70 hover:text-accent transition-colors'
                >
                  New Delhi, India
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-primary-foreground/70 text-sm'>
          <p>&copy; 2025 Attica Corporation (All rights reserved)</p>
          <div className='mt-4 md:mt-0 flex space-x-6'>
            <Link
              to='/coming-soon'
              className='hover:text-accent transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              to='/coming-soon'
              className='hover:text-accent transition-colors'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
