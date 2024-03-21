import Skeleton from "react-loading-skeleton";

const QuotesTodayLoading = () => {
  return (
    <section className="bg-white pt-5 px-5 pb-4 w-1/3">
      <h1 className="font-semibold">Today quotes</h1>

      <section className="flex flex-col gap-5">
        <section className="mt-5">
          <Skeleton />
          <Skeleton width={100} />
        </section>

        <section className="self-end w-28 -mt-2">
          <Skeleton />
        </section>
      </section>
    </section>
  );
};

export default QuotesTodayLoading;
