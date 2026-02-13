import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-primary-600 font-medium text-lg">Hello, I'm</p>
            <h1 className="heading-xl leading-tight">
              Your Name<span className="text-primary-600">.</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-dark-700">
              Full Stack Developer
            </h2>
            <p className="text-lg text-dark-600 leading-relaxed max-w-xl">
              I build modern web applications with clean code and exceptional user experiences. 
              Passionate about creating scalable solutions using React, Laravel, and Vue.js.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="btn-base bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5"
              >
                View My Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#contact"
                className="btn-base bg-dark-100 text-dark-900 hover:bg-dark-200 hover:shadow-lg"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/dondid"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-dark-300 text-dark-700 hover:border-primary-600 hover:text-primary-600 hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-dark-300 text-dark-700 hover:border-primary-600 hover:text-primary-600 hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-dark-300 text-dark-700 hover:border-primary-600 hover:text-primary-600 hover:scale-110 transition-all"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-dark-300 text-dark-700 hover:border-primary-600 hover:text-primary-600 hover:scale-110 transition-all"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative animate-slide-in animation-delay-200">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-400"></div>
              
              {/* Image Container */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="https://avatars.githubusercontent.com/u/64099001?v=4"
                    alt="Your Name"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-dark-200">
                  <p className="text-3xl font-bold text-primary-600">3+</p>
                  <p className="text-sm text-dark-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
