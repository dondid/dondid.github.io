import { FiCode, FiCoffee, FiHeart, FiZap } from 'react-icons/fi'

const About = () => {
  const highlights = [
    {
      icon: <FiCode size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that follows best practices'
    },
    {
      icon: <FiZap size={24} />,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: <FiHeart size={24} />,
      title: 'User-Focused',
      description: 'Creating intuitive experiences that users love'
    },
    {
      icon: <FiCoffee size={24} />,
      title: 'Always Learning',
      description: 'Staying updated with latest technologies and trends'
    }
  ]

  return (
    <section id="about" className="section-padding bg-dark-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-medium mb-2">Get to know me</p>
          <h2 className="heading-lg">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <div className="space-y-6">
            <p className="text-lg text-dark-700 leading-relaxed">
              I'm a passionate <span className="font-semibold text-primary-600">Full Stack Developer</span> with 
              expertise in building modern web applications. I specialize in creating robust, scalable solutions 
              using cutting-edge technologies.
            </p>
            <p className="text-lg text-dark-700 leading-relaxed">
              My journey in web development started with a curiosity about how things work on the internet. 
              Today, I work with <span className="font-semibold">React, Laravel, Vue.js,</span> and other 
              modern frameworks to bring ideas to life.
            </p>
            <p className="text-lg text-dark-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>

            <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="btn-base bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg"
              >
                Download CV
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-base hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-2">{item.title}</h3>
                <p className="text-dark-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
