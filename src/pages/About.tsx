
import { useEffect } from 'react';
import { Clock, CloudComputing, LucideIcon, Target, Code, Smartphone, Brain } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';

interface ValueProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Value: React.FC<ValueProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
        <Icon size={24} className="text-accent" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </div>
  );
};

const upcomingProducts = [
  {
    icon: <CloudComputing size={40} className="text-accent" />,
    title: 'Backup Maker Service',
    description: 'A secure, automated backup solution for businesses of all sizes. Keep your data safe with scheduled backups, encryption, and easy restoration.',
    status: 'In Development'
  },
  {
    icon: <Code size={40} className="text-accent" />,
    title: 'Loop - Social Media Platform',
    description: 'A next-generation social media platform focused on privacy and meaningful connections. Share moments with people who matter.',
    status: 'Coming Soon'
  },
  {
    icon: <Smartphone size={40} className="text-accent" />,
    title: 'Enterprise Business Management',
    description: 'All-in-one business management software for enterprise-level operations. Modules include HR, Finance, Inventory, and Customer Relations.',
    status: 'Planning Phase'
  }
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - Attica Corporations";
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  About Attica
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Our Story & Vision
                </h1>
                <p className="text-lg text-foreground/80 mb-6">
                  Attica Corporations was founded with a clear mission: to build smart digital solutions that empower businesses to thrive in the digital age. We began as a small team of passionate developers and have grown into a versatile technology partner for clients worldwide.
                </p>
                <p className="text-lg text-foreground/80 mb-8">
                  Our approach combines technical expertise with a deep understanding of business needs, resulting in digital solutions that not only work flawlessly but also drive real business value.
                </p>
                <Button to="/contact" variant="primary">
                  Connect With Us
                </Button>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
                  <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" 
                      alt="Attica Team" 
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Drives Us
              </h2>
              <p className="text-lg text-foreground/80">
                At the core of Attica Corporations are values that guide every decision we make and every project we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="opacity-0 animate-fade-up">
                <Value 
                  icon={Clock}
                  title="Timeliness"
                  description="We respect deadlines and deliver projects on time, every time. Your time is valuable, and we honor that."
                />
              </div>
              <div className="opacity-0 animate-fade-up animation-delay-300">
                <Value 
                  icon={Brain}
                  title="Innovation"
                  description="We stay ahead of technological trends to bring innovative solutions that give our clients a competitive edge."
                />
              </div>
              <div className="opacity-0 animate-fade-up animation-delay-600">
                <Value 
                  icon={Target}
                  title="Quality Focus"
                  description="We don't just build solutions; we craft experiences. Quality is non-negotiable in everything we create."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Products */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Future Innovations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Upcoming Products
              </h2>
              <p className="text-lg text-foreground/80">
                Beyond our freelance services, we're working on innovative products that will transform how businesses operate in the digital space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingProducts.map((product, index) => (
                <div 
                  key={index} 
                  className="opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Card hoverable>
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4">
                          {product.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                        <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                          {product.status}
                        </span>
                        <p className="text-foreground/80">{product.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section - Placeholder */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Attica
              </h2>
              <p className="text-lg text-foreground/80">
                With years of experience and a passion for excellence, our team brings a unique combination of skills to every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="opacity-0 animate-fade-up">
                <Card>
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Code size={28} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Web Expertise</h3>
                    <p className="text-foreground/80">Our web development team creates responsive, user-friendly websites and applications that meet modern standards and expectations.</p>
                  </CardContent>
                </Card>
              </div>
              <div className="opacity-0 animate-fade-up animation-delay-300">
                <Card>
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Smartphone size={28} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Android Specialists</h3>
                    <p className="text-foreground/80">With deep knowledge of Android development, we build mobile applications that provide seamless experiences across devices.</p>
                  </CardContent>
                </Card>
              </div>
              <div className="opacity-0 animate-fade-up animation-delay-600">
                <Card>
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Brain size={28} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AI Innovators</h3>
                    <p className="text-foreground/80">Our AI team leverages cutting-edge technologies to create intelligent solutions that automate processes and provide valuable insights.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Whether you need a custom web application, an Android app, or an AI solution, we're here to help turn your vision into reality.
              </p>
              <Button to="/contact" variant="primary" size="lg">
                Start a Project
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
