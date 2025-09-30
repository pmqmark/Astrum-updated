'use client'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import profile from '../../../../public/images/logo/profile.png'

const testimonials = [
  {
    name: 'Priya Sharma',
    course: 'MS Computer Science',
    university: 'Stanford University',
    comment:
      
"Astrum made my Stanford dream possible when others said no. The process was so smooth, and they helped me understand every step. Today, I'm working at Google!",
    rating: 5,
    profile: profile,
    loanAmount: '₹75 Lakhs',
  },
  {
    name: 'Rahul Patel',
    course: 'MBA Finance',
    university: 'Harvard Business School',
    comment:
      'The team at Astrum was incredibly supportive throughout my application process. They helped me secure funding for Harvard when I thought it was impossible. Now I\'m working at Goldman Sachs!',
    rating: 5,
    profile: profile,
    loanAmount: '₹85 Lakhs',
  },
  {
    name: 'Ananya Singh',
    course: 'MS Data Science',
    university: 'MIT',
   comment:
      "Astrum's expertise in education loans is unmatched. They guided me through every step and helped me get the best rates. MIT was my dream, and they made it reality!",
    rating: 5,
    profile: profile,
    loanAmount: '₹70 Lakhs',
  },
  {
    name: 'Sophia Lee',
    course: 'Data Science',
    university: 'University of Oxford',
    comment:
      'Highly recommended! The team explained everything clearly and made the process stress-free.',
    rating: 5,
    profile: profile,
    loanAmount: '15 Lakhs',
  },
]

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section
      className="scroll-mt-24 bg-darklight border-none"
      id="testimonials"
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="pt-16 pb-12 text-center">
          <p className="font-medium md:text-5xl text-2xl text-midnight_text dark:text-white text-center max-w-3xl mx-auto">
            Real Students, Real Stories
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-3">
              <div className="bg-white dark:bg-darkmode rounded-xl shadow-md lg:h-[300px] md:h-[350px] h-[350px] p-6 flex flex-col">
                {/* Rating */}
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-5 h-5 ${
                        idx < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-base text-gray-700 dark:text-white/70 flex-1 mb-6">
                  “{t.comment}”
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center mt-auto">
                  {/* Left: Profile */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.profile}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <strong className="text-midnight_text dark:text-white block">
                        {t.name}
                      </strong>
                      <p className="text-sm text-gray-500 dark:text-white/50">
                        {t.course}, {t.university}
                      </p>
                    </div>
                  </div>

                  {/* Right: Loan */}
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary">{t.loanAmount}</p>
                    <p className="text-xs text-gray-500 dark:text-white/50">Loan Amount</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonial
