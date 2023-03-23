import HomePage from "./routes/HomePage";
// import Navigation from "./components/Navigation";
// import Footer from "./components/Footer";

import NavFooter from "./routes/NavFooter";
import AboutUsPage from "./routes/AboutUsPage";
import ContactPage from "./routes/ContactPage";
import HousesPage from "./routes/HousesPage";
import HousePage from "./routes/HousePage";
import SitePage from "./routes/SitePage";

import { Route, Routes } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavFooter />}>
          <Route index element={<HomePage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="houses" element={<HousesPage />} />
          <Route path="houses/:id" element={<HousePage />} />
          <Route path="site" element={<SitePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

/* <Navigation />
<Routes>
  <Route index element={<HomePage />} />
  <Route path="aboutus" element={<AboutUsPage />} />
  <Route path="contact" element={<ContactPage />} />
  <Route path="houses" element={<HousesPage />} />
  <Route path="site" element={<SitePage />} />
</Routes>
<Footer /> */
