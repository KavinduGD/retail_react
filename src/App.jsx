import { Routes, Route } from "react-router-dom";
import Demand from "./pages/demand/Demand";

import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <div className="ml-32">
        <Routes>
          <Route path="/" element={<Demand />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
