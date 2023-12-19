import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./componets/Home";

import './styles/App.scss';
import './styles/Header.scss';
import './styles/Home.scss';
import './styles/Footer.scss';
import './styles/Contact.scss';
import './styles/Responsive.scss';
import Footer from "./componets/Footer";
import Contact from "./componets/Contact";
import Services from "./componets/Services";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
 