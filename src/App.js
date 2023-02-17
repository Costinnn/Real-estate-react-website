import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
