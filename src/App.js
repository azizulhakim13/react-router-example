import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
  } from "react-router-dom";

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/help/Contact.js";
import Faq from "./pages/help/Faq.js"; 

// Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./pages/NotFound.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (  
    <RouterProvider router = {router} />
  ); 
}

export default App;
