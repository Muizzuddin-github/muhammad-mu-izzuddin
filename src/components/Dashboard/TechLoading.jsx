import Skeleton from "react-loading-skeleton";
import PropTypes from "prop-types";

const TechLoading = ({ count = 0 }) => {
  return Array(count)
    .fill(0)
    .map((v, i) => (
      <li key={i} className="shadow-tech p-1 flex gap-3 relative rounded-md">
        <i className="fa-solid fa-xmark absolute top-2 right-2 cursor-pointer text-red-500"></i>
        <section className="-mt-[2.5px]">
          <Skeleton width={38} height={38} style={{ borderRadius: "50%" }} />
        </section>
        <section>
          <Skeleton width={100} height={10} />
          <section className="-mt-2">
            <Skeleton width={70} height={10} />
          </section>
        </section>
      </li>
    ));
};

export default TechLoading;

TechLoading.propTypes = {
  count: PropTypes.number,
};
