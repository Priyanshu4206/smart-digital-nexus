
import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { useToast } from "@/hooks/use-toast";
import Card, { CardContent } from '../components/ui/Card';

const contactInfo = [
  {
    icon: <Mail size={24} className="text-accent" />,
    title: 'Email',
    details: 'info@attica-corp.com',
    link: 'mailto:info@attica-corp.com'
  },
  {
    icon: <Phone size={24} className="text-accent" />,
    title: 'Phone',
    details: '+1 (234) 567-8900',
    link: 'tel:+12345678900'
  },
  {
    icon: <MapPin size={24} className="text-accent" />,
    title: 'Office',
    details: '123 Innovation Dr, Tech City, TC 10101',
    link: 'https://maps.google.com'
  }
];

const projectTypes = [
  'Web Development',
  'Android Development',
  'AI Project',
  'UI/UX Design',
  'Consulting',
  'Other'
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us - Attica Corporations";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-foreground/80 mb-8">
                Have a project in mind or want to learn more about our services? We'd love to hear from you. Reach out and let's start a conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link}
                  className="opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card hoverable className="h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-foreground/80">{item.details}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="projectType" className="block text-sm font-medium text-foreground/70 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
                        required
                      >
                        <option value="" disabled>Select a project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
                        placeholder="Tell us about your project or inquiry..."
                        required
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="primary"
                      className="w-full md:w-auto px-8"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-pulse">Sending...</span>
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} className="ml-1" />
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
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798864718!2d-74.25986673512958!3d40.69767006766623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1655280836743!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-foreground/80">
                Have questions? We've got answers. If you don't see what you're looking for, feel free to reach out.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">What is your typical project timeline?</h3>
                  <p className="text-foreground/80">
                    Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex application could take 2-6 months. We'll provide a detailed timeline during our initial consultation.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">How much does a typical project cost?</h3>
                  <p className="text-foreground/80">
                    Each project is unique, and pricing depends on requirements, complexity, and timeline. We offer competitive rates and flexible pricing models including fixed-price, hourly, and retainer options. Contact us for a custom quote.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Do you provide ongoing support after project completion?</h3>
                  <p className="text-foreground/80">
                    Yes, we offer various maintenance and support packages to keep your digital solutions running smoothly. Our support includes bug fixes, security updates, performance optimization, and feature enhancements.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">What is your development process?</h3>
                  <p className="text-foreground/80">
                    We follow an agile development methodology with regular client check-ins. Our process typically includes discovery, planning, design, development, testing, deployment, and post-launch support phases.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
