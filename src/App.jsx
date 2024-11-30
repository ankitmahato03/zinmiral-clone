import Faq from "./components/FAQ";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Onboarding from "./components/Onboarding";
import OurServices from "./components/OurServices";
import WhyZinmiral from "./components/WhyZinmiral";

function App() {
  return (
    <div className="bg-[#E6F4FE] flex flex-col px-3 sm:px-6 md:px-12 lg:px-48">
      <Navbar />
      <Home />
      <OurServices />
      <Onboarding />
      <WhyZinmiral />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
