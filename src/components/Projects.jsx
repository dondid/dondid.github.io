import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: 'Practica React',
      description: 'Modern React application built with latest features and best practices. Includes state management, routing, and responsive design.',
      tech: ['React', 'JavaScript', 'CSS3'],
      github: 'https://github.com/dondid/practica-react',
      live: '#',
      image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Practica+React'
    },
    {
      title: 'PracticaRoweb',
      description: 'Full-stack web application built with PHP. Features user authentication, database integration, and admin panel.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/dondid/PracticaRoweb',
      live: '#',
      image: 'https://via.placeholder.com/600x400/0284c7/ffffff?text=PracticaRoweb'
    },
    {
      title: 'HTML Portfolio',
      description: 'Clean and responsive portfolio website showcasing web development projects and skills using pure HTML, CSS, and JavaScript.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/dondid/html-portfolio',
      live: '#',
      image: 'https://via.placeholder.com/600x400/0369a1/ffffff?text=HTML+Portfolio'
    },
    {
      title: 'Web Log',
      description: 'Personal blog platform with markdown support, SEO optimization, and content management system.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/dondid/html-web-log',
      live: '#',
      image: 'https://via.placeholder.com/600x400/075985/ffffff?text=Web+Log'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-dark-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-medium mb-2">What I've built</p>
          <h2 className="heading-lg">Featured Projects</h2>
          <p className="text-dark-600 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-base hover:shadow-2xl group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Project Info */}
              <h3 className="text-2xl font-display font-semibold text-dark-900 mb-3">
                {project.title}
              </h3>
              <p className="text-dark-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-dark-700 hover:text-primary-600 font-medium transition-colors"
                >
                  <FiGithub size={20} />
                  Code
                </a>
                {project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dark-700 hover:text-primary-600 font-medium transition-colors"
                  >
                    <FiExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/dondid"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg"
          >
            View More on GitHub
            <FiExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
