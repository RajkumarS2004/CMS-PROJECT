import { AuthProvider } from "./context/Authcontext";
import Approutes from "./routes/AppRoutes";


function App() {
  return (
    <AuthProvider>
      <Approutes/>
    </AuthProvider>
   
  );
}

export default App;