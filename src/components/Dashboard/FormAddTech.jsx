import { useState } from "react";
import Spinner from "./Spinner";
import TechnologyApi from "../../../api/technologyApi";
import PropTypes from "prop-types";
import { useRef } from "react";

const FormAddTech = ({
  setShowHideFormAddTech,
  setTechnologys,
  setTechnologyEmpty,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  const [msg, setMsg] = useState("");

  const [name, setName] = useState("");
  const [logo, setLogo] = useState(null);

  const form = useRef();

  const addBtn = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      setBtnDisable(true);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("logo", logo);

      const res = await TechnologyApi.add(formData);
      setMsg(res.data.message);

      form.current.reset();
      setBtnDisable(false);
      setIsLoading(false);
      setTechnologyEmpty(false);

      const urlLogo = URL.createObjectURL(logo);
      setTechnologys((prev) => [
        ...prev,
        {
          _id: res.data.insertedID,
          name: name,
          logo: urlLogo,
          created_at: new Date(),
          v: 0,
        },
      ]);
    } catch (err) {
      setBtnDisable(false);
      setIsLoading(false);
      setMsg(err.response.data.errors[0]);
    }
  };

  const close = (e) => {
    if (e.currentTarget === e.target) {
      setShowHideFormAddTech(false);
    }
  };

  return (
    <section
      className="black-screen fixed z-20 top-0 left-0 right-0 bottom-0 flex justify-center items-center cursor-pointer"
      onClick={close}
    >
      <section className="bg-white p-5 rounded-md cursor-default">
        <h1 className="font-semibold mb-5">
          {msg.length === 0 ? "Add technology" : msg}
        </h1>
        <form ref={form} onSubmit={addBtn} className="flex flex-col gap-3 ">
          <section className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="outline-none border text-sm px-2 py-1 rounded-sm "
              autoComplete="off"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </section>
          <section className="flex flex-col gap-2">
            <label htmlFor="logo" className="text-sm">
              Logo
            </label>
            <input
              type="file"
              id="logo"
              className="text-sm"
              required
              onChange={(e) => setLogo(e.target.files[0])}
            />
          </section>
          <button
            disabled={btnDisable}
            className="bg-black text-white rounded-md py-1 font-semibold text-sm mt-5 flex justify-center items-center"
          >
            {isLoading ? <Spinner /> : <p>Add</p>}
          </button>
        </form>
      </section>
    </section>
  );
};

export default FormAddTech;

FormAddTech.propTypes = {
  setShowHideFormAddTech: PropTypes.func,
  setTechnologys: PropTypes.func,
  setTechnologyEmpty: PropTypes.func,
};
