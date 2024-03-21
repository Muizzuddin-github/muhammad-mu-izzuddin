import Skeleton from "react-loading-skeleton";
import PropTypes from "prop-types";

const LoadingTech = ({ count = 1 }) => {
  return Array(count)
    .fill(0)
    .map((v, i) => (
      <section key={i} className="w-32 flex gap-3 items-center">
        <section className="">
          <Skeleton circle={true} width={35} height={35} />
        </section>
        <section className="-mt-[2px]">
          <Skeleton width={100} height={15} />
          <Skeleton width={100} height={10} />
        </section>
      </section>
    ));
};

export default LoadingTech;

LoadingTech.propTypes = {
  count: PropTypes.number,
};
