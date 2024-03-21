import LoadingTech from "./LoadingTech";
import PropTypes from "prop-types";
import { format } from "date-fns";

const Technology = ({ tech, isLoading }) => {
  return (
    <section id="technology" className="px-5 bg-semi-gold py-20 sm:px-8">
      <h2
        className="font-medium  text-xl text-gray-800 text-center lg:text-3xl"
        data-aos="fade"
      >
        The technology we use
      </h2>
      <section className="mt-5 flex flex-wrap justify-between gap-5 lg:gap-10 lg:justify-evenly lg:mt-10 px-20">
        {isLoading ? <LoadingTech count={5} /> : ""}

        {tech.map((v, i) => (
          <section key={i} className="flex items-center gap-2">
            <section className="p-2 bg-white rounded-full w-10 h-10 flex justify-center items-center">
              <img src={v.logo} alt="" className="w-10" />
            </section>
            <section>
              <p className="text-sm font-medium lg:text-lg">{v.name}</p>
              <p className="text-[12px] font-medium text-gray-400">
                {format(v.created_at, "dd MMMM yyyy")}
              </p>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Technology;

Technology.propTypes = {
  tech: PropTypes.array,
  isLoading: PropTypes.bool,
};
