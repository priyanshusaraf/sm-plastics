'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Factory, 
  Users, 
  Award, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin, 
  Cog, 
  Package, 
  Star,
  ArrowRight,
  CheckCircle,
  Shield,
  Target,
  Zap,
  Menu,
  X
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Factory className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900 block">SM Plastics</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="/products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Products</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Experience</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>
            {/* Hamburger for mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuOpen((open) => !open)} className="p-2 focus:outline-none">
                {menuOpen ? <X className="h-7 w-7 text-blue-600" /> : <Menu className="h-7 w-7 text-blue-600" />}
              </button>
            </div>
          </div>
          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg rounded-b-lg px-6 py-4 space-y-2">
              <a href="#home" className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#about" className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>About</a>
              <a href="/products" className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Products</a>
              <a href="#services" className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#experience" className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#contact" className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 flex items-center min-h-screen container-custom pt-20 md:pt-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">SM</span> Plastics
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mt-4 font-light">
                  Your Dreams, Our Priorities
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  With over 25 years of industrial experience and 22+ advanced machines, 
                  we deliver high-precision injection moulded components for diverse industries 
                  with unwavering commitment to quality and innovation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <a href="/products">
                    Explore Our Capabilities
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50" asChild>
                  <a href="#contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Get Quote
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">25+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">22+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Machines</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Quality Assured</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <Factory className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Advanced Manufacturing</h3>
                    <p className="text-sm text-gray-600 mt-2">State-of-the-art injection moulding technology</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Quality Assurance</h3>
                    <p className="text-sm text-gray-600 mt-2">ISO standards and rigorous testing</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <Target className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Precision Engineering</h3>
                    <p className="text-sm text-gray-600 mt-2">Micro-level accuracy and consistency</p>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-lg">
                    <Zap className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                    <p className="text-sm text-gray-600 mt-2">Efficient production and timely delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
    

      {/* Trusted By Section */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Trusted By Leading Brands</h2>
          <p className="text-lg text-gray-600 mb-8">Our partners include industry leaders in their fields.</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            <img src="/partners/supra-pens.svg" alt="Supra Pens" className="h-12 opacity-60 grayscale hover:opacity-80 transition-all" style={{filter: 'brightness(0) saturate(100%) invert(20%) sepia(10%) saturate(500%) hue-rotate(180deg)'}} />
            <img src="/partners/win-pens.svg" alt="Win Pens" className="h-12 opacity-60 grayscale hover:opacity-80 transition-all" style={{filter: 'brightness(0) saturate(100%) invert(20%) sepia(10%) saturate(500%) hue-rotate(180deg)'}} />
            <img src="/partners/elkos.svg" alt="Elkos" className="h-12 opacity-60 grayscale hover:opacity-80 transition-all" style={{filter: 'brightness(0) saturate(100%) invert(20%) sepia(10%) saturate(500%) hue-rotate(180deg)'}} />
            <img src="/partners/paras.svg" alt="Paras" className="h-12 opacity-60 grayscale hover:opacity-80 transition-all" style={{filter: 'brightness(0) saturate(100%) invert(20%) sepia(10%) saturate(500%) hue-rotate(180deg)'}} />
            <img src="/partners/sparsh.svg" alt="Sparsh" className="h-12 opacity-60 grayscale hover:opacity-80 transition-all" style={{filter: 'brightness(0) saturate(100%) invert(20%) sepia(10%) saturate(500%) hue-rotate(180deg)'}} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About SM Plastics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded by visionary entrepreneur Gopal Saraf, SM Plastics has been at the forefront 
              of injection moulding technology for over 25 years, setting industry standards for quality and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-gray-900">
                    <Award className="mr-3 h-8 w-8 text-blue-600" />
                    Our Heritage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    SM Plastics was established with a vision to provide high-quality injection 
                    moulded products to various industries. Under the leadership of Gopal Saraf, 
                    we have grown from a small workshop to a state-of-the-art manufacturing facility.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our commitment to excellence and continuous innovation has made us a trusted 
                    partner for businesses across multiple sectors.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality First Approach</h3>
                    <p className="text-gray-600">Every product undergoes rigorous quality control to meet the highest industry standards and customer expectations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Innovation Driven</h3>
                    <p className="text-gray-600">Continuous investment in latest technology and processes to stay ahead of industry trends and requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Customer Focused</h3>
                    <p className="text-gray-600">Tailored solutions and dedicated support to meet diverse manufacturing needs and business objectives.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Manufacturing Specialties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With our advanced machinery and technical expertise, we deliver precision-molded components 
              across diverse industries with consistent quality and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Card className="h-full border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <Package className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-gray-900">Pen Manufacturing</CardTitle>
                  <CardDescription className="text-gray-600">Primary Specialty</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    High-precision injection moulding for pen components including bodies, caps, 
                    and intricate internal mechanisms with exceptional quality standards.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <Cog className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Toy Components</CardTitle>
                  <CardDescription className="text-gray-600">Safe & Durable</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Child-safe, durable toy components manufactured with precise detailing, 
                    vibrant colors, and strict safety compliance standards.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                    <Package className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-gray-900">Industrial Containers</CardTitle>
                  <CardDescription className="text-gray-600">Heavy-Duty Solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Robust containers for industrial and commercial applications with 
                    superior strength, durability, and chemical resistance properties.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                    <Star className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-gray-900">Optical Frames</CardTitle>
                  <CardDescription className="text-gray-600">Precision Crafted</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lightweight, durable spectacle frames with precise dimensions, 
                    comfortable fit specifications, and superior optical clarity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose SM Plastics?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our decades of experience and commitment to excellence make us the preferred partner 
              for precision injection moulding solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="experience" className="border-gray-200">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center">
                    <Calendar className="mr-3 h-5 w-5 text-blue-600" />
                    <span className="text-gray-900 font-semibold">25+ Years of Industrial Experience</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Our quarter-century journey in the injection moulding industry has equipped us with 
                  unparalleled expertise in handling complex manufacturing challenges and delivering 
                  consistent quality across all product categories. This extensive experience enables 
                  us to anticipate and solve potential issues before they impact your production timeline.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="machinery" className="border-gray-200">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center">
                    <Factory className="mr-3 h-5 w-5 text-blue-600" />
                    <span className="text-gray-900 font-semibold">State-of-the-Art 22+ Machines</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Our facility houses over 22 advanced injection moulding machines with varying tonnage 
                  capacities, enabling us to handle projects of various scales and complexities while 
                  maintaining optimal production efficiency and the highest quality standards throughout 
                  the manufacturing process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="leadership" className="border-gray-200">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center">
                    <Users className="mr-3 h-5 w-5 text-blue-600" />
                    <span className="text-gray-900 font-semibold">Visionary Leadership by Gopal Saraf</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Under the guidance of founder Gopal Saraf, SM Plastics has grown from humble 
                  beginnings to become a trusted name in injection moulding. His commitment to 
                  innovation, quality, and customer satisfaction continues to drive our company's 
                  growth and reputation in the industry.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="specialization" className="border-gray-200">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center">
                    <Award className="mr-3 h-5 w-5 text-blue-600" />
                    <span className="text-gray-900 font-semibold">Specialized Expertise in Pen Manufacturing</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  While we excel in various product categories, our core expertise lies in pen 
                  manufacturing, where we have perfected the art of creating precision components 
                  that meet the most stringent industry standards. This specialization allows us 
                  to offer unmatched quality and efficiency in pen component production.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to discuss your injection moulding requirements? Contact us today for a consultation.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center space-x-3">
              <a href="tel:+919831033736" className="text-lg text-blue-700 font-semibold hover:underline flex items-center">
                <Phone className="h-5 w-5 mr-1" />+91 98310 33736
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <a href="mailto:smplastics@gmail.com" className="text-lg text-blue-700 font-semibold hover:underline flex items-center">
                <Mail className="h-5 w-5 mr-1" />smplastics@gmail.com
              </a>
            </div>
          </div>
          {/* Map */}
          <div className="mt-16">
            <Card className="overflow-hidden border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900">Our Location</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.698456789!2d88.31234567890123!3d22.634567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM4JzA0LjQiTiA4OMKwMTgnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SM Plastics Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Factory className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">SM Plastics</span>
            </div>
            <p className="text-gray-400">
              Leading Injection Moulding Manufacturer | Established 1998
            </p>
            <p className="text-gray-400">
              Founded by Gopal Saraf | 25+ Years of Manufacturing Excellence
            </p>
            <Separator className="my-8 bg-gray-700" />
            <p className="text-gray-500">
              © 2024 SM Plastics. All rights reserved. | Professional Injection Moulding Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

