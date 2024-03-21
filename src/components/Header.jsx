const Header = () => {
  return (
    <header className="font-inter py-10 px-5 flex flex-col gap-5 sm:flex-row sm:justify-between sm:py-20 sm:px-10 lg:px-16 lg:py-44">
      <section data-aos="fade-right">
        <img src="/photo.jpg" alt="" className="w-14 rounded-full" />
        <h1 className="font-medium text-2xl text-gray-800 mt-8 lg:text-5xl">
          Hello I&apos;m Muhammad Mu&apos;izzuddin
        </h1>
      </section>
      <section className="sm:w-[29rem] lg:w-[40rem] overflow-hidden">
        <p
          className="text-xl text-gray-800 font-medium lg:text-4xl"
          data-aos="fade-left"
        >
          A Backend programmer base in Banyuwangi, Indonesia.
        </p>
        <p className="text-sm text-gray-500 mt-5" data-aos="fade-left">
          Create systems for digital applications
        </p>
        <button
          className="py-2 px-4 bg-black text-white rounded-lg text-sm mt-6"
          data-aos="fade-left"
        >
          See my work
        </button>
      </section>
    </header>
  );
};

export default Header;
