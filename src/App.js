import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { AllAboutNfts } from './Components/AllAboutNfts';
import { Collections } from './Components/Collections';
import { NewAndNotable } from './Components/NewAndNotable';
import { CitiscapeSpotlight } from './Components/CitiscapeSpotlight';
import { BrowseByCategory } from './Components/BrowseByCategory';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className="top">
        <Navbar />
        <AllAboutNfts />
      </div>
      <div className="middle">
        <Collections/>
        <NewAndNotable/>
        <CitiscapeSpotlight/>
        <BrowseByCategory/>
      </div>
      <div className="last">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
