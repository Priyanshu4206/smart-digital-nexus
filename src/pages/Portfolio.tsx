
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card, { CardHeader, CardContent, CardFooter } from '../components/ui/Card';

const portfolioItems = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80',
    description: 'A fully responsive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, cart management, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe']
  },
  {
    title: 'Fitness Tracking App',
    category: 'Android Development',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80',
    description: 'A feature-rich fitness application for Android that allows users to track workouts, set goals, monitor progress, and share achievements with friends.',
    technologies: ['Kotlin', 'Firebase', 'Room Database', 'Android Jetpack']
  },
  {
    title: 'AI Customer Support Bot',
    category: 'AI Projects',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    description: 'An intelligent chatbot that uses natural language processing to understand customer queries and provide relevant responses, significantly reducing response time.',
    technologies: ['Python', 'TensorFlow', 'NLP', 'DialogFlow', 'Firebase']
  },
  {
    title: 'Real Estate Marketplace',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    description: 'A comprehensive real estate platform that connects buyers, sellers, and agents. Features include property listings, search filters, virtual tours, and agent profiles.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API']
  },
  {
    title: 'Inventory Management System',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80',
    description: 'A robust inventory management system for a retail chain with multiple stores. The system tracks stock levels, sales, and generates detailed reports.',
    technologies: ['React', 'Express', 'PostgreSQL', 'Chart.js']
  },
  {
    title: 'Language Learning App',
    category: 'Android Development',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80',
    description: 'An interactive language learning application that uses gamification to make learning engaging. Features include lessons, quizzes, and a progress tracking system.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Speech API']
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Attica Corporations delivered our web platform on time and exceeded our expectations. Their attention to detail and commitment to quality is impressive.',
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    name: 'Michael Chen',
    role: 'CTO, GreenLeaf Solutions',
    content: 'The AI solution developed by Attica has transformed our customer service operations. Response times are down by 60% and customer satisfaction is at an all-time high.',
    avatar: 'https://i.pravatar.cc/150?img=69'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, FitLife',
    content: 'Working with Attica on our Android app was a fantastic experience. They understood our vision and delivered a product that our users love.',
    avatar: 'https://i.pravatar.cc/150?img=48'
  }
];

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Portfolio - Attica Corporations";
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Work
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Featured Projects
              </h1>
              <p className="text-lg text-foreground/80 mb-8">
                Explore our portfolio of successful projects across web development, Android applications, and AI-based solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <div 
                  key={index} 
                  className="opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card hoverable className="h-full">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-primary/80 text-primary-foreground text-xs rounded-full backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                    <CardHeader>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 text-xs bg-secondary rounded-full text-foreground/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="w-full justify-between group">
                        View Project Details
                        <ArrowRight
                          size={16}
                          className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Client Feedback
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Our Clients Say
              </h2>
              <p className="text-lg text-foreground/80">
                Don't just take our word for it. Here's what our clients have to say about working with Attica Corporations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-foreground/70">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-foreground/80 italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Let's discuss how we can help bring your vision to life. Our team is ready to create a solution tailored to your specific needs.
              </p>
              <Button to="/contact" variant="primary" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
