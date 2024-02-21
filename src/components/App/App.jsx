import Bookings from "@/components/Bookings/Bookings.jsx";
import AppHeader from "../AppHeader/AppHeader.jsx";
import Card from "../Card/Card.jsx";
import Footer from "../footer/Footer.jsx";

import "./App.scss";

const App = () => (
  <>
    <div>
      <AppHeader />
      <Bookings />
      <Card title="This is card component" image="" />
    </div>
    <Footer />
  </>
);

export default App;
