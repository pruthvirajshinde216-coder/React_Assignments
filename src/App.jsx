import CharacterCounter from "./components/CharacterCounter";
import ProductQuantity from "./components/ProductQuantity";
import ColorPicker from "./components/ColorPicker";
import UserProfile from "./components/UserProfile";
import Feedback from "./components/Feedback";
import "./App.css";

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1>React Assignments</h1>
      </nav>

      {/* Main Content */}
      <div className="container">
        <CharacterCounter />
        <ProductQuantity />
        <ColorPicker />
        <UserProfile />
        <Feedback />
      </div>

      {/* Footer */}
      <footer className="footer">
        <h3>Created By</h3>
        <p><strong>Name:</strong> Pruthviraj Shrikant Shinde</p>
        
      </footer>
    </>
  );
}

export default App;