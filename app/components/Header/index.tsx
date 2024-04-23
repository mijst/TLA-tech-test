
import Image from 'next/image';
import Link from 'next/link';
import { Caveat } from 'next/font/google';

const caveat = Caveat({ subsets: ["latin"] });

const Header: React.FC = () => {
  return (
    <header className="min-h-20 flex items-center py-4 justify-between pr-20 flex-row bg-[rgb(0,128,128)] drop-shadow-xl">
      <Link href='/'>
        <h1 className={`text-5xl lg:text-6xl ml-10 font-bold text-white ${caveat.className}`}>TLA Cars.</h1>
      </Link>
      <Link href="/">
        <Image src='/home.svg' alt='home icon' height={32} width={32} className='invert mr-4' />
      </Link>
    </header>
  );
};

export default Header;
