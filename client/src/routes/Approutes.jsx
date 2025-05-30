import { Route,Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Developer from "../pages/Developer";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Notfound from "../pages/Notfound";
import Basiclayouts from "../layout/Basiclayouts";
import Dashboardlayout from "../layout/Dashboardlayouts";
import Privateroute from './Privateroute'
import Intro from "../pages/dashboard/Intro";       
import Transactionform from "../pages/dashboard/Transactionform";
import { TransactionProvider } from "../context/TransactionContext";
import Summarycard from "../pages/dashboard/Summarycard";
import Expensechart from "../pages/dashboard/Expensechart";


export default function Approutes() {
    return (
        <Routes>
            <Route path="/" element={<Basiclayouts/>}>
                <Route index element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/developer" element={<Developer/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Route>
            <Route
                path="/dashboard"
                element={(
                    <Privateroute>
                        <TransactionProvider>
                            <Dashboardlayout/>
                        </TransactionProvider>
                    </Privateroute>
                )}
            >   
             <Route path="/dashboard/Intro" element={<Intro />} /> 
             <Route path="/dashboard/Summarycard" element={<Summarycard />} /> 
             <Route path="/dashboard/Transactionform" element={<Transactionform/>} /> 
             <Route path="/dashboard/Expensechart" element={<Expensechart/>} /> 

            </Route>
                <Route path="*" element={<Notfound/>}/>

          
        </Routes>
    );
}