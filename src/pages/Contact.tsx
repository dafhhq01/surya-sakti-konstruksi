import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { toast } = useToast();
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        infoRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Message Sent',
      description: 'Thank you for reaching out. We\'ll be in touch within two business days.',
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 234-5678',
      href: 'tel:+15552345678',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@akbaliconstruction.com',
      href: 'mailto:hello@akbaliconstruction.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '1234 Design District\nBali, CA 94102',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Monday - Friday: 8am - 6pm\nSaturday: By appointment',
      href: '#',
    },
  ];

  return (
    <div className="bg-[#F6F7F9] min-h-screen">
      {/* Header */}
      <div ref={headerRef} className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="micro-label text-[#6D6D6D] mb-4 block">GET IN TOUCH</span>
          <h1 className="heading-lg text-[clamp(38px,5vw,72px)] text-[#111] mb-4">
            START YOUR PROJECT
          </h1>
          <p className="text-[#6D6D6D] max-w-2xl text-lg">
            Tell us what you're building. We'll respond within two business days
            to schedule a consultation.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div ref={formRef} className="lg:col-span-3">
              <div className="bg-white p-8 lg:p-12 border border-[#111]/10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[#B28AF0]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-[#B28AF0]" />
                    </div>
                    <h2 className="font-['Montserrat'] font-bold text-2xl text-[#111] mb-4">
                      Thank You!
                    </h2>
                    <p className="text-[#6D6D6D] mb-6">
                      Your message has been sent successfully. We'll be in touch
                      within two business days.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          projectType: '',
                          message: '',
                        });
                      }}
                      className="btn-ghost"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-['Montserrat'] font-semibold text-xl text-[#111] mb-6">
                      Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-[#111]">
                            Name *
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="Your full name"
                            required
                            className="border-[#111]/20 focus:border-[#B28AF0] focus:ring-[#B28AF0]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-[#111]">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="border-[#111]/20 focus:border-[#B28AF0] focus:ring-[#B28AF0]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-[#111]">
                            Phone
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="(555) 123-4567"
                            className="border-[#111]/20 focus:border-[#B28AF0] focus:ring-[#B28AF0]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="projectType" className="text-[#111]">
                            Project Type
                          </Label>
                          <Select
                            value={formData.projectType}
                            onValueChange={(value) => handleChange('projectType', value)}
                          >
                            <SelectTrigger className="border-[#111]/20 focus:border-[#B28AF0] focus:ring-[#B28AF0]">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new-construction">New Construction</SelectItem>
                              <SelectItem value="renovation">Renovation</SelectItem>
                              <SelectItem value="kitchen">Kitchen</SelectItem>
                              <SelectItem value="bathroom">Bathroom</SelectItem>
                              <SelectItem value="addition">Room Addition</SelectItem>
                              <SelectItem value="outdoor">Outdoor Living</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-[#111]">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                          required
                          rows={6}
                          className="border-[#111]/20 focus:border-[#B28AF0] focus:ring-[#B28AF0] resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-accent"
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div ref={infoRef} className="lg:col-span-2">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-white p-8 border border-[#111]/10">
                  <h3 className="font-['Montserrat'] font-semibold text-lg text-[#111] mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#F6F7F9] flex items-center justify-center flex-shrink-0 group-hover:bg-[#B28AF0]/20 transition-colors">
                          <item.icon className="w-4 h-4 text-[#B28AF0]" />
                        </div>
                        <div>
                          <span className="micro-label text-[#6D6D6D] block mb-1">
                            {item.label}
                          </span>
                          <span className="text-[#111] whitespace-pre-line text-sm">
                            {item.value}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/15552345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#25D366] text-white p-6 text-center hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                  <span className="font-medium">Chat on WhatsApp</span>
                  <p className="text-sm text-white/80 mt-1">
                    Quick responses during business hours
                  </p>
                </a>

                {/* Quick Response Promise */}
                <div className="bg-[#111] text-white p-6">
                  <h4 className="font-['Montserrat'] font-semibold mb-2">
                    Our Promise
                  </h4>
                  <p className="text-sm text-white/70">
                    We respond to all inquiries within two business days.
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[400px] bg-[#E5E5E5] relative overflow-hidden">
        <iframe
          // Link embed resmi yang menyertakan Pin Merah di lokasi yang dituju
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42118.75776881653!2d115.12366082024108!3d-8.674711871711565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24700011f33f1%3A0x5280d8ea6a3e747f!2sAK%20Bali%20Construction%20%7C%20RENOVASI%20%7C%20BANGUN%20RUMAH%20%7C%20DESIGN%20%7C%20INTERIOR!5e0!3m2!1sen!2sid!4v1772446622340!5m2!1sen!2sid"
          width="100%"
          height="100%"
          // Style filter: Grayscale membuat map hitam putih, Contrast membuat jalan terlihat jelas
          style={{
            border: 0,
            filter: 'grayscale(100%) contrast(1.2) opacity(0.9)'
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AK Bali Construction Location"
        />

        {/* Label Lokasi di Atas Map - Muncul di pojok kiri bawah */}
        <div className="absolute bottom-6 left-6 bg-white p-5 shadow-2xl border border-[#111]/10 z-10 max-w-[280px]">
          <h4 className="font-['Montserrat'] font-bold text-[#111] mb-1">
            AK Bali Construction
          </h4>
          <p className="text-sm text-[#6D6D6D] leading-relaxed">
            Jl. Raya Puputan No. 123<br />
            Denpasar, Bali 80234<br />
            Indonesia
          </p>
          <a
            // Link eksternal untuk navigasi (menggunakan link yang sama dengan iframe agar akurat)
            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504852.38499109884!2d114.61837386562502!3d-8.67640079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24700011f33f1%3A0x5280d8ea6a3e747f!2sAK%20Bali%20Construction%20%7C%20RENOVASI%20%7C%20BANGUN%20RUMAH%20%7C%20DESIGN%20%7C%20INTERIOR!5e0!3m2!1sen!2sid!4v1772446106879!5m2!1sen!2sid0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B28AF0] text-xs font-extrabold mt-4 inline-block hover:text-[#111] transition-colors tracking-widest uppercase"
          >
            GET DIRECTIONS →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
