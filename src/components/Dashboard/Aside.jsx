import PropTypes from "prop-types";
import { format } from "date-fns";
import TechLoading from "./TechLoading";
import { useState } from "react";
import Spinner from "./Spinner";
import TechnologyApi from "../../../api/technologyApi";

const Aside = ({
  setShowHideFormEditTech,
  setShowHideFormAddTech,
  technologys,
  isLoading,
  technologyEmpty,
  setTechnologys,
}) => {
  const [idTech, setIdTech] = useState("");
  const [showHideAlertDelTech, setShowHideAlertDelTech] = useState(false);
  const [btnDisableDel, setBtnDisableDel] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [btnDisableCancel, setBtnDisableCancel] = useState(false);
  const [btnCancelMsg, setBtnCancelMsg] = useState("");
  const [msgDel, setMsgDel] = useState("");

  const btnDel = async () => {
    try {
      setBtnDisableDel(true);
      setBtnLoading(true);
      setBtnDisableCancel(true);

      const res = await TechnologyApi.del(idTech);
      setMsgDel(res.data.message);
      setBtnLoading(false);
      setBtnDisableCancel(false);
      setBtnCancelMsg("Back");
      setTechnologys((prev) => {
        return prev.filter((v) => v._id != idTech);
      });
    } catch (err) {
      setBtnDisableDel(false);
      setBtnDisableCancel(false);
      setBtnLoading(false);
      setMsgDel(err.response.data.errors[0]);
    }
  };

  return (
    <>
      {showHideAlertDelTech ? (
        <section className="black-screen fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center">
          <section className="bg-white p-5 rounded-md">
            <p className="font-semibold">Delete Technology ?</p>
            <hr className="border mt-1 border-gray-500 rounded-md" />

            <p className="mt-2 text-sm">
              {msgDel ? msgDel : "Are you sure you want to delete it ?"}
            </p>
            <section className="mt-8 flex justify-between">
              <button
                className="py-1 px-4 rounded-md text-[12px] bg-black text-white"
                onClick={() => {
                  setShowHideAlertDelTech(false);
                  setBtnDisableDel(false);
                }}
                disabled={btnDisableCancel}
              >
                {btnCancelMsg ? btnCancelMsg : "Cancel"}
              </button>
              <button
                className="py-1 px-4 rounded-md text-[12px] bg-red-500 text-white"
                disabled={btnDisableDel}
                onClick={btnDel}
              >
                {btnLoading ? <Spinner w="w-4" h="h-4" /> : <p>Delete</p>}
              </button>
            </section>
          </section>
        </section>
      ) : (
        ""
      )}
      <aside className=" w-72 h-[100vh] box-border px-5 py-2 bg-white">
        <section className="flex items-center mt-5 gap-3">
          <i className="fa-solid fa-book text-2xl"></i>
          <h1 className="font-bold text-xl">Portfolio</h1>
        </section>
        <section className="pl-4 pr-10 py-2 mt-8 bg-black text-white rounded-md flex items-center gap-3 w-fit">
          <i className="fa-solid fa-house"></i>
          <p className="font-semibold">Dashboard</p>
        </section>

        <section className="mt-8 flex flex-col gap-6">
          <section
            className={`flex items-center gap-3 ${
              isLoading ? "cursor-default" : "cursor-pointer"
            }`}
          >
            <section className="bg-black py-1 px-2 rounded-md">
              <i className="fa-solid fa-plus font-bold text-white"></i>
            </section>
            <p className="font-semibold">Project</p>
          </section>
          <section
            className={`flex items-center gap-3 ${
              isLoading ? "cursor-default" : "cursor-pointer"
            }`}
            onClick={() => (isLoading ? "" : setShowHideFormAddTech(true))}
          >
            <section className="bg-black py-1 px-2 rounded-md">
              <i className="fa-solid fa-plus font-bold text-white"></i>
            </section>
            <p className="font-semibold">Technolgy</p>
          </section>
        </section>

        <section className="mt-5">
          <section className="mb-4">
            <p className="text-sm font-medium">My technology</p>
            <p className="text-gray-500 text-[11px]">
              Double click icon for edit
            </p>
          </section>

          <ul className="flex flex-col gap-5 h-[52vh] overflow-y-scroll scrol hide-scrollbar p-1">
            {isLoading ? <TechLoading count={5} /> : ""}

            {technologyEmpty ? (
              <p className="text-[13px] text-red-500 font-medium leading-[52vh]">
                Technology is empty
              </p>
            ) : (
              ""
            )}

            {technologys.map((v, i) => (
              <li
                key={i}
                className="shadow-tech px-1 pb-2 pt-3 rounded-md relative"
              >
                <i
                  className="fa-solid fa-xmark absolute top-1 right-1 cursor-pointer text-red-500"
                  onClick={() => {
                    setIdTech(v._id);
                    setShowHideAlertDelTech(true);
                  }}
                ></i>
                <section className="flex items-center gap-2">
                  <section className="p-2 bg-white w-10 h-10 flex justify-center items-center">
                    <img
                      src={v.logo}
                      alt=""
                      className="w-6 cursor-pointer"
                      onDoubleClick={() => setShowHideFormEditTech(v)}
                    />
                  </section>
                  <section>
                    <p className="text-[12px] font-medium">{v.name}</p>
                    <p className="text-[10px] font-medium text-gray-400">
                      {format(v.created_at, "dd MMMM yyyy")}
                    </p>
                  </section>
                </section>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </>
  );
};

export default Aside;

Aside.propTypes = {
  setShowHideFormEditTech: PropTypes.func,
  technologys: PropTypes.array,
  isLoading: PropTypes.bool,
  setShowHideFormAddTech: PropTypes.func,
  setTechnologys: PropTypes.func,
  technologyEmpty: PropTypes.bool,
};
