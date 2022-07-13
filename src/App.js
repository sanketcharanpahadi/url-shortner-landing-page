import Form from "./components/Form";
import GetStarted from "./components/GetStarted";
import NavBar from "./components/NavBar";
import Starter from "./components/Starter";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import Shorten from "./components/Shorten";
import { useEffect, useState } from "react";

function App() {
  const [links, setLinks] = useState(
    JSON.parse(localStorage.getItem("links")) || []
  );

  const linkHandler = (url) => {
    setLinks(links.concat({ oUrl: url, sUrl: "", shorted: false, id: url }));
  };

  const shortLinkHandler = (url, link, shorted, id) => {
    const arr = links.map((link) => {
      if (link.id === id) return { ...link, sUrl: url, shorted };
      return link;
    });
    setLinks(arr);
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <div className="App">
      <NavBar />
      <main>
        <Starter />
        <section className="form bg-neutral-gray relative pt-40 md:pb-24">
          <Form linkHandler={linkHandler} />
          <div className="shorten-links mb-16 flex flex-col gap-6 md:gap-4">
            {links.map((link) => (
              <Shorten
                key={link.oUrl}
                {...link}
                shortLinkHandler={shortLinkHandler}
                link={link}
              />
            ))}
          </div>
          <Statistics />
        </section>
      </main>
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
