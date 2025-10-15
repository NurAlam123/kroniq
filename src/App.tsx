import Navbar from "./components/layout/Navbar";
import BrandInfo from "./pages/Home/BrandInfo";
import Collections from "./pages/Home/Collections";
import Hero from "./pages/Home/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="max-screen">
        <BrandInfo />
        <Collections />
      </div>
    </div>
  );
}

export default App;
