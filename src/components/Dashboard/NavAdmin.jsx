import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import Auth from "../../../api/auth";

const NavAdmin = () => {
  const [walpaperName, setWalpaperName] = useState("");
  const [showHideProfile, setShowHideProfile] = useState("hidden");
  const [btnDisable, setBtnDisable] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [cursor, setCursor] = useState("cursor-pointer");

  const redirect = useNavigate();
  const form = useRef();

  const btnAddWalpaperName = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data_wal"));
    if (!Array.isArray(data)) {
      localStorage.setItem(
        "data_wal",
        JSON.stringify(["megumin%20(konosuba)"])
      );
    }

    const listWal = JSON.parse(localStorage.getItem("data_wal"));
    listWal.push(walpaperName);

    localStorage.setItem("data_wal", JSON.stringify(listWal));
    form.current.reset();
  };

  const btnCloseProfile = (e) => {
    if (e.target === e.currentTarget && btnDisable === false) {
      setShowHideProfile("hidden");
    }
  };

  const btnLogout = async () => {
    try {
      setCursor("");
      setBtnDisable(true);
      setBtnLoading(true);

      await Auth.logout();
      setBtnLoading(false);
      redirect("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section
        className={`black-screen ${showHideProfile} fixed top-0 left-0 right-0 bottom-0 z-10 ${cursor}`}
        onClick={btnCloseProfile}
      >
        <section className="p-5 bg-white w-96 absolute right-0 flex flex-col items-center gap-20 justify-center top-20 rounded-md cursor-default">
          <form
            ref={form}
            className="w-2/3 flex flex-col gap-3"
            onSubmit={btnAddWalpaperName}
          >
            <section className="flex flex-col gap-2">
              <label htmlFor="add-walapper" className="text-sm">
                Add walpaper name
              </label>
              <input
                type="text"
                className="outline-none border border-gray-400 py-1 px-2 text-sm rounded-sm"
                onChange={(e) => setWalpaperName(e.target.value)}
                required
              />
            </section>
            <button className="py-1 px-4 bg-semi-gold1 rounded-md text-sm">
              Add
            </button>
          </form>

          <button
            className="py-1 px-4 bg-black text-white text-sm rounded-md"
            onClick={btnLogout}
            disabled={btnDisable}
          >
            {btnLoading ? <Spinner /> : "Logout"}
          </button>
        </section>
      </section>
      <nav className="pl-5 pr-10 py-3 flex justify-between items-center w-full bg-white">
        <h1 className="font-bold text-2xl">
          <Link to="/">Dashboard</Link>
        </h1>

        <img
          src="/photo.jpg"
          alt=""
          className="w-12 rounded-full cursor-pointer"
          onClick={() => setShowHideProfile("")}
        />
      </nav>
    </>
  );
};

export default NavAdmin;
