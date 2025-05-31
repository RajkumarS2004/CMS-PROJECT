import { AuthProvider } from "./context/Authcontext";
import Approutes from "./routes/Approutes";

function App() {
  return (
    <AuthProvider>
      <Approutes />
    </AuthProvider>
   
  );
}

export default App;
