import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import ReachUs from "./ReachUs/ReachUs";
import Contact from "./Contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/reachUs" element={<ReachUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
