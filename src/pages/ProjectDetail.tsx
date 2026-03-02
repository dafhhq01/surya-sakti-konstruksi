import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, MapPin, Calendar, DollarSign, Clock, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      image: '/images/gallery_kitchen.jpg',
      title: 'The Mercer Residence',
      location: 'Bali, CA',
      category: 'Kitchen & Joinery',
      description: 'A complete kitchen renovation featuring custom cabinetry, marble countertops, and designer lighting. The clients wanted a space that balanced functionality with elegance, creating a heart of the home that could accommodate both daily family meals and sophisticated entertaining.',
      fullDescription: `This project began with a complete gut renovation of the existing kitchen. We worked closely with the clients to understand their cooking habits, storage needs, and aesthetic preferences. The result is a stunning space that combines warm wood tones with cool marble surfaces.

Key features include custom walnut cabinetry with integrated appliances, a massive marble island with seating for six, and a statement lighting fixture that anchors the space. The backsplash extends to the ceiling, creating a dramatic focal point behind the range.`,
      year: '2024',
      duration: '4 months',
      budget: '$150K - $200K',
      clientName: 'Sarah & David Mercer',
      testimonial: 'AK Bali Construction exceeded our expectations at every turn. The attention to detail and quality of craftsmanship is remarkable. Our kitchen is now the centerpiece of our home.',
      features: [
        'Custom walnut cabinetry',
        'Carrara marble countertops',
        'Integrated appliances',
        'Statement pendant lighting',
        'Full-height backsplash',
        'Built-in wine storage',
      ],
    },
    {
      id: 2,
      image: '/images/gallery_bedroom.jpg',
      title: 'Hillside Retreat',
      location: 'Marin County, CA',
      category: 'Full Renovation',
      description: 'Transforming a dated hillside home into a modern sanctuary with panoramic views. This comprehensive renovation touched every room while maximizing the stunning natural surroundings.',
      fullDescription: `Perched on a hillside with sweeping views of the bay, this 1970s home needed a complete transformation. We preserved the architectural bones while updating every surface and system. The goal was to create a calm, contemplative space that would serve as a retreat from busy city life.

Floor-to-ceiling windows were added to capture the views, and the interior palette was kept neutral to let the landscape take center stage. Custom millwork and built-ins provide storage while maintaining the clean, minimal aesthetic.`,
      year: '2024',
      duration: '8 months',
      budget: '$400K - $500K',
      clientName: 'Michael Chen',
      testimonial: 'Working with AK Bali Construction was a dream. They understood my vision for a peaceful retreat and delivered beyond what I imagined possible.',
      features: [
        'Floor-to-ceiling windows',
        'Custom millwork throughout',
        'Heated floors',
        'Smart home integration',
        'Sustainable materials',
        'Indoor-outdoor flow',
      ],
    },
    {
      id: 3,
      image: '/images/gallery_exterior.jpg',
      title: 'Modern Oasis',
      location: 'Palo Alto, CA',
      category: 'New Build',
      description: 'A ground-up construction of a contemporary family home with sustainable features. Designed for modern living with spaces that adapt to how families live today.',
      fullDescription: `This new construction project presented the opportunity to create a home perfectly suited to its site and owners. Working with an acclaimed architectural firm, we brought their vision to life with meticulous attention to every detail.

The home features an open plan living area that flows seamlessly to outdoor spaces, a master suite with spa-like bathroom, and flexible spaces that can adapt as the family's needs change. Sustainable features include solar panels, rainwater harvesting, and high-performance insulation.`,
      year: '2023',
      duration: '14 months',
      budget: '$1.2M - $1.5M',
      clientName: 'The Rodriguez Family',
      testimonial: 'Building our dream home with AK Bali Construction was an incredible journey. Their expertise and dedication made the process smooth and enjoyable.',
      features: [
        'Solar panel system',
        'Rainwater harvesting',
        'Open plan living',
        'Home office suite',
        'Guest cottage',
        'Electric vehicle charging',
      ],
    },
    {
      id: 4,
      image: '/images/gallery_bathroom.jpg',
      title: 'Spa Sanctuary',
      location: 'Atherton, CA',
      category: 'Bathroom Renovation',
      description: 'Luxury bathroom transformation with freestanding tub, rain shower, and heated floors. A private spa experience in the comfort of home.',
      fullDescription: `The clients wanted to transform their dated master bathroom into a luxurious spa-like retreat. We reconfigured the layout to maximize space and create distinct zones for bathing, showering, and grooming.

The centerpiece is a sculptural freestanding tub positioned to capture natural light. A spacious walk-in shower features dual showerheads and body sprays. Heated floors and a towel warmer add comfort on cool mornings.`,
      year: '2023',
      duration: '3 months',
      budget: '$80K - $120K',
      clientName: 'Emma & James Wilson',
      testimonial: 'Our bathroom feels like a five-star spa. AK Bali Construction thought of every detail to make this space both beautiful and functional.',
      features: [
        'Freestanding soaking tub',
        'Walk-in rain shower',
        'Heated floors',
        'Double vanity',
        'Towel warmer',
        'Natural stone surfaces',
      ],
    },
    {
      id: 5,
      image: '/images/gallery_deck.jpg',
      title: 'Rooftop Garden',
      location: 'Bali, CA',
      category: 'Outdoor Living',
      description: 'Urban rooftop transformation with custom decking, planters, and outdoor kitchen. Creating an oasis above the city streets.',
      fullDescription: `This rooftop project transformed an underutilized space into a stunning outdoor living area. Working within the constraints of a city rooftop, we created distinct zones for dining, lounging, and gardening.

Custom ipe decking provides a warm, durable surface. Built-in planters with integrated irrigation allow for easy maintenance of the plantings. A full outdoor kitchen makes entertaining effortless, while a fire pit extends the usability into cooler evenings.`,
      year: '2023',
      duration: '5 months',
      budget: '$200K - $250K',
      clientName: 'Lisa Park',
      testimonial: 'My rooftop is now my favorite place in the city. AK Bali Construction created a true urban oasis that I enjoy every day.',
      features: [
        'Custom ipe decking',
        'Outdoor kitchen',
        'Built-in planters',
        'Fire pit lounge',
        'Integrated lighting',
        'Weatherproof storage',
      ],
    },
    {
      id: 6,
      image: '/images/gallery_staircase.jpg',
      title: 'The Anderson Home',
      location: 'Berkeley, CA',
      category: 'Interior Renovation',
      description: 'Dramatic interior renovation featuring a sculptural floating staircase. Modernizing a classic home while honoring its character.',
      fullDescription: `This renovation of a 1920s Craftsman home balanced respect for the original architecture with modern living needs. The centerpiece is a stunning floating staircase that connects three levels while allowing light to flow through the center of the home.

Original features like built-in cabinetry and period molding were carefully restored, while new elements were designed to complement the historic character. The result is a home that feels both timeless and contemporary.`,
      year: '2022',
      duration: '6 months',
      budget: '$300K - $350K',
      clientName: 'The Anderson Family',
      testimonial: 'AK Bali Construction respected the history of our home while bringing it into the modern era. The staircase is a work of art.',
      features: [
        'Floating staircase',
        'Restored original details',
        'Open floor plan',
        'Custom lighting design',
        'Period-appropriate millwork',
        'Modern kitchen integration',
      ],
    },
    {
      id: 7,
      image: '/images/project_office.jpg',
      title: 'Executive Study',
      location: 'Menlo Park, CA',
      category: 'Custom Interior',
      description: 'Bespoke home office with floor-to-ceiling bookcases and custom desk. A sophisticated workspace for focused work and video calls.',
      fullDescription: `With remote work becoming permanent, the client needed a home office that would rival any corporate environment. We designed a space that balances functionality with sophistication.

Floor-to-ceiling bookcases provide ample storage and display space. A custom desk was designed to the client's exact specifications for comfort and productivity. Integrated technology includes hidden cable management and optimized lighting for video calls.`,
      year: '2022',
      duration: '2 months',
      budget: '$60K - $80K',
      clientName: 'Robert Taylor',
      testimonial: 'My home office is now my favorite room. AK Bali Construction created a space that makes me excited to start work each day.',
      features: [
        'Floor-to-ceiling bookcases',
        'Custom executive desk',
        'Integrated technology',
        'Acoustic treatment',
        'Task and ambient lighting',
        'Hidden cable management',
      ],
    },
    {
      id: 8,
      image: '/images/project_dining.jpg',
      title: 'The Whitman Residence',
      location: 'Los Altos, CA',
      category: 'Dining Room',
      description: 'Elegant dining space with custom lighting and panoramic city views. Designed for memorable gatherings and everyday meals.',
      fullDescription: `The dining room was reimagined as a space for both intimate family dinners and larger celebrations. A wall of windows frames views of the city below, while a dramatic lighting fixture creates ambiance after sunset.

Custom built-ins provide storage for tableware and display space for art. The material palette of warm wood, natural stone, and soft textiles creates an inviting atmosphere.`,
      year: '2022',
      duration: '3 months',
      budget: '$100K - $150K',
      clientName: 'Jennifer Whitman',
      testimonial: 'Our dining room is absolutely stunning. AK Bali Construction created a space where every meal feels special.',
      features: [
        'Panoramic window wall',
        'Custom lighting fixture',
        'Built-in storage',
        'Natural stone accents',
        'Custom drapery',
        'Art display lighting',
      ],
    },
  ];

  const project = projects.find((p) => p.id === Number(id));
  const currentIndex = projects.findIndex((p) => p.id === Number(id));
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const galleryItems = galleryRef.current?.querySelectorAll('.gallery-item');
      if (galleryItems) {
        gsap.fromTo(
          galleryItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: galleryRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return (
      <div className="bg-[#F6F7F9] min-h-screen pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="heading-lg text-[#111] mb-4">Project Not Found</h1>
          <p className="text-[#6D6D6D] mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="btn-accent">
            View All Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F6F7F9] min-h-screen">
      {/* Hero */}
      <div ref={heroRef} className="pt-24">
        <div className="relative h-[60vh] lg:h-[70vh]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover img-monochrome"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
            <div className="max-w-7xl mx-auto">
              <span className="micro-label text-white/70 mb-4 block">{project.category}</span>
              <h1 className="heading-lg text-white text-[clamp(32px,5vw,64px)]">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Link
                to="/projects"
                className="inline-flex items-center text-sm text-[#6D6D6D] hover:text-[#111] mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>

              <h2 className="font-['Montserrat'] font-semibold text-2xl text-[#111] mb-4">
                Project Overview
              </h2>
              <p className="text-[#6D6D6D] leading-relaxed mb-8 whitespace-pre-line">
                {project.fullDescription}
              </p>

              <h3 className="font-['Montserrat'] font-semibold text-xl text-[#111] mb-4">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#6D6D6D]">
                    <Check className="w-4 h-4 text-[#B28AF0] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Client Testimonial */}
              <div className="bg-white p-8 border border-[#111]/10">
                <span className="micro-label text-[#6D6D6D] mb-4 block">CLIENT TESTIMONIAL</span>
                <blockquote className="text-lg text-[#111] italic mb-4">
                  "{project.testimonial}"
                </blockquote>
                <p className="text-sm text-[#6D6D6D]">— {project.clientName}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 border border-[#111]/10 sticky top-32">
                <h3 className="font-['Montserrat'] font-semibold text-lg text-[#111] mb-6">
                  Project Details
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <span className="micro-label text-[#6D6D6D] block mb-1">Location</span>
                    <span className="flex items-center gap-2 text-[#111]">
                      <MapPin className="w-4 h-4 text-[#B28AF0]" />
                      {project.location}
                    </span>
                  </div>
                  
                  <div>
                    <span className="micro-label text-[#6D6D6D] block mb-1">Year</span>
                    <span className="flex items-center gap-2 text-[#111]">
                      <Calendar className="w-4 h-4 text-[#B28AF0]" />
                      {project.year}
                    </span>
                  </div>
                  
                  <div>
                    <span className="micro-label text-[#6D6D6D] block mb-1">Duration</span>
                    <span className="flex items-center gap-2 text-[#111]">
                      <Clock className="w-4 h-4 text-[#B28AF0]" />
                      {project.duration}
                    </span>
                  </div>
                  
                  <div>
                    <span className="micro-label text-[#6D6D6D] block mb-1">Budget Range</span>
                    <span className="flex items-center gap-2 text-[#111]">
                      <DollarSign className="w-4 h-4 text-[#B28AF0]" />
                      {project.budget}
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#111]/10">
                  <Link to="/contact" className="btn-accent w-full justify-center">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div ref={galleryRef} className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-lg text-[clamp(24px,3vw,40px)] text-[#111] mb-8">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[project.image, project.image, project.image].map((img, index) => (
              <div key={index} className="gallery-item aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={`${project.title} - View ${index + 1}`}
                  className="w-full h-full object-cover img-monochrome hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="py-12 px-6 lg:px-12 border-t border-[#111]/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className="flex items-center gap-4 text-[#6D6D6D] hover:text-[#111] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <div className="text-left">
                <span className="micro-label block">Previous Project</span>
                <span className="font-medium">{prevProject.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.id}`}
              className="flex items-center gap-4 text-[#6D6D6D] hover:text-[#111] transition-colors"
            >
              <div className="text-right">
                <span className="micro-label block">Next Project</span>
                <span className="font-medium">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
