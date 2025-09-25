import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <Image
        src="/images/logo/astrumwhite.png"
        alt="logo"
        width={30}
        height={30}
        style={{ width: '90px', height: '90px' }}
        quality={100}
        className='dark:hidden'
      />
      <Image
        src="/images/logo/astrumlogo.png"
        alt="logo"
        width={30}
        height={30}
        style={{ width: "90px", height: '90px' }}
        quality={100}
        className='dark:block hidden'
      />
    </Link>
  );
};

export default Logo;
