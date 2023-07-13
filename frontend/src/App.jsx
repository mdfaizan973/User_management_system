import logo from "./logo.svg";
import "./App.css";
import All_Routes from "./Components/All_Routes";
import Navbar from "./Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <All_Routes />
    </div>
  );
}

export default App;
