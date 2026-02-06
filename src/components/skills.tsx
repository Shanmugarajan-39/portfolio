const skills = [
  { name: "Java", level: 70, category: "Backend" },
  { name: "SQL", level: 75, category: "Database" },
  { name: "HTML", level: 88, category: "Frontend" },
  { name: "CSS", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 82, category: "Frontend" },
  { name: "python", level: 50, category: "Language" },
  { name: "C", level: 60, category: "Language" },
  // { name: "GraphQL", level: 75, category: "API" },
];

const technologies = [
  "react", "c++", "photoshop", "illustrator",
  "node.js",  "TailwindCSS", 
  "Git"
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Skills</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Technical{" "}
              <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit built over years of hands-on experience 
              with cutting-edge technologies.
            </p>
          </div>
          
          {/* Skills Bars */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-primary font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Technologies Cloud */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-6 text-center">Other Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-secondary/50 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
