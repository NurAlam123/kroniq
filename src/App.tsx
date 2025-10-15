import Navbar from "./components/layout/Navbar";
import BestSellers from "./pages/Home/BestSellers";
import BrandInfo from "./pages/Home/BrandInfo";
import Collections from "./pages/Home/Collections";
import Hero from "./pages/Home/Hero";
import Recommendations from "./pages/Home/Recommendations";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="max-screen">
        <BrandInfo />
        <Collections />
        <Recommendations />
        <BestSellers />
      </div>
    </div>
  );
}

export default App;
