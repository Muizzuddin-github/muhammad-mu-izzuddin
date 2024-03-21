import PropTypes from "prop-types";

const Navbar = ({
  localTime,
  showNavList,
  showHideBlackScreen,
  closeNavListBtn,
  showNavListBtn,
}) => {
  const navHrAnimate = (e, num) => {
    const parent = e.currentTarget.parentElement;
    const items = parent.children;
    items[num].querySelector("hr").classList.remove("w-0");
    items[num].querySelector("hr").classList.remove("opacity-0");
    items[num].querySelector("hr").classList.add("w-full");
    for (let i = 0; i < items.length; i++) {
      if (i !== num) {
        items[i].querySelector("hr").classList.add("w-0");
        items[i].querySelector("hr").classList.remove("opacity-0");
        items[i].querySelector("hr").classList.remove("w-full");
      }
    }
  };

  return (
    <nav className="px-8 py-2 flex gap-2 bg-white items-center font-inter fixed w-full top-0 sm:px-10 lg:px-16 z-10">
      <img src="/logo.png" alt="my-logo" className="w-14 h-14 -ml-5 sm:-ml-2" />
      <section className="w-full lg:flex lg:justify-between lg:items-center">
        <section className="flex justify-between w-full items-center lg:w-auto lg:gap-10">
          <section
            className={`black-screen fixed top-0 left-0 right-0 bottom-0 z-20 ${showHideBlackScreen}`}
            onClick={closeNavListBtn}
          ></section>

          <section
            className={`absolute shadow-nav bg-white top-0 right-0 w-[60vw] h-[100vh] z-30 p-5 flex flex-col items-end transition-all duration-500 ${showNavList} lg:static lg:p-0 lg:h-auto lg:w-auto lg:items-center lg:translate-x-0 lg:shadow-none`}
          >
            <img
              src="/photo.jpg"
              alt=""
              className="w-14 rounded-full mb-5 lg:hidden"
            />
            <ul className=" flex flex-col gap-5 items-end w-full lg:flex-row lg:items-center ">
              <li
                className="w-full text-end"
                onClick={(e) => navHrAnimate(e, 0)}
              >
                <a href="#home">
                  <section className="flex flex-col items-end lg:items-start">
                    <p className="text-sm font-medium lg:font-semibold">Home</p>
                    <hr className="border-black w-full transition-all duration-500" />
                  </section>
                </a>
              </li>
              <li
                className="w-full text-end"
                onClick={(e) => navHrAnimate(e, 1)}
              >
                <a href="#technology">
                  <section className="flex flex-col items-end lg:items-start">
                    <p className="text-sm font-medium lg:font-semibold">
                      Technology
                    </p>
                    <hr className="border-black w-0 opacity-0 transition-all  duration-500" />
                  </section>
                </a>
              </li>
              <li
                className="w-full text-end"
                onClick={(e) => navHrAnimate(e, 2)}
              >
                <a href="#service">
                  <section className="flex flex-col items-end lg:items-start">
                    <p className="text-sm font-medium lg:font-semibold ">
                      Service
                    </p>
                    <hr className="border-black w-0 opacity-0 transition-all  duration-500" />
                  </section>
                </a>
              </li>
              <li
                className="w-full text-end"
                onClick={(e) => navHrAnimate(e, 3)}
              >
                <a href="#contact">
                  <section className="flex flex-col items-end lg:items-start">
                    <p className="text-sm font-medium lg:font-semibold">
                      Contact
                    </p>
                    <hr className="border-black w-0 opacity-0 transition-all duration-500" />
                  </section>
                </a>
              </li>
            </ul>
            <a
              href="https://www.instagram.com/mzdn404/"
              target="_blank"
              className="mt-20 text-sm font-medium bg-semi-gold rounded-md py-2 px-4 hover:bg-semi-gold-hover lg:hidden"
            >
              Talk with me
            </a>
          </section>

          <section>
            <p className="text-gray-500 text-sm font-semibold">
              Banyuwangi, Indonesia
            </p>
            <p className="font-bold text-sm">{localTime}</p>
          </section>
          <section className="flex flex-col gap-[6px] relative lg:hidden">
            <section
              className="absolute top-0 left-0 right-0 bottom-0"
              onClick={showNavListBtn}
            ></section>
            <section className="w-10 h-[3px] rounded-sm bg-gray-500"></section>
            <section className="w-10 h-[3px] rounded-sm bg-gray-500"></section>
            <section className="w-10 h-[3px] rounded-sm bg-gray-500"></section>
          </section>
        </section>

        <a
          href="https://www.instagram.com/mzdn404/"
          target="_blank"
          className="text-sm font-medium bg-semi-gold1 py-2 px-4 rounded-md hidden hover:bg-semi-gold-hover1 lg:block"
        >
          Talk with me
        </a>
      </section>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  localTime: PropTypes.string,
  showNavList: PropTypes.string,
  showHideBlackScreen: PropTypes.string,
  closeNavListBtn: PropTypes.func,
  showNavListBtn: PropTypes.func,
};
