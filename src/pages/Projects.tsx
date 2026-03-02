import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      const cards = gridRef.current?.querySelectorAll('.project-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      image: '/images/gallery_kitchen.jpg',
      title: 'The Mercer Residence',
      location: 'Bali, CA',
      category: 'Kitchen & Joinery',
      description: 'A complete kitchen renovation featuring custom cabinetry, marble countertops, and designer lighting.',
      year: '2024',
      budget: '$150K - $200K',
    },
    {
      id: 2,
      image: '/images/gallery_bedroom.jpg',
      title: 'Hillside Retreat',
      location: 'Marin County, CA',
      category: 'Full Renovation',
      description: 'Transforming a dated hillside home into a modern sanctuary with panoramic views.',
      year: '2024',
      budget: '$400K - $500K',
    },
    {
      id: 3,
      image: '/images/gallery_exterior.jpg',
      title: 'Modern Oasis',
      location: 'Palo Alto, CA',
      category: 'New Build',
      description: 'A ground-up construction of a contemporary family home with sustainable features.',
      year: '2023',
      budget: '$1.2M - $1.5M',
    },
    {
      id: 4,
      image: '/images/gallery_bathroom.jpg',
      title: 'Spa Sanctuary',
      location: 'Atherton, CA',
      category: 'Bathroom Renovation',
      description: 'Luxury bathroom transformation with freestanding tub, rain shower, and heated floors.',
      year: '2023',
      budget: '$80K - $120K',
    },
    {
      id: 5,
      image: '/images/gallery_deck.jpg',
      title: 'Rooftop Garden',
      location: 'Bali, CA',
      category: 'Outdoor Living',
      description: 'Urban rooftop transformation with custom decking, planters, and outdoor kitchen.',
      year: '2023',
      budget: '$200K - $250K',
    },
    {
      id: 6,
      image: '/images/gallery_staircase.jpg',
      title: 'The Anderson Home',
      location: 'Berkeley, CA',
      category: 'Interior Renovation',
      description: 'Dramatic interior renovation featuring a sculptural floating staircase.',
      year: '2022',
      budget: '$300K - $350K',
    },
    {
      id: 7,
      image: '/images/project_office.jpg',
      title: 'Executive Study',
      location: 'Menlo Park, CA',
      category: 'Custom Interior',
      description: 'Bespoke home office with floor-to-ceiling bookcases and custom desk.',
      year: '2022',
      budget: '$60K - $80K',
    },
    {
      id: 8,
      image: '/images/project_dining.jpg',
      title: 'The Whitman Residence',
      location: 'Los Altos, CA',
      category: 'Dining Room',
      description: 'Elegant dining space with custom lighting and panoramic city views.',
      year: '2022',
      budget: '$100K - $150K',
    },
  ];

  return (
    <div className="bg-[#F6F7F9] min-h-screen pt-32 pb-24">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <span className="micro-label text-[#6D6D6D] mb-4 block">PORTFOLIO</span>
          <h1 className="heading-lg text-[clamp(38px,5vw,72px)] text-[#111] mb-4">
            SELECTED WORK
          </h1>
          <p className="text-[#6D6D6D] max-w-xl text-lg">
            A collection of recent builds and renovations—each one shaped by the 
            people who live there.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="project-card group"
            >
              <div className="relative overflow-hidden mb-5 aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover img-monochrome group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#111]/0 group-hover:bg-[#111]/20 transition-colors duration-500" />
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="micro-label text-[#B28AF0]">{project.category}</span>
              </div>
              
              <h3 className="font-['Montserrat'] font-semibold text-xl text-[#111] mb-2 group-hover:text-[#B28AF0] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-[#6D6D6D] mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex items-center gap-4 text-xs text-[#6D6D6D]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {project.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </span>
              </div>
              
              <div className="mt-4 flex items-center text-sm font-medium text-[#111] group-hover:text-[#B28AF0] transition-colors">
                View Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
