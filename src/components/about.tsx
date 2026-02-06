import { Code2, Cpu, Rocket, Zap } from "lucide-react";

const stats = [
  { label: "Months Experience in JAVA", value: "6-12" },
  { label: "Projects Completed", value: "5" },
  { label: "Technologies", value: "8" },
  { label: "Highly Focused", value: "Java,SQL" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing every millisecond for the best user experience",
  },
  {
    icon: Cpu,
    title: "Modern Stack",
    description: "Leveraging cutting-edge technologies and frameworks",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient development without compromising quality",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Passionate About{" "}
              <span className="gradient-text">Technology</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm a Java Backend developer with a passion for building beautiful, 
              functional applications that solve real-world problems.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass rounded-2xl p-6 text-center card-hover"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="glass rounded-2xl p-8 card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
