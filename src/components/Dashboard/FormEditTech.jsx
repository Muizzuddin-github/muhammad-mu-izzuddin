import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import TechnologyApi from "../../../api/technologyApi";
import PropTypes from "prop-types";
import { useRef } from "react";

const FormEditTech = ({
  showHideFormEditTech,
  setShowHideFormEditTech,
  setTechnologys,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  const [msg, setMsg] = useState("");

  const [name, setName] = useState("");
  const [logo, setLogo] = useState(null);

  useEffect(
    function () {
      setName(showHideFormEditTech.name);
    },
    [showHideFormEditTech]
  );

  const form = useRef();

  const addBtn = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      setBtnDisable(true);

      const formData = new FormData();
      formData.append("name", name);

      if (logo) {
        formData.append("logo", logo);
      }

      const res = await TechnologyApi.edit(showHideFormEditTech._id, formData);
      setMsg(res.data.message);

      form.current.reset();
      setBtnDisable(false);
      setIsLoading(false);

      setTechnologys((prev) => {
        return prev.map((v) => {
          if (v._id === showHideFormEditTech._id) {
            v.name = name;
            v.logo = logo ? URL.createObjectURL(logo) : v.logo;
            return v;
          }
          return v;
        });
      });
    } catch (err) {
      setBtnDisable(false);
      setIsLoading(false);
      setMsg(err.response.data.errors[0]);
    }
  };

  const close = (e) => {
    if (e.currentTarget === e.target) {
      setShowHideFormEditTech("");
    }
  };

  return (
    <section
      className="black-screen fixed z-20 top-0 left-0 right-0 bottom-0 flex justify-center items-center cursor-pointer"
      onClick={close}
    >
      <section className="bg-white p-5 rounded-md cursor-default">
        <h1 className="font-semibold mb-5">
          {msg.length === 0 ? "Edit technology" : msg}
        </h1>
        <form ref={form} onSubmit={addBtn} className="flex flex-col gap-3 ">
          <section className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="outline-none border text-sm px-2 py-1 rounded-sm w-72"
              autoComplete="off"
              required
              defaultValue={showHideFormEditTech.name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </section>
          <section className="flex flex-col gap-2">
            <section className="flex items-center gap-2">
              <p className="text-sm">Logo</p>
              <p className="text-sm font-medium">optional</p>
            </section>

            <section className="flex items-center gap-4">
              <label htmlFor="logo" className="text-sm cursor-pointer">
                <section className="bg-gray-300 py-1 px-4 w-fit rounded-md text-sm ">
                  File
                </section>
              </label>
              <input
                type="file"
                id="logo"
                className="text-sm hidden"
                onChange={(e) => setLogo(e.target.files[0])}
              />
              <img
                src={
                  logo ? URL.createObjectURL(logo) : showHideFormEditTech.logo
                }
                alt=""
                className="w-8"
              />
            </section>
          </section>
          <button
            disabled={btnDisable}
            className="bg-black text-white rounded-md py-1 font-semibold text-sm mt-5 flex justify-center items-center"
          >
            {isLoading ? <Spinner /> : <p>Edit</p>}
          </button>
        </form>
      </section>
    </section>
  );
};

export default FormEditTech;

FormEditTech.propTypes = {
  showHideFormEditTech: PropTypes.object,
  setShowHideFormEditTech: PropTypes.func,
  setTechnologys: PropTypes.func,
};
