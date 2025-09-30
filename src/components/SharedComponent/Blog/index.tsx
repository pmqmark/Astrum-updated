'use client'
import Image from 'next/image'

const CtaSection = () => {
  return (
    <section className="py-16 bg-darklight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container */}
        <div className="flex flex-col lg:flex-row items-center gap-8 bg-darkmode rounded-2xl shadow-xl overflow-hidden transition-all duration-700">
          
          {/* Left: Image */}
          <div className="lg:w-1/2 w-full relative">
            <Image
              src="/images/blog/studyabroad.webp"
              alt="CTA Illustration"
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto' }}
              className="object-cover"
            />
          </div>

          {/* Right: Text + Buttons */}
          <div className="lg:w-1/2 w-full p-8 md:p-12 text-center lg:text-left">
            {/* Icon */}
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto lg:mx-0 mb-4 bg-blue-500 rounded-full flex items-center justify-center opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m18-6V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2m18 0H3"
                  />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-midnight_text dark:text-white">
              Can't Find Your Dream Destination?
            </h2>

            {/* Text */}
            <p className="font-lato text-lg mb-8 max-w-lg mx-auto lg:mx-0 text-gray-700 dark:text-white/70">
              We partner with institutions worldwide. If you have an admission
              letter, we'll find a way to fund your education.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Explore All Destinations
              </button>
              <button className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-blue-600 transition">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
