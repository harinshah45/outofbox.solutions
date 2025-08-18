import Link from "next/link";
import { ArrowLeft, ArrowRight, Globe, Smartphone, Bell, Users, MapPin, DollarSign, Leaf, Car, Clock, Star } from "lucide-react";

export default function Products() {
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
            Our Products
          </h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Discover our innovative applications designed to solve real-world problems 
            and make everyday life more convenient.
          </p>
        </div>
      </section>

      {/* Garbage Buddy Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Garbage Buddy</h2>
              </div>
              
              <p className="text-xl text-gray-600 mb-6">
                Never miss garbage pickup day again! Our intelligent reminder system helps you stay on top of 
                waste management with smart notifications, community features, and eco-friendly tracking.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Bell className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart Reminders</h3>
                    <p className="text-gray-600">Customizable notifications for garbage, recycling, and yard waste pickup days</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Features</h3>
                    <p className="text-gray-600">Connect with neighbors and share pickup schedules and waste management tips</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Eco-Tracking</h3>
                    <p className="text-gray-600">Monitor your environmental impact and get recycling tips</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://www.garbage-buddy.com" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                  Visit App <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/contact" className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Globe className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Garbage Buddy</h3>
                  <p className="text-gray-600 mb-4">Your smart waste management companion</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Downloads</span>
                      <span>10,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rating</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ride Buddy Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-2">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Smartphone className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ride Buddy</h3>
                  <p className="text-gray-600 mb-4">Connect, share, and save on every ride</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Active Users</span>
                      <span>25,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rating</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Ride Buddy</h2>
              </div>
              
              <p className="text-xl text-gray-600 mb-6">
                Transform your daily commute with our intelligent ride-sharing platform. Connect with fellow 
                commuters, reduce costs, and contribute to a more sustainable future.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart Matching</h3>
                    <p className="text-gray-600">AI-powered algorithm matches you with compatible riders on similar routes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <DollarSign className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cost Sharing</h3>
                    <p className="text-gray-600">Split fuel and parking costs automatically with secure payment integration</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Car className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-time Tracking</h3>
                    <p className="text-gray-600">Live GPS tracking and ETA updates for peace of mind</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://www.ridebuddy.co" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Visit App <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Both applications are built with user experience in mind, offering reliable, 
              efficient solutions to everyday challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Garbage Buddy Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Garbage Buddy Benefits</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Never miss pickup day again</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Leaf className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Improve recycling habits</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Build community connections</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Bell className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-gray-700">Customizable reminder system</span>
                </li>
              </ul>
            </div>

            {/* Ride Buddy Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Smartphone className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Ride Buddy Benefits</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <DollarSign className="h-5 w-5 text-blue-600 mt-1" />
                  <span className="text-gray-700">Reduce commuting costs by up to 50%</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Car className="h-5 w-5 text-blue-600 mt-1" />
                  <span className="text-gray-700">Decrease traffic congestion</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-blue-600 mt-1" />
                  <span className="text-gray-700">Meet like-minded commuters</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Leaf className="h-5 w-5 text-blue-600 mt-1" />
                  <span className="text-gray-700">Reduce carbon footprint</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already making their lives easier with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us Today
            </Link>
            <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Learn More About Us
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
                <li><a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
