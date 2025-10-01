import CheckEligibility from '@/components/CheckEligibility';
import Counter from '@/components/Home/Counter';
import Hero from '@/components/Home/Hero';
import OurPartners from '@/components/Home/OurPartners.jsx';
import Services from '@/components/Home/Services';
import Progresswork from '@/components/Home/WorkProgress';
import Blog from '@/components/SharedComponent/Blog';
import Portfolio from '@/components/SharedComponent/portfollio';
import Testimonial from '@/components/SharedComponent/Testimonial';
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Astrum Fintech",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter  isColorMode={false} />
      <Progresswork  isColorMode={false} />
      <Services />
      <Portfolio />
      <Testimonial />
      <OurPartners/>
      <Blog />
      <CheckEligibility/>
      {/* <Contactform /> */}
    </main>
  )
}
