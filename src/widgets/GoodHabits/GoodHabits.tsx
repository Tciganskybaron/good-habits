import './index.css';
import Square from '@assets/svg/square.svg?react';
import CloudsBigRight from '@assets/svg/clouds-big-right.svg?react';
import CloudsBigLeft from '@assets/svg/clouds-big-left.svg?react';
import Clouds from '@assets/svg/clouds.svg?react';

function GoodHabits() {
  return (
    <section className="content-good">
      <div className="content-good__box">
        <div className="content-good__square">
          <Square className="content-good__square-content" />
        </div>
        <h1 className="content-good__title">ХОРОШИЕ ПРИВЫЧКИ</h1>
        <div className="content-good__text">
          СОВМЕСТНЫЙ ПРОЕКТ БЛАГОТВОРИТЕЛЬНОГО ФОНДА «ПОМОЩЬ» И СЕТИ КОФЕЕН
          DO.BRO COFFEE
        </div>
        <div className="content-good__video">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="./img/small-cup2.png"
          >
            <source type="video/webm" src="./video/hero-img.webm" />
            <source
              type="video/mp4"
              src="https://bf-pomosch.ru/wp-content/themes/cfhelp/сoffe/images/hero-img.mp4"
            />
            Ваш браузер не поддерживает видео.
          </video>
          <Clouds className="content-good__clouds" />
        </div>
      </div>
      <CloudsBigRight className="content-good__clouds-big-right" />
      <CloudsBigLeft className="content-good__clouds-big-left" />
    </section>
  );
}

export default GoodHabits;
