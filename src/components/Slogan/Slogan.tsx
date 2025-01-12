import cn from 'classnames';
import { useRef, useState, useEffect } from 'react';

import SloganSvgLittle from '@assets/svg/slogan-little.svg?react';
import SloganSvgMidle from '@assets/svg/slogan-midle.svg?react';
import SloganSvgBig from '@assets/svg/slogan.svg?react';

import { useAnimation } from '@hooks/useAnimation';
import './index.css';

type Size = 'midle' | 'little' | 'big';

function Slogan({ className }: { className: string }) {
  const refBig = useRef<SVGSVGElement | null>(null);
  const refMidle = useRef<SVGSVGElement | null>(null);
  const refLittle = useRef<SVGSVGElement | null>(null);

  const [screen, setScreen] = useState<Size>(matchMedia());

  const size = {
    big: refBig,
    midle: refMidle,
    little: refLittle,
  };

  function getSize(): {
    readonly midle: boolean;
    readonly little: boolean;
  } {
    const midle = window.matchMedia('(max-width: 768px)').matches;
    const little = window.matchMedia('(max-width: 355px)').matches;

    return { midle, little } as const;
  }

  function matchMedia(): Size {
    const { midle, little } = getSize();
    if (little) return 'little';
    if (midle) return 'midle';
    return 'big';
  }

  useEffect(() => {
    const handleResize = () => setScreen(matchMedia());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useAnimation(size[screen]);

  return (
    <>
      <SloganSvgBig ref={refBig} className={cn(className, 'slogan-big')} />
      <SloganSvgMidle
        ref={refMidle}
        className={cn(className, 'slogan-midle')}
      />
      <SloganSvgLittle
        ref={refLittle}
        className={cn(className, 'slogan-little')}
      />
    </>
  );
}

export default Slogan;
