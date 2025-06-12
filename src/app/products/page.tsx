"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Star, Box, ToyBrick, Factory, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  {
    label: "Pens",
    icon: <Package className="h-6 w-6 text-blue-600" />,
    products: [
      { name: "Classic Ball Pen", img: "/pen1.png" },
      { name: "Gel Pen", img: "/pen2.png" },
      { name: "Premium Roller", img: "/pen3.png" },
      { name: "Eco Pen", img: "/pen4.png" },
      { name: "Executive Pen", img: "/pen5.png" },
      { name: "Student Pen", img: "/pen6.png" },
      { name: "Retractable Pen", img: "/pen7.png" },
      { name: "Fine Liner", img: "/pen8.png" },
      { name: "Multi-color Pen", img: "/pen9.png" },
      { name: "Stylus Pen", img: "/pen10.png" },
      { name: "Designer Pen", img: "/pen11.png" },
      { name: "Budget Pen", img: "/pen12.png" },
    ],
  },
  {
    label: "Containers",
    icon: <Box className="h-6 w-6 text-green-600" />,
    products: [
      { name: "Food Container", img: "/container1.png" },
      { name: "Storage Box", img: "/container2.png" },
      { name: "Industrial Bin", img: "/container3.png" },
      { name: "Multi-use Tub", img: "/container4.png" },
    ],
  },
  {
    label: "Pencil Boxes",
    icon: <Star className="h-6 w-6 text-purple-600" />,
    products: [
      { name: "Classic Pencil Box", img: "/pencil1.png" },
      { name: "Double Layer Box", img: "/pencil2.png" },
      { name: "Cartoon Box", img: "/pencil3.png" },
      { name: "Transparent Box", img: "/pencil4.png" },
    ],
  },
  {
    label: "Toys",
    icon: <ToyBrick className="h-6 w-6 text-orange-600" />,
    products: [
      { name: "Toy Car", img: "/toy1.png" },
      { name: "Building Blocks", img: "/toy2.png" },
      { name: "Mini Truck", img: "/toy3.png" },
      { name: "Puzzle Toy", img: "/toy4.png" },
    ],
  },
];

export default function ProductsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-20 flex flex-col">
      {/* Navbar (responsive) */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Factory className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900 block">SM Plastics</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
              <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Products</Link>
              <Link href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</Link>
              <Link href="/#experience" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Experience</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</Link>
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
              <Link href="/" className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/#about" className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/products" className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Products</Link>
              <Link href="/#services" className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link href="/#experience" className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Experience</Link>
              <Link href="/#contact" className="block text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
          )}
        </div>
      </nav>
      <div className="container-custom pt-32 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Our Products</h1>
        <p className="text-lg text-gray-600 mb-8">Browse our wide range of high-quality plastic products, manufactured with precision and care.</p>
      </div>
      <div className="space-y-16 flex-1">
        {categories.map((cat) => (
          <section key={cat.label} className="container-custom">
            <div className="flex items-center mb-4">
              {cat.icon}
              <h2 className="text-2xl font-semibold ml-2 text-gray-900">{cat.label}</h2>
              <Badge className="ml-4 bg-blue-100 text-blue-700 border-blue-200">{cat.products.length} Products</Badge>
            </div>
            <div className="overflow-x-auto hide-scrollbar">
              <div className="flex space-x-6 pb-2">
                {cat.products.map((prod) => (
                  <Card key={prod.name} className="w-64 min-w-[16rem] h-72 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow border-0 bg-white">
                    <CardHeader className="flex flex-col items-center pt-6 pb-2">
                      <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                        {/* Placeholder image */}
                        <span className="text-gray-400 text-4xl">📦</span>
                      </div>
                      <CardTitle className="text-lg text-center text-gray-900 font-semibold mt-2">{prod.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-end pb-6">
                      <p className="text-gray-500 text-sm text-center">High quality, durable, and customizable.</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
      <div className="container-custom flex flex-col items-center mt-16">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg" asChild>
          <a href="mailto:smplastics@gmail.com">Get Quote</a>
        </Button>
      </div>
      <footer className="bg-gray-900 text-white py-12 mt-20">
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
            <hr className="my-8 border-gray-700" />
            <p className="text-gray-500">
              © 2024 SM Plastics. All rights reserved. | Professional Injection Moulding Solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Add this to globals.css for hiding scrollbars if not present:
// .hide-scrollbar::-webkit-scrollbar { display: none; }
// .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } 