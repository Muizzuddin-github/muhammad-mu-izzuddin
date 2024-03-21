import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import LoadingPage from "../components/LoadingPage";
import Auth from "../../api/auth";
import { useNavigate } from "react-router-dom";

const OnlyNotlogin = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const redirect = useNavigate();

  useEffect(
    function () {
      Auth.isLogin()
        .then(() => redirect("/dashboard"))
        .catch((err) => {
          if (err.response.status === 401) {
            setIsLoading(false);
            return;
          }
          setErrMsg(err.response.data.errors[0]);
        });
    },
    [redirect]
  );

  return errMsg.length === 0 ? (
    isLoading ? (
      <LoadingPage />
    ) : (
      children
    )
  ) : (
    <section className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-white">
      <p className="font-semibold text-xl text-red-500">{errMsg}</p>
    </section>
  );
};

export default OnlyNotlogin;

OnlyNotlogin.propTypes = {
  children: PropTypes.node,
};
