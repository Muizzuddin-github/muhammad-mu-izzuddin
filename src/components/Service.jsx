const Service = () => {
  return (
    <section id="service" className="bg-semi-gold px-5 py-20 sm:px-8 lg:px-10">
      <section className="flex justify-between items-center flex-wrap sm:flex-col sm:gap-4">
        <h2
          className="font-medium  text-xl text-gray-800 lg:text-3xl"
          data-aos="fade"
        >
          I can help you with
        </h2>
        <a
          href="#"
          data-aos="fade"
          className="py-1 px-4 border border-gray-300 rounded-lg text-sm font-medium"
        >
          See my work
        </a>
      </section>

      <section className="mt-5 flex flex-wrap justify-between items-center gap-10 lg:justify-around">
        <section className="sm:w-full lg:w-[40rem]" data-aos="fade">
          <section className="flex items-center gap-4">
            <section className="p-1 rounded-full bg-white flex items-center justify-center">
              <i className="fa-solid fa-code text-sm"></i>
            </section>
            <p className="font-medium text-sm text-gray-800 sm:text-base">
              Slicing HTML from figma
            </p>
          </section>
          <section className="sm:flex sm:flex-col sm:items-center">
            <img
              src="/slicing-html.png"
              alt="cafeku"
              className="rounded-lg mt-4 sm:w-[40rem]"
            />
            <p className="text-gray-600 font-medium text-[12px] mt-2 sm:max-w-[40rem] sm:text-sm">
              My skills in HTML and CSS, and JAVASCRIPT allow me to translate
              your designs into visually appealing web pages.
            </p>
          </section>
        </section>

        <section className="sm:w-full lg:w-[40rem]" data-aos="fade">
          <section className="flex items-center gap-4 ">
            <section className="p-1 rounded-full bg-white flex items-center justify-center">
              <i className="fa-solid fa-server text-sm"></i>
            </section>
            <p className="font-medium text-sm text-gray-800 sm:text-base">
              Create web server
            </p>
          </section>
          <section className="sm:flex sm:flex-col sm:items-center">
            <img
              src="/server.png"
              alt="server"
              className="rounded-lg mt-4 sm:w-[40rem]"
            />
            <p className="text-gray-600 font-medium text-[12px] mt-2 sm:max-w-[40rem] sm:text-sm">
              With my experience in backend development, I have the ability to
              build REST API servers using popular frameworks such as Node.js,
              and TypeScript.
            </p>
          </section>
        </section>

        <section className="sm:w-full lg:w-[40rem]" data-aos="fade">
          <section className="flex items-center gap-4">
            <section className="p-1 rounded-full bg-white flex items-center justify-center">
              <i className="fa-brands fa-react text-sm"></i>
            </section>
            <p className="font-medium text-sm text-gray-800 sm:text-base">
              Create web app with react js
            </p>
          </section>
          <section className="sm:flex sm:flex-col sm:items-center">
            <img
              src="/web-react.png"
              alt="web-react"
              className="rounded-lg mt-4 sm:w-[40rem]"
            />
            <p className="text-gray-600 font-medium text-[12px] mt-2 sm:max-w-[40rem] sm:text-sm">
              I have expertise in building web applications using React. React
              is a popular JavaScript framework for building interactive and
              user-friendly user interfaces.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Service;
