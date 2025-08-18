import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Code, Smartphone, Globe, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-indigo-600">OutOfBox.Solutions</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/products" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Products</Link>
                <Link href="/contact" className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Making Life <span className="text-indigo-600">Easier</span>
            <br />
            One App at a Time
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We create innovative apps and web applications that simplify your daily tasks. 
            From garbage pickup reminders to ride-sharing solutions, we&apos;re here to solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center">
              Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/contact" className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About OutOfBox.Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re a team of passionate developers and problem-solvers dedicated to creating digital solutions 
              that make everyday life more convenient and efficient.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation First</h3>
              <p className="text-gray-600">We leverage cutting-edge technology to build solutions that truly make a difference.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Centric</h3>
              <p className="text-gray-600">Every product we build is designed with the end-user experience in mind.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">We maintain the highest standards of quality in everything we deliver.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of applications designed to solve real-world problems and enhance daily life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Garbage Buddy */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Garbage Buddy</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Never miss garbage pickup day again! Our smart reminder system helps you stay on top of 
                  waste management with customizable notifications and neighborhood coordination features.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Reminders</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Community</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Eco-Friendly</span>
                </div>
                <Link href="https://www.garbage-buddy.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Ride Buddy */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Ride Buddy</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Connect with fellow commuters and share rides efficiently. Our ride-pooling platform 
                  helps reduce traffic, save money, and build community connections.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Ride Sharing</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Cost Saving</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Community</span>
                </div>
                <Link href="https://www.ridebuddy.co" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-indigo-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Have an idea for an app or need a custom solution? Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:harin.shah@outofboxsolutions" className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Email Us
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Contact Page
            </Link>
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
