import{useContext,useEffect} from "react";
import AuthContext from"../context/AuthContext";
import{useNavigate} from "react-router";

function Privateroute({children}){
    const{isAuth}=useContext(AuthContext);
    const navigate=useNavigate();
    useEffect(()=>{
        if(!isAuth){
            navigate('/login');
        }
    },[isAuth]);
    return children;
}