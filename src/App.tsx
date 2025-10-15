import Navbar from "./components/layout/Navbar";
import BrandInfo from "./pages/Home/BrandInfo";
import Collection from "./pages/Home/Collection";
import Hero from "./pages/Home/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="max-screen">
        <BrandInfo />
        <Collection />
      </div>
    </div>
  );
}

export default App;
