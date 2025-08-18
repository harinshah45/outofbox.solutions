import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Send, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-indigo-600 hover:text-indigo-700">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="text-2xl font-bold">OutOfBox.Solutions</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Ready to turn your idea into reality? We&apos;d love to hear from you. 
            Let&apos;s discuss how we can help solve your challenges.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="garbage-buddy">Garbage Buddy</option>
                    <option value="ride-buddy">Ride Buddy</option>
                    <option value="custom-solution">Custom Solution</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Tell us about your project or how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We&apos;re here to help and answer any question you might have. 
                  We look forward to hearing from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-2">Send us an email anytime!</p>
                    <a href="mailto:harin.shah@outofboxsolutions" className="text-indigo-600 hover:text-indigo-700 font-medium">
                      harin.shah@outofboxsolutions
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Innovation Drive<br />
                      Tech Valley, CA 94043<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to questions you may have about our services and process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does it take to develop an app?</h3>
                <p className="text-gray-600">
                  Development time varies based on complexity, but typically ranges from 2-6 months for most projects. 
                  We&apos;ll provide a detailed timeline during our initial consultation.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide ongoing support?</h3>
                <p className="text-gray-600">
                  Yes! We offer comprehensive maintenance and support packages to ensure your application 
                  continues to run smoothly and stays up-to-date with the latest technologies.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can you work with existing systems?</h3>
                <p className="text-gray-600">
                  Absolutely. We specialize in integrating new solutions with existing infrastructure 
                  and can help modernize legacy systems while maintaining data integrity.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What technologies do you use?</h3>
                <p className="text-gray-600">
                  We use modern, proven technologies including React, Next.js, Node.js, Python, and cloud platforms 
                  like AWS and Google Cloud to ensure scalable, reliable solutions.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you handle project communication?</h3>
                <p className="text-gray-600">
                  We maintain regular communication through weekly updates, milestone reviews, and are always 
                  available for questions via email, phone, or video calls.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer custom pricing?</h3>
                <p className="text-gray-600">
                  Yes, we provide custom quotes based on your specific requirements. Contact us for 
                  a free consultation and detailed project estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">OutOfBox.Solutions</h3>
              <p className="text-gray-400 mb-4">
                Creating innovative digital solutions that make everyday life easier and more efficient.
              </p>
              <p className="text-gray-400">
                © 2025 OutOfBox.Solutions. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.garbage-buddy.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Garbage Buddy</a></li>
                <li><a href="https://www.ridebuddy.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Ride Buddy</a></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Custom Solutions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:harin.shah@outofboxsolutions" className="hover:text-white transition-colors">harin.shah@outofboxsolutions</a></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
