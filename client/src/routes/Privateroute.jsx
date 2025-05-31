import { useContext, useEffect } from "react";
import AuthContext from "../context/Authcontext";
import { useNavigate } from "react-router";

export default function Privateroute({ children }) {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/Signin");
    }
  }, [isAuth, navigate]);
  return children;
}
