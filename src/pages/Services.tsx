
import { useEffect } from 'react';
import { Code, Smartphone, Brain, Server, Monitor, Database } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card, { CardHeader, CardContent } from '../components/ui/Card';

const servicesData = [
  {
    id: 'web',
    icon: <Code size={40} className="text-accent" />,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with the latest technologies.',
    features: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'CMS Integration',
      'API Development',
      'Website Maintenance & Support'
    ],
    tools: 'React, Angular, Vue, Node.js, PHP, Laravel, WordPress'
  },
  {
    id: 'android',
    icon: <Smartphone size={40} className="text-accent" />,
    title: 'Android Development',
    description: 'Native and cross-platform mobile applications designed for performance and user experience.',
    features: [
      'Native Android App Development',
      'Cross-platform Development',
      'UI/UX Design for Mobile',
      'App Testing & Quality Assurance',
      'App Store Optimization',
      'Maintenance & Updates'
    ],
    tools: 'Kotlin, Java, Flutter, React Native, Firebase'
  },
  {
    id: 'ai',
    icon: <Brain size={40} className="text-accent" />,
    title: 'AI-based Projects',
    description: 'Leverage the power of artificial intelligence for your business with custom AI solutions.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'Chatbots & Virtual Assistants',
      'AI Integration Services'
    ],
    tools: 'TensorFlow, PyTorch, Scikit-learn, OpenAI APIs, IBM Watson'
  },
  {
    id: 'backend',
    icon: <Server size={40} className="text-accent" />,
    title: 'Backend Development',
    description: 'Robust and scalable backend systems to power your applications with confidence.',
    features: [
      'API Development',
      'Database Design',
      'Cloud Integration',
      'Microservices Architecture',
      'Authentication & Authorization',
      'Performance Optimization'
    ],
    tools: 'Node.js, Python, Java, MongoDB, PostgreSQL, AWS, Google Cloud'
  },
  {
    id: 'ui',
    icon: <Monitor size={40} className="text-accent" />,
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces that enhance user experience and satisfaction.',
    features: [
      'User Interface Design',
      'User Experience Research',
      'Wireframing & Prototyping',
      'Design Systems',
      'Responsive Design',
      'Usability Testing'
    ],
    tools: 'Figma, Adobe XD, Sketch, InVision, Zeplin'
  },
  {
    id: 'database',
    icon: <Database size={40} className="text-accent" />,
    title: 'Database Solutions',
    description: 'Efficient database design and management to store and retrieve your data securely.',
    features: [
      'Database Architecture',
      'Data Modeling',
      'SQL & NoSQL Solutions',
      'Database Migration',
      'Performance Optimization',
      'Data Security'
    ],
    tools: 'MySQL, PostgreSQL, MongoDB, Firebase, Redis, ElasticSearch'
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services - Attica Corporations";
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
                Our Expertise
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Services We Offer
              </h1>
              <p className="text-lg text-foreground/80 mb-8">
                We provide comprehensive digital solutions tailored to meet your business needs. Our expert team delivers high-quality services across web, mobile, and AI development.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <div 
                  id={service.id}
                  key={service.id} 
                  className="opacity-0 animate-fade-up scroll-mt-24"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card hoverable className="h-full">
                    <CardHeader>
                      <div className="mb-4">{service.icon}</div>
                      <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                      <p className="text-foreground/80 mb-6">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-lg font-medium mb-3">Key Features:</h3>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-accent">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <h3 className="text-lg font-medium mb-3">Technologies:</h3>
                      <p className="text-foreground/80 mb-6">{service.tools}</p>
                      <Button to="/contact" variant="primary" className="w-full">
                        Request {service.title}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                We understand that every business has unique requirements. Contact us to discuss your specific needs and how we can help you achieve your goals.
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

export default Services;
