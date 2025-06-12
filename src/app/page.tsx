'use client';

import React from 'react';
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
  Zap
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
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Factory className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">SM Plastics</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Experience</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
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

        <div className="relative z-10 flex items-center min-h-screen container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">
                  <Award className="h-4 w-4 mr-2" />
                  Founded by Gopal Saraf
                </Badge>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">SM</span> Plastics
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mt-4 font-light">
                  Precision Injection Moulding Excellence
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  With over 25 years of industrial experience and 22+ advanced machines, 
                  we deliver high-precision injection moulded components for diverse industries 
                  with unwavering commitment to quality and innovation.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Explore Our Capabilities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Quote
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-8 pt-8">
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
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                  <div className="text-gray-600 font-medium">Years of Excellence</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">22+</div>
                  <div className="text-gray-600 font-medium">Advanced Machines</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
                  <div className="text-gray-600 font-medium">Products Delivered</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="text-gray-600 font-medium">Quality Assured</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About SM Plastics</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Founded by visionary entrepreneur Gopal Saraf, SM Plastics has been at the forefront 
                of injection moulding technology for over 25 years, setting industry standards for quality and precision.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
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
              </motion.div>

              <motion.div variants={fadeInUp}>
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Manufacturing Specialties</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With our advanced machinery and technical expertise, we deliver precision-molded components 
                across diverse industries with consistent quality and reliability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={fadeInUp}>
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
              </motion.div>

              <motion.div variants={fadeInUp}>
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
              </motion.div>

              <motion.div variants={fadeInUp}>
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
              </motion.div>

              <motion.div variants={fadeInUp}>
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose SM Plastics?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our decades of experience and commitment to excellence make us the preferred partner 
                for precision injection moulding solutions.
              </p>
            </motion.div>

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
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600">
                Ready to discuss your injection moulding requirements? Contact us today for a consultation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp}>
                <Card className="border-gray-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">smplastics@gmail.com</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Manufacturing Facility</h3>
                        <p className="text-gray-600">
                          11, Haji Banku Ln, Jawahar Lal Nehru Sarani,<br />
                          Dharmadanga, Konnagar,<br />
                          Kolkata, West Bengal 712235
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-gray-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Request a Quote</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-gray-700">Name</Label>
                          <Input id="name" placeholder="Your name" className="border-gray-300" />
                        </div>
                        <div>
                          <Label htmlFor="company" className="text-gray-700">Company</Label>
                          <Input id="company" placeholder="Company name" className="border-gray-300" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" className="border-gray-300" />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                        <Input id="subject" placeholder="Project requirements" className="border-gray-300" />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-gray-700">Message</Label>
                        <textarea
                          id="message"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          rows={4}
                          placeholder="Tell us about your project requirements..."
                        />
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div variants={fadeInUp} className="mt-16">
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
            </motion.div>
          </motion.div>
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

