import "./App.css";
import User from "./pages/user";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<User />} />
      </Routes>
    </section>
  );
}

export default App;
