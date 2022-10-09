import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./style/landingPage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      {/* trending */}
      <div className="trending">
        <Trending />
      </div>
    </div>
  );
}

export default App;
