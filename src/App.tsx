import { Routes, Route } from "react-router-dom";

// Assets
import { noiseGif } from "./assets";

// Pages
import Home from "./pages/Home";

// Layout
import { Navbar, Footer } from "./components/layout";

const App = () => {
  return (
    <>
      {/* Noise Overlay */}
      <div className="fixed inset-0 isolate -z-10">
        <img
          src={noiseGif}
          alt="Animated noise gif"
          className="h-full w-full object-fill opacity-30 mix-blend-screen"
        />
      </div>
      <Navbar />
      <main className="relative z-0">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
