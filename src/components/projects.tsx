import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "SuperMarket Billing System",
    description: "Developed a Java-based Supermarket Billing System to manage product scanning, bill generation, and total calculation efficiently.",
    tags: ["Java", "Java Swing", "AWT", "MySQL"," JDBC","MVC Architecture"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    // image: "https://unsplash.com/photos/white-and-red-labeled-pack-on-white-shelf-ivfp_yxZuYQ",
    // github: "#",
    // live: "#",
    featured: true,
  },
  {
    title: "Train Ticket Booking Application",
    description: "Developed a Java-based Train Ticket Booking Application to manage booking, cancellation, and seat availability.",
    tags: ["Java", "Java Swing", "AWT", "MySQL","Exception Handling", "JDBC","MVC Architecture"],
    image: "https://plus.unsplash.com/premium_photo-1661940016238-24356ff0737b?w=600&h=400&fit=crop",
    // github: "#",
    // live: "#",
    featured: true,
  },
  {
    title: "Student Result Management System",
    description: "Developed a Java-based Student Result Management System to manage student records, grades, and generate reports.",
    tags: ["Java", "Java Swing", "AWT", "MySQL","Exception Handling", "JDBC","MVC Architecture"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "E-Commerce Platform",
    description: "Designed and developed a responsive e-commerce gift shop frontend with product listing, category filtering, and user-friendly UI.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design", "UI/UX", "Flexbox", "CSS Grid", "Git", "GitHub"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of projects that showcase my skills in building 
              scalable, user-centric applications.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group glass rounded-2xl overflow-hidden card-hover"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {project.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                      Featured
                    </span>
                  )}
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3">
                    {/* <Button variant="outline" size="sm" asChild>
                      <a href={project.github}>
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button> */}
                    {/* <Button variant="default" size="sm" asChild>
                      <a href={project.live}>
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-12">
            <Button variant="glass" size="lg">
              View All Projects
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
