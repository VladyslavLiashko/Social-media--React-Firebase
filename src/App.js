import './App.css';
import { BrowserRouter } from "react-router-dom"
import AppRouter from './Components/AppRouter/appRouter';
import { Auth } from './Components/Auth/Auth';
import { Login } from './Components/Login/Login';
import { Header } from './Components/Header/Header';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Auth />
      </BrowserRouter>
    </div>
  );
}

export default App;
