import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Router basename="/class-project"> {/* Set basename to match your repo name */}
      <CssBaseline />
      <Header />

      {/* Let each page handle its own layout */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
