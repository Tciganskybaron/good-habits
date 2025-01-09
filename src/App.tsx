import GoodHabits from '@widgets/GoodHabits/GoodHabits';
import Header from '@components/Header/Header';
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
    </>
  );
}

export default App;
