import PropTypes from "prop-types";

const QuotesToday = ({ text, author }) => {
  return (
    <section className="bg-white p-5 w-1/3">
      <h1 className="font-semibold">Today quotes</h1>

      <section className="flex flex-col gap-5">
        <p className="text-sm italic mt-5">&quot; {text} &quot;</p>

        <p className="text-sm self-end">{author}</p>
      </section>
    </section>
  );
};

export default QuotesToday;

QuotesToday.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
};
