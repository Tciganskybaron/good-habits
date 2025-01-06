import LoaderCup from '../../assets/svg/loader-cup.svg?react';
import LoaderCircle from '../../assets/svg/loader-circle.svg?react';
import './index.css';

function Loader() {
  return (
    <>
      <div className="loader">
        <LoaderCircle className="loader-circle" />
        <LoaderCup className="loader-cup" />
      </div>

      <div className="text">
        <div className="text1">Текст №1</div>
        <div className="text2">Текст №2</div>
        <div className="text3">Текст №3</div>
      </div>
    </>
  );
}

export default Loader;
