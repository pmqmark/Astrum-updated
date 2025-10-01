'use client'
import Link from 'next/link'

const CheckEligibility = () => {
  return (
    <section className="py-16 bg-darkmode dark:bg-darklight">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Container */}
        <div className="transition-all duration-700 transform opacity-100 translate-y-0">
          {/* Heading */}
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-midnight_text dark:text-white mb-4">
            Ready to Start Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#164069] to-[#13C8EC]">
              Education Journey?
            </span>
          </h2>

          {/* Description */}
          <p className="font-lato text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of students who've made their dreams reality. Let's
            make yours happen too.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/apply">
              <button className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:opacity-90 transition flex items-center justify-center">
                Check My Eligibility
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </Link>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 rounded-lg border border-gray-400 text-gray-800 dark:text-white dark:border-white hover:bg-white dark:hover:bg-gray-700 transition font-semibold flex items-center justify-center">
                💬 WhatsApp Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckEligibility
