import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Students from "./components/Students/Students";

function App() {
  return (
    <div className="App">
      <Header />
      <Students/>
      <Footer />
    </div>
  );
}

export default App;
