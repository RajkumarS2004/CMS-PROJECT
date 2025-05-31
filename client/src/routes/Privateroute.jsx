import { useContext, useEffect } from "react";
import AuthContext from "../context/Authcontext";
import { useNavigate } from "react-router";

 function Privateroute({ children }) {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/Signin");
    }
  }, [isAuth, navigate]);
  return children;
}
export default Privateroute;