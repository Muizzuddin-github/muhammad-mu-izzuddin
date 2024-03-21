import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Walpaper from "../../api/walpaper";
import Quoteskuy from "../../api/quoteskuy";
import DashboardInit from "../components/Dashboard/DashboardInit";
import FormAddTech from "../components/Dashboard/FormAddTech";
import TechnologyApi from "../../api/technologyApi";
import FormEditTech from "../components/Dashboard/FormEditTech";

const Dashboard = () => {
  const [quote, setQuote] = useState({});
  const [walpapers, setWalpapers] = useState([]);
  const [technologys, setTechnologys] = useState([]);

  const [technologyEmpty, setTechnologyEmpty] = useState(false);

  const [isLoading, setIsloading] = useState(true);
  const [showHideFormAddTech, setShowHideFormAddTech] = useState(false);
  const [showHideFormEditTech, setShowHideFormEditTech] = useState({});

  const getDataSrcWal = () => {
    if (!localStorage.getItem("data_wal")) {
      localStorage.setItem(
        "data_wal",
        JSON.stringify(["megumin%20(konosuba)"])
      );
    }

    const data = JSON.parse(localStorage.getItem("data_wal"));
    if (!Array.isArray(data)) {
      localStorage.setItem(
        "data_wal",
        JSON.stringify(["megumin%20(konosuba)"])
      );
    }

    const i = Math.floor(Math.random() * data.length);
    return data[i];
  };

  const getAllApi = async (call) => {
    try {
      const quote = await Quoteskuy.today();
      setQuote(quote.data.data.quotes);

      const keyWal = call();
      const random = Math.ceil(Math.random() * 10);
      const wal = await Walpaper.getAll(keyWal, random);
      setWalpapers(wal.data.data);

      const tech = await TechnologyApi.getAll();
      if (tech.data.data.length === 0) {
        setTechnologyEmpty(true);
      }
      setTechnologys(tech.data.data);

      setIsloading(false);
    } catch (err) {
      alert(JSON.stringify(err.response));
    }
  };

  useEffect(function () {
    getAllApi(getDataSrcWal);
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <main>
        {showHideFormAddTech ? (
          <FormAddTech
            setShowHideFormAddTech={setShowHideFormAddTech}
            setTechnologys={setTechnologys}
            setTechnologyEmpty={setTechnologyEmpty}
          />
        ) : (
          ""
        )}

        {Object.keys(showHideFormEditTech).length ? (
          <FormEditTech
            setShowHideFormEditTech={setShowHideFormEditTech}
            showHideFormEditTech={showHideFormEditTech}
            setTechnologys={setTechnologys}
          />
        ) : (
          ""
        )}
        <DashboardInit
          setShowHideFormEditTech={setShowHideFormEditTech}
          isLoading={isLoading}
          quote={quote}
          walpapers={walpapers}
          technologys={technologys}
          technologyEmpty={technologyEmpty}
          setShowHideFormAddTech={setShowHideFormAddTech}
          setTechnologys={setTechnologys}
        />
      </main>
    </>
  );
};

export default Dashboard;
