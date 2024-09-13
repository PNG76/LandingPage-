import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MessageSquare, BarChart, Zap, DollarSign, Users, Calendar, CheckCircle } from "lucide-react"
import Image from 'next/image'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="fixed top-0 w-full bg-gray-900 z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Image src="/LineTech__1_-removebg-preview.png" alt="Yeemail Agency Logo" width={40} height={40} />
            <span className="ml-2 text-lg font-bold">Yeemail Agency</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="#services">
              Services
            </Link>
            <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="#benefits">
              Benefits
            </Link>
            <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="#faq">
              FAQ
            </Link>
            <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="#book-audit">
              Book Audit
            </Link>
            <Button variant="outline" size="sm">
              Book a Free Audit
            </Button>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 p-4">
            <Link className="block py-2 hover:text-blue-500 transition-colors" href="#services">
              Services
            </Link>
            <Link className="block py-2 hover:text-blue-500 transition-colors" href="#benefits">
              Benefits
            </Link>
            <Link className="block py-2 hover:text-blue-500 transition-colors" href="#faq">
              FAQ
            </Link>
            <Link className="block py-2 hover:text-blue-500 transition-colors" href="#book-audit">
              Book Audit
            </Link>
            <Button variant="outline" size="sm" className="mt-2 w-full">
              Book a Free Audit
            </Button>
          </div>
        )}
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Skyrocket Your E-commerce Revenue with Email & SMS Marketing
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Unlock the full potential of your DTC brand with our done-for-you email and SMS marketing services. No limits, just results.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Book a Free Audit
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Trusted by Leading DTC Brands</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-32 h-16 bg-gray-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="benefits">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Why Choose Yeemail Agency?</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Lightning-Fast Setup</h3>
                <p className="text-gray-400">Get your campaigns up and running in days, not weeks.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChart className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Data-Driven Strategies</h3>
                <p className="text-gray-400">Leverage advanced analytics to maximize your ROI.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <DollarSign className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Revenue-Focused</h3>
                <p className="text-gray-400">We're not just about opens and clicks – we're about driving sales.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800" id="services">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Our Services</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg">
                <MessageSquare className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Email Marketing</h3>
                <p className="text-gray-400">Personalized campaigns that convert subscribers into loyal customers.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg">
                <svg
                  className="h-12 w-12 mb-4 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M14 9l-4 4" />
                  <path d="M10 9l4 4" />
                </svg>
                <h3 className="text-xl font-bold mb-2">SMS Marketing</h3>
                <p className="text-gray-400">Timely, targeted messages that boost engagement and sales.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg">
                <Users className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Strategy & Optimization</h3>
                <p className="text-gray-400">Continuous improvement to keep you ahead of the competition.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">What Our Clients Say</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-800 p-6 rounded-lg">
                  <p className="text-gray-300 mb-4">"Yeemail Agency has transformed our email marketing. Our revenue has increased by 40% since we started working with them."</p>
                  <p className="font-bold">John Doe, CEO of BrandX</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800" id="faq">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How quickly can I see results?</AccordionTrigger>
                <AccordionContent>
                  Many clients see improvements within the first month. However, significant results typically become apparent after 2-3 months as we optimize and refine our strategies.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you offer integration with my existing e-commerce platform?</AccordionTrigger>
                <AccordionContent>
                  Yes, we integrate seamlessly with all major e-commerce platforms including Shopify, WooCommerce, Magento, and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What kind of reporting do you provide?</AccordionTrigger>
                <AccordionContent>
                  We provide comprehensive monthly reports detailing key metrics such as open rates, click-through rates, conversion rates, and revenue generated. We also offer real-time dashboards for continuous monitoring.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do you ensure compliance with email and SMS regulations?</AccordionTrigger>
                <AccordionContent>
                  We strictly adhere to all relevant regulations including GDPR, CAN-SPAM, and TCPA. Our team stays up-to-date with the latest compliance requirements to ensure your marketing efforts are always within legal boundaries.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900" id="book-audit">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Book Your Free Email Marketing Audit
                </h2>
                <p className="text-xl text-gray-400">
                  Discover untapped revenue in your email marketing strategy. Our experts will analyze your current setup and provide actionable insights to boost your performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>In-depth analysis of your email campaigns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Personalized recommendations for improvement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>30-minute strategy call with our experts</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 w-full max-w-md">
                <div className="bg-white p-1 rounded-lg shadow-xl">
                  <iframe
                    src="https://calendar.google.com/calendar/embed?src=your-calendar-id%40group.calendar.google.com&ctz=America%2FNew_York"
                    style={{border: 0}}
                    width="100%"
                    height="400"
                    frameBorder="0"
                    scrolling="no"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="mt-4 text-sm text-gray-400 text-center">
                  Choose a time slot that works for you. Our team will confirm your appointment within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Boost Your E-commerce Revenue?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't miss out on potential sales. Let our experts help you optimize your email and SMS marketing strategy.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Book a Free Audit
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-900 border-t border-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Email Marketing</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">SMS Marketing</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Strategy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Webinars</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">GDPR</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2023 Yeemail Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}