import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from "./components/Root";
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import CollectionPage from "./components/CollectionPage";
import ItemDetails from "./components/ItemDetails/ItemDetails";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/Dev_test-react/" element={<Root />} />
          <Route path="/Dev_test-react/About/" element={<AboutUs />} />
          <Route path="/Dev_test-react/Contacts/" element={<ContactUs />} />
          <Route path="/Dev_test-react/Collection/" element={<CollectionPage />} />
          <Route path="/Dev_test-react/item/:id" element={<ItemDetails />} />
        </Routes>
      </Router>
  );
};
export default App;
