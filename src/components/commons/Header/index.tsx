import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import { useCallback, useState } from 'react';
import { MenuIcon } from '@/components/icons/MenuIcon';
import { Menu } from './Menu';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
});


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  },[]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  },[]);

  return (
    <header
      className={`${roboto.className} bg-h-blue-900 text-sm flex py-1 px-5 justify-between items-center sticky top-0 z-20`}
    >
      <Link href="/">
        <Image src="/next.js.svg" width={55} height={55} alt="imagem do icon" />
      </Link>
      <button className='p-1 md:hidden' onClick={openMenu}>
        <MenuIcon className='fill-white w-10 h-10'/>
      </button>
      <nav className="hidden md:flex items-center gap-10 text-md">
        <Link href="/">Sobre mim</Link>
        {/* <Link href="/portfolio">Portfolio</Link> */}
        <Link href="/contatos">Entre em contato</Link>
      </nav>
      <Menu isVisible={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};