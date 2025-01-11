/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export const useAnimation = (
  ref: React.RefObject<HTMLDivElement | null>,
  refSvg: React.RefObject<SVGSVGElement | null>
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, isVisible]);

  useEffect(() => {
    if (!refSvg.current || !isVisible) return;

    const paths = refSvg.current.querySelectorAll('path');
    paths.forEach((path, index) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.opacity = '0.3';
      path.style.transition = `stroke-dashoffset 0.5s ease ${index * 0.05}s, opacity 1s ease ${index * 0.05}s`;

      setTimeout(() => {
        path.style.strokeDashoffset = '0';
        path.style.fill = 'white';
        path.style.opacity = '1';
      }, index * 10);
    });
  }, [refSvg, isVisible]);
};
