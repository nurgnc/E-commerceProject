import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header';
import RelatedProducts from './components/RelatedProducts';
import BestSellerProducts from './components/BestSellerProducts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <RelatedProducts />
      <BestSellerProducts />
      <Footer />
    </div>
  );
}

export default App;
