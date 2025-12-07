import React from 'react';
const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "HTML", "CSS"]
    },
    {
      category: "Frameworks",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Socket.io"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Firebase", "VS Code", "Intellij IDEA"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem-solving", "Communication", "Team Collaboration"]
    }
  ];

  return (
    <section id="skills" style={{ minHeight: '100vh', padding: '5rem 1rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', fontFamily: "'Space Mono', 'Courier New', monospace" }}>
          SKILLS
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', opacity: 1 }}>
          {skillsData.map((category, index) => (
            <div key={index} className="card floating" style={{ transition: 'all 0.3s ease' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#fff', fontFamily: "'Space Mono', 'Courier New', monospace" }}>{category.category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-tag"
                    style={{ fontFamily: "'Space Mono', 'Courier New', monospace" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;