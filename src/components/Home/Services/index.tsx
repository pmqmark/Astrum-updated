import { Servicebox } from '@/app/api/data'
import { Users } from 'lucide-react'

const Services = () => {
  return (
    <section className='bg-section dark:bg-darklight' id='services'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
           Study Anywhere, We're Here
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-20 md:max-w-5xl w-full m-auto dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          From Ivy League to IITs, we fund education dreams across the globe. Your destination, our support.
        </h2>
        <div className='grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7'>
          {Servicebox.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'
              data-aos-offset='300'
              className='col-span-4 bg-white flex flex-col justify-between items-center text-center py-4 px-7 shadow-service rounded-md gap-5 dark:bg-darkmode'>
              <h3 className='max-w-44 mx-auto text-2xl font-bold bg-gray-400 p-2 rounded-full'>
                {item.head}
              </h3>
              <h3 className='max-w-44 mx-auto text-2xl font-bold'>
                {item.title}
              </h3>
              <p className='dark:text-white/50 text-base font-normal'>
                {item.description}
              </p>
              <div className="flex items-center space-x-2">
  <Users className="w-5 h-5 text-primaryColor" />
  <p className="dark:text-white/50 text-base font-normal">
    {item.description1}
  </p>
</div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
