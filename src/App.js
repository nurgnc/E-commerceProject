import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header';
import Main from './components/Main';
import AllRelatedProducts from './components/AllRelatedProducts';
import AllBestSellerProducts from './components/AllBestSellerProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/onecikanlar" exact component={AllRelatedProducts} />
            <Route path="/coksatanlar" exact component={AllBestSellerProducts} />
          </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
