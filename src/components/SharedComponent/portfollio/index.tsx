import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'

const Portfolio = () => {
  return (
    <section id='portfolio' className='bg-darkmode'>
      <div className='text-center lg:px-0 px-8'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            Why Students Choose Astrum
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pt-7 pb-4 md:max-w-5xl w-full m-auto dark:text-white'
          data-aos='fade-left'
          data-aos-delay='200'
          data-aos-duration='1000'>
          We're not just another loan company. We're your education partners, committed to making your dreams accessible and affordable.
        </h2>
       
      </div>
      <PortfolioCard />
    </section>
  )
}

export default Portfolio
