import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Tech from "./Components/Tech";
import About from "./Components/About";
import Project from "./Components/Projects";
import { useState } from "react";
import { ProjectData } from "./assests/data";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {

  //using useState to pass the required data to the project section 
  const [data, setdata] = useState(ProjectData);
  console.log(data);

  return (
    <div className="App">
      <Navbar />

      {/* hero section */}
      <Hero />

      {/* TechStack Section  */}
      <Tech></Tech>

      {/* project section */}
      <Project data={data}></Project>

      {/* About me section */}
      <About></About>

      {/* contact me */}

      <Contact></Contact>

      {/* footer */}
      <Footer></Footer>

      
    </div>


  );
}

export default App;
