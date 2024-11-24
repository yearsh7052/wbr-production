import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Homepage from "./Screens/Homepage";
import Portfolio from "./Screens/Portfolio";
import ClientSpeaks from "./Screens/ClientSpeaks";
import Services from "./Screens/Services";
import Stories from "./Screens/Stories";
import AboutUs from "./Screens/AboutUs";
import WeddingsByRishabh from "./Screens/WeddingsByRishabh";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]); 

  useEffect(() => {
    let title = "Welcome to Weddings By Rishabh";
    let metaDescription = "Welcome to Weddings By Rishabh";

    switch (pathname) {
      case "/":
        title = "Welcome to Weddings By Rishabh";
        metaDescription = "Welcome to Weddings By Rishabh";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/1" element={<LandingPage />} />
      <Route path="/" element={<Homepage/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/clientSpeaks" element={<ClientSpeaks/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/stories" element={<Stories/>} />
      <Route path="/aboutUs" element={<AboutUs/>} />
      <Route path="/7007" element={<WeddingsByRishabh/>} />

    </Routes>
  );
}
export default App;
