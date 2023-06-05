import { CopyButton } from '@/components/commons/CopyButton';
import Head from 'next/head';

const Contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos | Wernek</title>
      </Head>
      <div className='mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px32'>
        <h1 className='text-5xl md:text-7xl font-bold text-center '>Contatos</h1>
        <ul className='table mx-auto space-y-6 md:space-y-8'>
          <li className='md:text-xl'>
            <span className='font-bold'>E-mail</span>
            <div className='flex gap-1 md:gap-3 items-center'>
              <a 
              href="mailto:marcos.wernek@gmail.com"
              className='text-sm md:text-lg text-slate-300 underline truncate'>
                marcos.wernek@gmail.com
                </a>
                <CopyButton textToCopy='marcos.wernek@gmail.com'/>
            </div>
          </li>
          <li className='md:text-xl'>
            <span className='font-bold'>LinkedIn</span>
            <div className='flex gap-1 md:gap-3 items-center'>
              <a 
              href="https://www.linkedin.com/in/marcoswernek/"
              className='text-sm md:text-lg text-slate-300 underline truncate'> 
              https://www.linkedin.com/in/marcoswernek/
              </a>
            </div>
          </li>
          <li className='md:text-xl'>
            <span className='font-bold'>GitHub</span>
            <div className='flex gap-1 md:gap-3 items-center'>
              <a 
              href="https://github.com/marcoswernek"
              className='text-sm md:text-lg text-slate-300 underline truncate'>
                https://github.com/marcoswernek</a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contatos;