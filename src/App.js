import './App.css';
import Router from './Config/Router';
import { default as TopBar } from './Layouts/TopBar/Index';
import { default as Footer } from './Layouts/Footer/Index';




function App() {
  return (
    <div>
      <TopBar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
