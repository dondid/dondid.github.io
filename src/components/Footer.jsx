import { FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              YN<span className="text-primary-400">.</span>
            </h3>
            <p className="text-dark-300 leading-relaxed">
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { name: 'GitHub', url: 'https://github.com/dondid', icon: 'github' },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: 'linkedin' },
                { name: 'Twitter', url: 'https://twitter.com/yourhandle', icon: 'twitter' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-800 text-dark-300 hover:bg-primary-600 hover:text-white transition-all hover:scale-110"
                  aria-label={social.name}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
            <p className="text-dark-300 mt-4">
              <a href="mailto:your.email@example.com" className="hover:text-primary-400 transition-colors">
                your.email@example.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-400 text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-dark-400 text-sm flex items-center gap-2">
            Made with <FiHeart className="text-red-500" size={16} /> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
