import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
  } from "react-router-dom";

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// Pages
import Home from "./pages/Home";
import Contact from "./pages/help/Contact.js";
import Faq from "./pages/help/Faq.js"; 
import NotFound from "./pages/NotFound.js";
import ContactUs from "./pages/ContactUs.js";
import ConnectivityForm from "./pages/ConnectivityForm.js";
import CreateTicket from "./pages/CreateTicket.js";

// Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>
      <Route path="connectivity" element={<ConnectivityForm />} />
      <Route path="ticket" element={<CreateTicket />} />
      <Route path="contact-us" element={<ContactUs />} />
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
