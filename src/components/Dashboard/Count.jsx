const Count = () => {
  return (
    <section className="bg-white pt-5 px-5 pb-[15px] w-1/3">
      <h1 className="font-semibold text-center">
        Count your Project and Technology
      </h1>

      <ul className="mt-3 flex justify-around">
        <li className="shadow-tech w-fit p-3">
          <section className="flex items-center gap-2">
            <i className="fa-solid fa-note-sticky"></i>
            <p className="font-semibold">5</p>
          </section>
          <p className="text-sm font-medium mt-2">Project</p>
          <p className="text-[12px] text-gray-500">all project you have</p>
        </li>
        <li className="shadow-tech w-fit p-3">
          <section className="flex items-center gap-2">
            <i className="fa-solid fa-note-sticky"></i>
            <p className="font-semibold">5</p>
          </section>
          <p className="text-sm font-medium mt-2">Technology</p>
          <p className="text-[12px] text-gray-500">all technology you have</p>
        </li>
      </ul>
    </section>
  );
};

export default Count;
