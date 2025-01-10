import GoodHabits from '@widgets/GoodHabits/GoodHabits';
import Header from '@widgets/Header/Header';
import Footer from '@widgets/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className="box box-one box-white">
        <Header />
        <GoodHabits />
      </div>
      <div className="box box-two box-green">dd</div>
      <div className="box box-three box-white">dd</div>
      <Footer className="box box-four box-green" />
    </>
  );
}

export default App;
