const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col gap-10 px-5 py-10 sm:flex-row sm:justify-between sm:px-8"
    >
      <section>
        <p className="text-sm font-medium text-gray-800 lg:text-lg">
          Muhammad Mu&apos;izzuddin
        </p>
        <p className="text-sm text-gray-500">backend programmer</p>
      </section>
      <ul className="flex flex-col gap-2 sm:flex-row justify-between sm:gap-10">
        <li>
          <a
            href="https://github.com/Muizzuddin-github"
            target="_blank"
            className="flex items-center gap-2"
          >
            <i className="fa-brands fa-instagram"></i>
            <p className="text-sm font-medium text-gray-800 lg:text-lg">
              Github
            </p>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mzdn404/"
            target="_blank"
            className="flex items-center gap-2"
          >
            <i className="fa-brands fa-instagram"></i>
            <p className="text-sm font-medium text-gray-800 lg:text-lg">
              Instagram
            </p>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
