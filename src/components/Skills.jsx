const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'JavaScript/ES6+', level: 90 },
        { name: 'TypeScript', level: 80 },
        { name: 'TailwindCSS', level: 95 },
        { name: 'HTML5/CSS3', level: 95 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Laravel', level: 85 },
        { name: 'PHP', level: 85 },
        { name: 'Node.js', level: 75 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'RESTful APIs', level: 90 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Vite', level: 85 },
        { name: 'Webpack', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Linux', level: 75 },
        { name: 'Figma', level: 80 },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-medium mb-2">What I work with</p>
          <h2 className="heading-lg">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-2xl font-display font-semibold text-dark-900 mb-6 pb-2 border-b-2 border-primary-600">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-dark-700 font-medium">{skill.name}</span>
                      <span className="text-dark-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary-600 to-primary-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 pt-16 border-t border-dark-200">
          <h3 className="text-2xl font-display font-semibold text-center mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'React', 'Vue.js', 'Laravel', 'PHP', 'JavaScript', 'TypeScript',
              'TailwindCSS', 'MySQL', 'Git', 'Vite', 'Node.js', 'Docker'
            ].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-dark-50 border border-dark-200 rounded-lg text-dark-700 font-medium hover:border-primary-600 hover:text-primary-600 hover:shadow-lg transition-all cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
