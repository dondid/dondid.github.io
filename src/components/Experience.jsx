import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Your Company Name',
      period: '2023 - Present',
      description: [
        'Developed and maintained web applications using React, Laravel, and Vue.js',
        'Collaborated with cross-functional teams to define and implement new features',
        'Optimized application performance resulting in 40% faster load times',
        'Mentored junior developers and conducted code reviews'
      ],
      current: true
    },
    {
      role: 'Web Developer',
      company: 'Previous Company',
      period: '2021 - 2023',
      description: [
        'Built responsive websites and web applications using modern frameworks',
        'Implemented RESTful APIs and integrated third-party services',
        'Worked with MySQL databases and optimized complex queries',
        'Participated in agile development processes and sprint planning'
      ],
      current: false
    },
    {
      role: 'Junior Developer',
      company: 'First Company',
      period: '2020 - 2021',
      description: [
        'Assisted in developing features for existing web applications',
        'Wrote clean, maintainable code following best practices',
        'Fixed bugs and performed quality assurance testing',
        'Learned modern development workflows and version control with Git'
      ],
      current: false
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-medium mb-2">My journey</p>
          <h2 className="heading-lg">Work Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-dark-200"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="card-base hover:shadow-xl transition-all">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={index % 2 !== 0 ? 'md:text-right md:ml-auto' : ''}>
                        <h3 className="text-xl font-display font-semibold text-dark-900 mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-primary-600 font-medium mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2 text-dark-500 text-sm">
                          <FiCalendar size={16} />
                          <span>{exp.period}</span>
                          {exp.current && (
                            <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className={`space-y-2 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-dark-600">
                          <span className="text-primary-600 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20 pt-16 border-t border-dark-200">
          <h3 className="text-3xl font-display font-semibold text-center mb-12">Education</h3>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="card-base hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <FiBriefcase size={24} />
              </div>
              <h4 className="text-xl font-semibold text-dark-900 mb-2">
                Bachelor's Degree in Computer Science
              </h4>
              <p className="text-primary-600 font-medium mb-2">University Name</p>
              <p className="text-dark-500 text-sm">2017 - 2021</p>
            </div>
            
            <div className="card-base hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <FiBriefcase size={24} />
              </div>
              <h4 className="text-xl font-semibold text-dark-900 mb-2">
                Certifications & Courses
              </h4>
              <p className="text-dark-600 mb-2">
                Various online courses and certifications in web development
              </p>
              <p className="text-dark-500 text-sm">Ongoing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
