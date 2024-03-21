import NavAdmin from "./NavAdmin";
import Aside from "./Aside";
import QuotesToday from "./QuotesToday";
import Slider from "./Slider";
import Count from "./Count";
import SliderLoading from "./SliderLoading";
import QuotesTodayLoading from "./QuotesTodayLoading";
import PropTypes from "prop-types";

const DashboardInit = ({
  quote,
  walpapers,
  isLoading,
  setShowHideFormEditTech,
  setShowHideFormAddTech,
  technologys,
  setTechnologys,
  technologyEmpty,
}) => {
  return (
    <section className="flex bg-semi-gold">
      <Aside
        setShowHideFormAddTech={setShowHideFormAddTech}
        technologys={technologys}
        isLoading={isLoading}
        technologyEmpty={technologyEmpty}
        setTechnologys={setTechnologys}
        setShowHideFormEditTech={setShowHideFormEditTech}
      />
      <section className="w-full">
        <NavAdmin />

        <section className="p-4 flex gap-4 justify-between items-start">
          {isLoading ? (
            <QuotesTodayLoading />
          ) : (
            <QuotesToday text={quote?.quote} author={quote?.author} />
          )}
          <Count />
          {isLoading ? <SliderLoading /> : <Slider data={walpapers} />}
        </section>
      </section>
    </section>
  );
};

export default DashboardInit;

DashboardInit.propTypes = {
  quote: PropTypes.object,
  walpapers: PropTypes.array,
  technologys: PropTypes.array,
  setShowHideFormEditTech: PropTypes.func,
  isLoading: PropTypes.bool,
  setShowHideFormAddTech: PropTypes.func,
  setTechnologys: PropTypes.func,
  technologyEmpty: PropTypes.bool,
};
