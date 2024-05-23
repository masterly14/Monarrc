'use client';
import { motion } from 'framer-motion';
import GlobeComponent from './components/ui/GlobeComponent';
import NavBar from './components/ui/Navbar/NavBar';
import { HeroHighlight, Highlight } from './components/ui/HeroHighlight';
import { BentoGridThirdDemo } from './components/ui/BentoGrid';

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <section className="w-full flex-grow flex-col justify-center">
        <div className="w-full">
          <GlobeComponent />
        </div>
      </section>
      <section className="w-full flex-grow mt-40">
        <div className="p-4 flex flex-col">
    
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className=" mb-20 text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
              With insomnia, nothing&apos;s real. Everything is far away.
              Everything is a{' '}
              <Highlight className="text-black dark:text-white">
                Automatiza, gestiona y Gana.
              </Highlight>
            </motion.h1>
            <BentoGridThirdDemo />
          </HeroHighlight>
        </div>
      </section>
    </div>
  );
}
