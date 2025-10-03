import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Footer: FC = () => {
  return (
     <footer className='bg-darkmode relative z-1 border-t border-dark_border px-6'>
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo & About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/">
              <Image
                src="/images/logo/astrumlogo.png"
                alt="Astrum Logo"
                width={160}
                height={50}
                style={{ width: '90px', height: '90px' }}
                quality={100}
                className="dark:block hidden"
              />
              <Image
                src="/images/logo/astrumwhite.png"
                alt="Astrum Logo"
                width={160}
                height={50}
                style={{ width: '90px', height: '90px' }}
                quality={100}
                className="dark:hidden"
              />
            </Link>
            <p className="mt-6 text-sm leading-relaxed font-bold text-black dark:text-white">
              Finance Your Future, Not Just Your Fees. Making education loans
              simple, transparent, and accessible for every student.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-blue-500 text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#" className="hover:text-primary font-bold">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-primary font-bold">
                  Loan Products
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-primary font-bold">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/#" className="hover:text-primary font-bold">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-blue-500 text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-primary font-bold">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary font-bold">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary font-bold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary font-bold">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-blue-500 text-xl font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+919846323331</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>hello@astrumfintech.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-500" />
                <span>WhatsApp Support</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span> Cochin, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-dark_border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
            <li>
              <Link href="/#about" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium">
               © 2024 Astrum Fintech. All rights reserved
              </Link>
            </li>
           
           
          </ul>
          <p className="text-sm text-black dark:text-white font-medium text-center md:text-right">
            🔒 Your data is 100% secure with us
            
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
