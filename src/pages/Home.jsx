import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Technology from "../components/Technology";
import WorkingExperience from "../components/WorkingExperience";
import Service from "../components/Service";
import Quotes from "../components/Quotes";
import Talk from "../components/Talk";
import TechnologyApi from "../../api/technologyApi";

const Home = () => {
  const [localTime, setLocalTime] = useState("00:00:00");
  const [showNavList, setShowNavList] = useState("translate-x-full");
  const [showHideBlackScreen, setShowHideBlackScreen] = useState("hidden");

  const [tech, setTech] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    setInterval(() => {
      const localDate = new Date();
      const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      };
      const localDateString = localDate.toLocaleString("id-ID", options);
      const time = localDateString.replaceAll(".", ":");
      setLocalTime(time);
    }, 1000);
    Aos.init({ duration: 1000 });

    TechnologyApi.getAll()
      .then((res) => {
        console.log(res.data.data);
        setTech(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => alert(JSON.stringify(err)));
  }, []);

  const showNavListBtn = () => {
    setShowHideBlackScreen("");
    setShowNavList("");
  };

  const closeNavListBtn = () => {
    setShowHideBlackScreen("hidden");
    setShowNavList("translate-x-full");
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Navbar
        showNavList={showNavList}
        closeNavListBtn={closeNavListBtn}
        localTime={localTime}
        showHideBlackScreen={showHideBlackScreen}
        showNavListBtn={showNavListBtn}
      />

      <section id="home" className="py-9"></section>
      <Header />
      <main>
        <Technology tech={tech} isLoading={isLoading} />
        <WorkingExperience />
        <Service />
        <Quotes />
        <Talk />
      </main>
      <Footer />
    </>
  );
};

export default Home;
