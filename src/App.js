import Header from "./components/nav-header/Header";
import "./App.css";
import Featured from "./components/featured/Featured";
function App() {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "slider1" },
    { url: "http://localhost:3000/image-2.jpg", title: "slider2" },
    { url: "http://localhost:3000/image-3.jpg", title: "slider3" },
  ];
  return (
    <div>
      <Header />
      <div className="containerStyles">
        <Featured slides={slides} />
      </div>
    </div>
  );
}

export default App;
