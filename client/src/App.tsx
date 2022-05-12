import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes/routes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const routes = useRoutes();

  return (
    <Router>
      <Header />
      <main>
        <div className='container'>
          {routes}
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
