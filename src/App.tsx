import './App.scss';
import Header from './common/Header';
import Banner from './common/Banner';
import LocationDetails from './pages/LocationDetails';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner content={'Place your Bid(1/4 step)'} />
      <main>
        <LocationDetails />
      </main>
    </div>
  );
}

export default App;
