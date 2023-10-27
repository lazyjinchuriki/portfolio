import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TopButton } from "./components/TopButton";
import { Toaster, toast } from "sonner";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    toast.success("Welcome to my portfolio!");
  }, []);

  return (
    <div className="App">
      <Toaster richColors expand={true} />
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <TopButton />
    </div>
  );
}

export default App;
