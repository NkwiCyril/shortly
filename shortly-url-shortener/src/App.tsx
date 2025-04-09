import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import UrlShortener from "./components/UrlShortener";
import LinkResult from "./components/LinkResult";
import Footer from "./components/Footer";
import { LinkItem } from "./types";
import useLocalStorage from "./hooks/useLocalStorage";
import AdvancedStatisticsSection from "./components/AdvancedStatisticsSection";
import Boost from "./components/Boost";

const App: React.FC = () => {
  const [shortenedLinks, setShortenedLinks] = useLocalStorage<LinkItem[]>(
    "shortlyLinks",
    []
  );

  const addLink = (link: LinkItem) => {
    setShortenedLinks((prev) => [link, ...prev]);
  };

  return (
    <div className="bg-gray-50">
      <Header />

      <main className="">
        <Hero />

        <div className="relative bg-gray-100">
          <div className="container mx-auto px-5">
            <UrlShortener onLinkShortened={addLink} />

            {shortenedLinks.length > 0 && (
              <div className="mt-6 space-y-4">
                {shortenedLinks.map((link, index) => (
                  <LinkResult
                    key={index}
                    originalUrl={link.originalUrl}
                    shortUrl={link.shortUrl}
                  />
                ))}
              </div>
            )}
          </div>

          <AdvancedStatisticsSection />

          <Boost />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
