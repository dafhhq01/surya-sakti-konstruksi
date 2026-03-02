import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Home as HomeIcon, Palette, Hammer, TreePine } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <div className="bg-[#F6F7F9] overflow-x-hidden">
      {/* Section 1: Hero */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center pt-20 md:pt-0">
        {/* Content (Left/Top) */}
        <div className="w-full md:w-1/2 px-6 lg:px-20 py-12 flex flex-col justify-center order-2 md:order-1">
          <div className="animate-fade-up">
            <span className="micro-label text-[#6D6D6D] mb-4 block">
              AK Bali Construction CONSTRUCTION
            </span>
            <h1 className="font-['Montserrat'] font-bold text-[clamp(40px,5vw,80px)] leading-[1.1] text-[#111] mb-6">
              BUILT WITH PRECISION
            </h1>
            <p className="text-[#6D6D6D] text-lg md:text-xl leading-relaxed max-w-md mb-8">
              Design-led construction for homes that feel as good as they look.
            </p>
            <div className="flex">
              <Link to="/contact" className="btn-accent flex items-center gap-2">
                Request a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image (Right/Bottom) */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen order-1 md:order-2">
          <img
            src="/images/hero_house.jpg"
            alt="Modern architectural home"
            className="w-full h-full object-cover img-monochrome"
          />
        </div>
      </section>

      {/* Section 2: Modern Living */}
      <SplitSection
        image="/images/modern_interior.jpg"
        imagePosition="left"
        headline="MODERN LIVING"
        body="Open plans, natural light, and honest materials—designed for how you actually live."
        cta={{ text: 'See Our Process', link: '/about' }}
        label="DESIGN PHILOSOPHY"
      />

      {/* Section 3: Smart Planning */}
      <SplitSection
        image="/images/team_planning.jpg"
        imagePosition="right"
        headline="SMART PLANNING"
        body="Budgets, timelines, and trade coordination—handled with clarity from day one."
        cta={{ text: 'Meet the Team', link: '/about' }}
        label="PROCESS & EXPERTISE"
      />

      {/* Section 4: Premium Materials */}
      <SplitSection
        image="/images/concrete_texture.jpg"
        imagePosition="left"
        headline="PREMIUM MATERIALS"
        body="We specify durable, low-maintenance finishes that age gracefully—inside and out."
        cta={{ text: 'Explore Finishes', link: '/services' }}
        label="QUALITY & DETAIL"
      />

      {/* Section 5: Custom Interiors */}
      <SplitSection
        image="/images/minimal_living.jpg"
        imagePosition="right"
        headline="CUSTOM INTERIORS"
        body="Cabinetry, lighting, and layouts tailored to your daily rituals—and your future."
        cta={{ text: 'View Interior Work', link: '/projects' }}
        label="PERSONALIZATION"
      />

      {/* Section 6: Outdoor Living */}
      <SplitSection
        image="/images/poolside_terrace.jpg"
        imagePosition="left"
        headline="OUTDOOR LIVING"
        body="Decks, patios, and plantings that extend your home into the landscape."
        cta={{ text: 'See Outdoor Projects', link: '/projects' }}
        label="LANDSCAPE & LIFESTYLE"
      />

      {/* Section 7: Services Preview */}
      <ServicesSection />

      {/* Section 8: Featured Projects */}
      <ProjectsSection />

      {/* Section 9: Process */}
      <ProcessSection />

      {/* Section 10: Testimonials */}
      <TestimonialsSection />

      {/* Section 11: CTA */}
      <CTASection />
    </div>
  );
};

// Split Section Component - REWRITTEN FOR RESPONSIVENESS
interface SplitSectionProps {
  image: string;
  imagePosition: 'left' | 'right';
  headline: string;
  body: string;
  cta: { text: string; link: string };
  label: string;
}

const SplitSection = ({
  image,
  imagePosition,
  headline,
  body,
  cta,
  label,
}: SplitSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isLeft = imagePosition === 'left';

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none', // Hanya jalan sekali agar ringan
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row min-h-[70vh] items-center border-b border-[#111]/5"
    >
      {/* Image Container */}
      <div className={`w-full md:w-1/2 h-[40vh] md:h-[70vh] ${isLeft ? 'md:order-1' : 'md:order-2'}`}>
        <img
          src={image}
          alt={headline}
          className="w-full h-full object-cover img-monochrome"
        />
      </div>

      {/* Content Container */}
      <div className={`w-full md:w-1/2 px-6 lg:px-20 py-16 flex flex-col justify-center ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
        <span className="micro-label text-[#B28AF0] mb-4 block">{label}</span>
        <h2 className="font-['Montserrat'] font-bold text-[clamp(32px,4vw,54px)] leading-tight text-[#111] mb-6">
          {headline}
        </h2>
        <p className="text-[#6D6D6D] text-base md:text-lg leading-relaxed mb-8 max-w-md">
          {body}
        </p>
        <div className="flex">
          <Link to={cta.link} className="btn-ghost flex items-center gap-2 group">
            {cta.text}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null); // Tambahkan ref untuk section-nya
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      
      if (cards && cards.length > 0) {
        // Kita pastikan dulu kartu-kartunya terlihat jika JS gagal
        gsap.set(cards, { opacity: 0, y: 30 }); 

        gsap.to(cards, {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current, // Menggunakan section sebagai trigger agar lebih akurat
            start: 'top 85%',
            toggleActions: 'play none none none', // Menghindari elemen hilang saat scroll balik
            onEnter: () => console.log("Services Animated"), // Debugging
          },
        });
      }
    }, sectionRef); // Scope context ke sectionRef
    return () => ctx.revert();
  }, []);

  const services = [
    { icon: HomeIcon, title: 'Custom Home Construction', description: 'From foundation to finish, we build homes tailored to your vision and lifestyle.' },
    { icon: Palette, title: 'Renovation & Remodeling', description: 'Transform existing spaces with thoughtful design and expert craftsmanship.' },
    { icon: Hammer, title: 'Interior Build & Finishing', description: 'Custom cabinetry, millwork, and finishes that elevate every room.' },
    { icon: TreePine, title: 'Architectural Execution', description: 'Bring architect designs to life with precision and attention to detail.' },
  ];

  return (
    <section 
      ref={sectionRef} // Pastikan ref ini dipasang di sini
      className="bg-white py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="micro-label text-[#6D6D6D] mb-4 block">WHAT WE DO</span>
          <h2 className="font-['Montserrat'] font-bold text-4xl text-[#111]">OUR SERVICES</h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Mapping services tetap sama */}
          {services.map((service, index) => (
            <Link
              key={index}
              to="/services"
              className="service-card group p-8 border border-[#111]/10 hover:bg-[#111] transition-all duration-500 block opacity-0" // Tambahkan block dan default opacity-0
            >
              <service.icon className="w-8 h-8 text-[#B28AF0] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-['Montserrat'] font-semibold text-lg text-[#111] group-hover:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-[#6D6D6D] group-hover:text-white/70">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  const projects = [
    { image: '/images/gallery_kitchen.jpg', title: 'The Mercer Residence', category: 'Kitchen & Joinery' },
    { image: '/images/gallery_bedroom.jpg', title: 'Hillside Retreat', category: 'Full Renovation' },
    { image: '/images/gallery_exterior.jpg', title: 'Modern Oasis', category: 'New Build' },
  ];

  return (
    <section className="bg-[#F6F7F9] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="micro-label text-[#6D6D6D] mb-4 block">PORTFOLIO</span>
            <h2 className="font-['Montserrat'] font-bold text-4xl text-[#111]">SELECTED WORK</h2>
          </div>
          <Link to="/projects" className="btn-ghost flex items-center gap-2">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} to={`/projects/${index + 1}`} className="group">
              <div className="overflow-hidden mb-4 aspect-[4/3] bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover img-monochrome group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="micro-label text-[#B28AF0]">{project.category}</span>
              <h3 className="font-['Montserrat'] font-semibold text-xl text-[#111] mt-2 group-hover:text-[#B28AF0] transition-colors">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const steps = [
    { number: '01', title: 'Consultation', description: 'We listen to your vision, understand your needs, and discuss possibilities.' },
    { number: '02', title: 'Planning & Budgeting', description: 'Detailed plans, transparent quotes, and a clear timeline for your project.' },
    { number: '03', title: 'Construction Phase', description: 'Expert craftsmanship with regular updates and quality checkpoints.' },
    { number: '04', title: 'Final Handover', description: 'A flawless finish with walkthrough, documentation, and warranty.' },
  ];

  return (
    <section className="bg-white py-24 px-6 lg:px-12 border-y border-[#111]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="micro-label text-[#6D6D6D] mb-4 block">HOW WE WORK</span>
          <h2 className="font-['Montserrat'] font-bold text-4xl text-[#111]">OUR PROCESS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <span className="text-[#B28AF0] font-['Montserrat'] font-bold text-6xl mb-6 block opacity-20">
                {step.number}
              </span>
              <h3 className="font-['Montserrat'] font-semibold text-lg text-[#111] mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-[#6D6D6D] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => (
  <section className="bg-[#F6F7F9] py-32 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <span className="micro-label text-[#6D6D6D] mb-12 block">TESTIMONIALS</span>
      <blockquote className="font-['Montserrat'] font-medium text-2xl md:text-4xl text-[#111] leading-tight mb-10 italic">
        "AK Bali Construction transformed our vision into a home that exceeds every expectation. Their attention to detail and commitment to quality is unmatched."
      </blockquote>
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-[#111] text-white flex items-center justify-center font-bold mb-4">
          JM
        </div>
        <p className="font-bold text-[#111]">James Mitchell</p>
        <p className="text-sm text-[#6D6D6D]">Homeowner, Bali</p>
      </div>
    </div>
  </section>
);

// CTA Section
const CTASection = () => (
  <section className="bg-[#111] py-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-['Montserrat'] font-bold text-4xl md:text-6xl text-white mb-6">
        START YOUR PROJECT
      </h2>
      <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
        Tell us what you're building. We'll respond within two business days.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Link to="/contact" className="btn-accent px-10 py-4 rounded-full text-base">
          Request a Consultation
        </Link>
        <a href="#" className="text-white border-b border-white/20 hover:border-white transition-colors py-2">
          Download Capabilities (PDF)
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 pt-10 border-t border-white/10">
        {[
          { v: '150+', l: 'Projects Completed' },
          { v: '15+', l: 'Years Experience' },
          { v: '98%', l: 'Client Satisfaction' },
        ].map((s, i) => (
          <div key={i}>
            <p className="text-3xl font-bold text-white">{s.v}</p>
            <p className="text-sm text-white/40">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Home;