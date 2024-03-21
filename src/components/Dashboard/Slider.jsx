import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const Slider = ({ data }) => {
  const slideParent = useRef();

  useEffect(
    function () {
      let c = 1;
      if (data.length) {
        setInterval(function () {
          const slide = slideParent.current.querySelector(".slide");
          const slideWidth = slideParent.current.offsetWidth;
          if (c === data.length) {
            c = 0;
          }
          slide.style.left = "-" + c * slideWidth + "px";
          c++;
        }, 5000);
      }
    },
    [data]
  );

  return (
    <section ref={slideParent} className="w-72 overflow-hidden relative">
      <section className="slide flex relative left-0 transition-all duration-500 ">
        {data.map((v, i) => (
          <img key={i} src={v} alt="" className="rounded-md" />
        ))}
      </section>
    </section>
  );
};

export default Slider;

Slider.propTypes = {
  data: PropTypes.array,
};
