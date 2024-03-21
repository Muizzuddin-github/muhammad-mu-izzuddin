import { Helmet } from "react-helmet-async";
import Auth from "../../api/auth";
import { useState } from "react";
import Spinner from "../components/Dashboard/Spinner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const redirect = useNavigate();

  const [errMessage, setErrMessage] = useState("");

  const btnLogin = async (e) => {
    try {
      e.preventDefault();
      setBtnDisable(true);
      setIsloading(true);
      await Auth.login({
        email: email,
        password: password,
      });
      setIsloading(true);

      setTimeout(() => {
        redirect("/dashboard");
      }, 1000);
    } catch (err) {
      setIsloading(false);
      setBtnDisable(false);
      setErrMessage(err.response.data.errors[0]);
      console.log(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <main>
        <section className="h-[100vh] flex justify-center items-center">
          <section className="p-5 flex flex-col items-center">
            <h1 className="text-xl font-semibold text-center sm:text-xl">
              {errMessage.length === 0 ? "Have a nice day" : errMessage}
            </h1>
            <img
              src="/photo.jpg"
              alt=""
              className="w-20 h-20 rounded-full m-auto mt-10"
            />
            <form
              className="mt-20 m-auto w-full flex flex-col justify-center gap-8"
              onSubmit={btnLogin}
            >
              <section className=" w-72 flex flex-col gap-8">
                <input
                  type="email"
                  placeholder="Email"
                  className="outline-none border-b-2"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="on"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="outline-none border-b-2 "
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  required
                />
              </section>
              <button
                disabled={btnDisable}
                className="py-1 px-8 bg-black text-white rounded-full flex justify-center items-center"
              >
                {isLoading ? <Spinner w="w-6" h="h-6" /> : <p>Login</p>}
              </button>
            </form>
          </section>
        </section>
      </main>
    </>
  );
};

export default Login;
