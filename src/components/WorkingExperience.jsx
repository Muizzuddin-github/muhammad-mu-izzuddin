const WorkingExperience = () => {
  return (
    <section className="bg-semi-gold px-5 sm:px-8 sm:py-10">
      <h2
        className="font-medium  text-xl text-gray-800 text-center lg:text-3xl"
        data-aos="fade"
      >
        Working experience
      </h2>
      <section className="mt-5 flex flex-col gap-5 sm:flex-row sm:justify-around">
        <section className="flex items-center gap-2  sm:w-80">
          <section className="p-2 bg-white w-14 h-14 rounded-full">
            <img src="/stikom.png" alt="stikom-pgri-banyuwangi" />
          </section>
          <section>
            <p className="text-sm font-medium lg:text-lg">
              Stikom Pgri Banyuwangi students
            </p>
            <p className="text-[12px] font-medium text-gray-400">2021 - 202X</p>
          </section>
        </section>

        <section className="flex items-center gap-2 sm:w-60 lg:w-80">
          <section className="p-2 bg-white w-14 h-14 rounded-full">
            <img src="/backend.png" alt="backend" />
          </section>
          <section>
            <p className="text-sm font-medium lg:text-lg">Backend programmer</p>
            <p className="text-[12px] font-medium text-gray-400">
              stay focused on learning
            </p>
          </section>
        </section>
        <section className="flex items-center gap-2 sm:w-60">
          <section className="p-2 bg-white w-14 h-14 rounded-full">
            <img src="/frontend.png" alt="frontend" />
          </section>
          <section>
            <p className="text-sm font-medium lg:text-lg">Frontend Skill</p>
            <p className="text-[12px] font-medium text-gray-400">
              understand a little but I&apos;m learning
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default WorkingExperience;
