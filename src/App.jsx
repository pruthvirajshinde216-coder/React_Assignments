import CharacterCounter from "./components/CharacterCounter";
import ProductQuantity from "./components/ProductQuantity";
import ColorPicker from "./components/ColorPicker";
import UserProfile from "./components/UserProfile";
import Feedback from "./components/Feedback";

function App() {
  return (
    <div className="container">
      <h1>React useState Assignments</h1>

      <CharacterCounter />
      <ProductQuantity />
      <ColorPicker />
      <UserProfile />
      <Feedback />
    </div>
  );
}

export default App;