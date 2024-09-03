import Accesories from './components/Accesories';
import Collection from './components/Collection';
import Hero from './components/Hero';
import NavBar from './components/NavBar'
import Store from './components/Store';
import Offers from './components/Offers';
import Footer from './components/Footer';


function App() {
  return (
    <div>
       <NavBar/>
       <Hero/>
       <Collection/>
       <Store/>
       <Accesories/>
       <Offers/>
       <Footer/>

    </div>
  );
}

export default App;
