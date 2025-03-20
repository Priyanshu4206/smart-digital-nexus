import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Healthily from '../assets/portfolio/Healthily.jpg'
import EmpathyAi from '../assets/portfolio/empathyAi.png'
import Flex from '../assets/portfolio/flex.png'
import Pai from '../assets/portfolio/pai.png'
import Avinash from '../assets/portfolio/team/Avinash.jpg'
import Himanshu from '../assets/portfolio/team/Himanshu Sharma.png'
import Mitesh from '../assets/portfolio/team/Mitesh Dixit.jpg'
import Priyanshu from '../assets/portfolio/team/Priyanshu.jpg'
import Tanmay from '../assets/portfolio/team/Tanmay.jpg'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import { Button } from '../components/ui/button'
import Card, {
  CardContent,
  CardFooter,
  CardHeader,
} from '../components/ui/card'

const portfolioItems = [
  {
    title: "Flex Business Company's Website",
    desc: 'A static website for a logistics company with contact forms, SEO, and a responsive design for a strong web presence.',
    category: 'Web Development',
    technologies: [
      'ReactJS',
      'Google reCAPTCHA',
      'EmailJS',
      'Figma',
      'SEO Optimization',
      'Responsive Design',
      'Hosting',
      'Domain Purchase',
    ],
    image: Flex,
  },
  {
    title: 'EmpathyAI Chatbot',
    desc: 'A RAG-based mental health chatbot with a sleek UI, supporting dark and light modes, trained on Hugging Face data.',
    category: 'AI & Chatbot',
    technologies: [
      'ReactJS',
      'TypeScript',
      'FastAPI',
      'TailwindCSS (Dark Mode Support)',
      'Hugging Face',
      'Theme Toggle',
    ],
    image: Pai,
  },
  {
    title: "Pai Lab Design Company's Website",
    desc: 'A visually appealing portfolio website for an architecture company with animations, SEO, and a responsive layout.',
    category: 'Web Development',
    technologies: [
      'ReactJS',
      'SEO Optimization',
      'Responsive Design',
      'Framer Motion (Animations)',
    ],
    image: EmpathyAi,
  },
  {
    title: 'Healthily | First Aid Recommendation System',
    desc: 'A React Native app for first aid recommendations with an AI chatbot, offline injury guides, and voice input support.',
    category: 'Mobile Application',
    technologies: [
      'React Native',
      'TypeScript',
      'Expo',
      'Flask',
      'Hugging Face',
      'RAG-based Model',
      'SQLite (Offline Mode)',
      'AI Chatbot',
      'Google Speech-to-Text API',
    ],
    image: Healthily,
  },
]

const teamMembers = [
  {
    name: 'Avinash Dubey',
    role: 'SEO + Fullstack Developer',
    avatar: Avinash,
    bio: 'Avinash combines technical expertise with a deep understanding of SEO strategies, ensuring scalable and high-performing web solutions.',
    social: {
      linkedin: 'https://www.linkedin.com/in/avinash-dubey-45a6211b6/',
    },
  },
  {
    name: 'Priyanshu Agarwal',
    role: 'Full Stack Developer',
    avatar: Priyanshu,
    bio: 'Priyanshu specializes in building robust, end-to-end web applications, with a keen eye for clean code and efficient architecture.',
    social: {
      linkedin: 'https://www.linkedin.com/in/priyanshu-ag4206/',
    },
  },
  {
    name: 'Tanmay Choudhary',
    role: 'Fullstack Developer',
    avatar: Tanmay,
    bio: 'Tanmay is passionate about creating seamless user experiences, blending front-end creativity with powerful back-end logic and building scalable and efficient APIs using Spring Boot, ensuring robust and high-performing applications.',
    social: {
      linkedin: 'https://www.linkedin.com/in/tanmay-choudhary-0246601b4/',
    },
  },
  {
    name: 'Mitesh Dixit',
    role: 'Fullstack Developer',
    avatar: Mitesh,
    bio: 'Mitesh thrives on solving complex problems, delivering innovative solutions with clean and scalable full-stack development.',
    social: {
      linkedin: 'https://www.linkedin.com/in/mitesh-dixit-170907211/',
    },
  },
  {
    name: 'Himanshu Sharma',
    role: 'UI/UX Designer',
    avatar: Himanshu,
    bio: 'Himanshu crafts intuitive and visually stunning designs, ensuring seamless and user-centric digital experiences.',
    social: {
      linkedin: 'https://www.linkedin.com/in/himanshu-sharma08/',
    },
  },
]

const Portfolio = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Our Portfolio - Attica Corporation'
  }, [])

  return (
    <>
      <Navbar />
      <main className='pt-20'>
        {/* Hero Section */}
        <section className='py-20 bg-secondary/30'>
          <div className='relative container mx-auto px-6'>
            <div className='max-w-3xl mx-auto text-center'>
              <span className='inline-block px-3 py-1 rounded-full bg-primary2/10 text-primary2 text-sm font-medium mb-4'>
                Our Work
              </span>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                Featured Projects
              </h1>
              <p className='text-lg text-foreground/80 mb-8'>
                Explore our portfolio of successful projects across web
                development, Android applications, and AI-based solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className='py-20'>
          <div className='container mx-auto px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className='opacity-0 animate-fade-up'
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className='h-full rounded-none flex flex-col'>
                    <div className='relative overflow-hidden'>
                      <img
                        src={item.image}
                        alt={item.title}
                        className='w-full h-48 object-cover transition-transform duration-300'
                        loading='lazy'
                      />
                      <span className='absolute top-4 left-4 px-3 py-1 bg-primary/40 text-primary-foreground border border-border text-xs rounded-full backdrop-blur-md'>
                        {item.category}
                      </span>
                    </div>
                    <CardHeader>
                      {/* Ensures the heading spans at least 2 rows */}
                      <h3 className='text-xl font-semibold mb-2 md:line-clamp-2 md:min-h-[3.5rem]'>
                        {item.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className='text-foreground/80 mb-4 '>{item.desc}</p>
                    </CardContent>
                    <CardFooter className='flex-grow'>
                      <div className='flex flex-wrap gap-2 mb-4'>
                        {item.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className='px-2 py-1 text-xs bg-primary2/10 rounded-full text-primary2'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {/* <Button
      variant='ghost'
      className='w-full justify-between group'
    >
      View Project Details
      <ArrowRight
        size={16}
        className='ml-1 transition-transform duration-200 group-hover:translate-x-1'
      />
    </Button> */}
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className='py-20 bg-secondary/30'>
          <div className='container mx-auto px-6'>
            <div className='max-w-3xl mx-auto text-center mb-16'>
              <span className='inline-block px-3 py-1 rounded-full bg-primary2/10 text-primary2 text-sm font-medium mb-4'>
                Our Team
              </span>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Meet Our Amazing Team
              </h2>
              <p className='text-lg text-foreground/80'>
                Get to know the talented individuals driving success at Attica
                Corporation.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {teamMembers.map((teamMember, index) => (
                <div
                  key={index}
                  className='relative group'
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className='relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105'>
                    {/* Colored overlay for image */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/40 via-black/80 to-transparent z-10 transition-opacity duration-500 ${
                        hoveredMember === index ? 'opacity-100' : 'opacity-70'
                      }`}
                    ></div>

                    {/* Member image */}
                    <img
                      src={teamMember.avatar}
                      alt={teamMember.name}
                      className='w-full aspect-square object-cover'
                    />

                    {/* Content overlay */}
                    <div className='absolute inset-0 flex flex-col justify-end p-6 z-20'>
                      <div className='transform transition-all duration-500 group-hover:translate-y-0'>
                        <h3 className='text-2xl font-bold text-white mb-1'>
                          {teamMember.name}
                        </h3>
                        <div className='w-12 h-0.5 bg-primary2 mb-3'></div>
                        <p className='text-white font-medium mb-3'>
                          {teamMember.role}
                        </p>

                        {/* Bio text - only visible on hover */}
                        <p
                          className={`text-gray-300 text-sm mb-4 transition-all duration-500 ${
                            hoveredMember === index
                              ? 'opacity-100 max-h-32'
                              : 'opacity-0 max-h-0 overflow-hidden'
                          }`}
                        >
                          {teamMember.bio}
                        </p>

                        {/* Social links */}
                        <div
                          className={`flex space-x-3 transition-all duration-500 ${
                            hoveredMember === index
                              ? 'opacity-100'
                              : 'opacity-0'
                          }`}
                        >
                          {teamMember.social?.linkedin && (
                            <a
                              target='_blank'
                              href={teamMember.social.linkedin}
                              className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-indigo-500 transition-colors'
                            >
                              <svg
                                className='w-4 h-4 text-white'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                              >
                                <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20'>
          <div className='container mx-auto px-6'>
            <div className='max-w-3xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Ready to Start Your Project?
              </h2>
              <p className='text-lg text-foreground/80 mb-8'>
                Let's discuss how we can help bring your vision to life. Our
                team is ready to create a solution tailored to your specific
                needs.
              </p>
              <Button variant='default' size='lg'>
                <Link to='/contact'>Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Portfolio
