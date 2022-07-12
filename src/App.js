import Form from "./components/Form";
import GetStarted from "./components/GetStarted";
import NavBar from "./components/NavBar";
import Starter from "./components/Starter";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Starter />
        <section className="form bg-neutral-gray relative pt-40 md:pb-24">
          <Form />
          <Statistics />
        </section>
      </main>
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
