import cn from 'classnames';
import { useRef } from 'react';

import Circle from '@assets/svg/circle.svg?react';
import FireworksOne from '@assets/svg/fireworks-one.svg?react';
import FireworksTwo from '@assets/svg/fireworks-two.svg?react';
import Slogan from '@assets/svg/slogan.svg?react';
import TriangleBig from '@assets/svg/triangle-big.svg?react';
import TriangleInfo from '@assets/svg/triangle-info.svg?react';

import './index.css';
import { useAnimation } from '@hooks/useAnimation';

function Info() {
  const ref = useRef<HTMLDivElement | null>(null);
  const refSvg = useRef<SVGSVGElement | null>(null);

  useAnimation(ref, refSvg);

  return (
    <section className="info">
      <div ref={ref} className="info__content">
        <TriangleBig className="info__triangle-big" />
        <FireworksOne className="info__fireworks info__fireworks-one" />
        <Slogan ref={refSvg} className={cn('info__slogan')} />
        <div className="info__content-box1">
          <div className="info__content-text info__content-text-bro">
            DO.BRO COFFEE — Мы делаем добрый кофе!
          </div>
          <div className="info__content-box1-block">
            <div className="info__content-text info__content-text-help">
              Благотворительный фонд «Помощь» — Мы учим помогать!
            </div>
            <TriangleInfo className="info__triangle-info" />
          </div>
        </div>
        <div className="info__content-box2">
          <Circle className="info__circle" />
          <FireworksTwo className="info__fireworks info__fireworks-two" />
          <div className="info__content-text">
            ВМЕСТЕ МЫ УЧИМСЯ БЫТЬ ДОБРЫМИ! НАЧИНАЙ ВМЕСТЕ С НАМИ ПРЯМО СЕЙЧАС!
          </div>
        </div>
      </div>
      <img src="./img/tree.png" alt="Кусты" className="info__tree" />
    </section>
  );
}

export default Info;