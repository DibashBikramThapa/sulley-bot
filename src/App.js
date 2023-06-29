import logo from './logo.svg';
import './assets/scss/common.scss'
import './assets/css/index.css'

import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import TradeInfo from './Components/TradeInfo/TradeInfo';


function App() {
  return (
    <div className="container mx-auto p-5">
      <Header/>
      <HeroSection/>
      <TradeInfo/>
    </div>
  );
}

export default App;
