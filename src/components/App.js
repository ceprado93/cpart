import "./App.scss";
import Navigation from "./Layout/Navigation";
import Routes from "./routes/Routes";
import Footer from "./Layout/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
  );
}

export default App;
