import LoaderCircle from '../../assets/svg/loader-circle.svg?react';
import LoaderCup from '../../assets/svg/loader-cup.svg?react';
import './index.css';

function Loader() {
  return (
    <div className="loader">
      <div className="loader-box">
        <LoaderCircle className="loader-circle" />
        <LoaderCup className="loader-cup" />
      </div>
    </div>
  );
}

export default Loader;
