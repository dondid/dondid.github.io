import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      value: '+40 123 456 789',
      link: 'tel:+40123456789'
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Location',
      value: 'Craiova, Romania',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-dark-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-medium mb-2">Get in touch</p>
          <h2 className="heading-lg">Contact Me</h2>
          <p className="text-dark-600 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-semibold text-dark-900 mb-6">
                Let's talk about everything!
              </h3>
              <p className="text-dark-600 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="card-base hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-dark-500 mb-1">{info.title}</p>
                    <p className="text-dark-900 font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-dark-700 font-medium mb-4">Follow me on social media:</p>
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
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-100 text-dark-700 hover:bg-primary-600 hover:text-white transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <i className={`fab fa-${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-base">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-dark-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-dark-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-dark-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-dark-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-base bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg justify-center"
              >
                Send Message
                <FiSend size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
