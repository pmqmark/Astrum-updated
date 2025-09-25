'use client'
import { portfolioinfo } from '@/app/api/data';
import { Briefcase, Code, Globe, Users } from 'lucide-react'; // example icons
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const PortfolioCard = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1320, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  // rotate icons just as example
  const icons = [Briefcase, Code, Users, Globe]

  return (
    <div id='portfolio' className='dark:bg-darkmode mt-10 '>
      <div className='lg:px-9 m-auto px-0 max-w-[1600px] h-[330px] slider-container'>
        <Slider {...settings}>
          {portfolioinfo.map((item, index) => {
            const Icon = icons[index % icons.length] // pick icon by index
            return (
              <Link key={index} href={`/portfolio/${item.slug}`} passHref>
                <div className='px-3 group'>
  {/* ✅ Horizontal card with equal height */}
  <div className='flex items-start gap-4 p-6 h-[200px] bg-white dark:bg-darklight rounded-xl shadow-md hover:shadow-lg transition'>
    {/* Left: Icon */}
    <Icon className='w-10 h-10 text-primary flex-shrink-0' />

    {/* Right: Title + Info */}
    <div className='flex flex-col justify-center'>
      <h4 className='text-xl font-bold text-midnight_text dark:text-white group-hover:text-primary transition'>
        {item.title}
      </h4>
      <p className='text-secondary font-normal text-base dark:text-white/50 group-hover:text-primary transition'>
        {item.info}
      </p>
    </div>
  </div>
</div>

              </Link>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default PortfolioCard
